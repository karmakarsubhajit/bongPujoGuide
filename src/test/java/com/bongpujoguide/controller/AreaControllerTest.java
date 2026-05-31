package com.bongpujoguide.controller;

import com.bongpujoguide.dto.AreaDetailsDto;
import com.bongpujoguide.dto.AreaListItemDto;
import com.bongpujoguide.exception.GlobalExceptionHandler;
import com.bongpujoguide.exception.ResourceNotFoundException;
import com.bongpujoguide.service.AreaService;
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

@WebMvcTest(controllers = {AreaController.class, GlobalExceptionHandler.class})
class AreaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockitoBean
    private AreaService areaService;

    @Test
    void getAllAreas_returnsOkWithAreaList() throws Exception {
        when(areaService.getAllAreas()).thenReturn(List.of(
                new AreaListItemDto(1L, "Ballygunge", "ballygunge"),
                new AreaListItemDto(2L, "Dhakuria", "dhakuria")
        ));

        mockMvc.perform(get("/api/areas"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].slug").value("ballygunge"));
    }

    @Test
    void getAreaBySlug_whenFound_returnsOk() throws Exception {
        AreaDetailsDto dto = new AreaDetailsDto(1L, "Ballygunge", "ballygunge", List.of());
        when(areaService.getAreaBySlug("ballygunge")).thenReturn(dto);

        mockMvc.perform(get("/api/areas/ballygunge"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.slug").value("ballygunge"))
                .andExpect(jsonPath("$.name").value("Ballygunge"));
    }

    @Test
    void getAreaBySlug_whenNotFound_returns404() throws Exception {
        when(areaService.getAreaBySlug("unknown")).thenThrow(new ResourceNotFoundException("Area not found: unknown"));

        mockMvc.perform(get("/api/areas/unknown"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.status").value(404))
                .andExpect(jsonPath("$.message").value("Area not found: unknown"));
    }
}
