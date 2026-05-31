package com.bongpujoguide.controller;

import com.bongpujoguide.dto.FeaturedPujoDto;
import com.bongpujoguide.dto.PujoDetailsDto;
import com.bongpujoguide.exception.GlobalExceptionHandler;
import com.bongpujoguide.exception.ResourceNotFoundException;
import com.bongpujoguide.service.PujoService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = {PujoController.class, GlobalExceptionHandler.class})
class PujoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private PujoService pujoService;

    @Test
    void getPujoBySlug_whenFound_returnsOk() throws Exception {
        PujoDetailsDto dto = new PujoDetailsDto(
                1L, "Ballygunge Cultural", "ballygunge-cultural",
                "Ballygunge Cultural Association", "Ballygunge", "ballygunge",
                "A great pujo", "http://img.jpg", "http://maps.google.com", true
        );
        when(pujoService.getPujoBySlug("ballygunge-cultural")).thenReturn(dto);

        mockMvc.perform(get("/api/pujos/ballygunge-cultural"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.slug").value("ballygunge-cultural"))
                .andExpect(jsonPath("$.featured").value(true));
    }

    @Test
    void getPujoBySlug_whenNotFound_returns404() throws Exception {
        when(pujoService.getPujoBySlug("unknown")).thenThrow(new ResourceNotFoundException("Pujo not found: unknown"));

        mockMvc.perform(get("/api/pujos/unknown"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status").value(404));
    }

    @Test
    void getFeaturedPujos_returnsOkWithList() throws Exception {
        when(pujoService.getFeaturedPujos()).thenReturn(List.of(
                new FeaturedPujoDto(1L, "Ballygunge Cultural", "ballygunge-cultural", "http://img.jpg", "Ballygunge")
        ));

        mockMvc.perform(get("/api/featured-pujos"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].areaName").value("Ballygunge"));
    }
}
