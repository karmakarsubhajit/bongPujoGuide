package com.bongpujoguide.service;

import com.bongpujoguide.dto.FeaturedPujoDto;
import com.bongpujoguide.dto.PujoDetailsDto;
import com.bongpujoguide.entity.Pujo;
import com.bongpujoguide.exception.ResourceNotFoundException;
import com.bongpujoguide.mapper.PujoMapper;
import com.bongpujoguide.repository.PujoRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PujoServiceTest {

    @Mock
    private PujoRepository pujoRepository;

    @Mock
    private PujoMapper pujoMapper;

    @InjectMocks
    private PujoService pujoService;

    @Test
    void getPujoBySlug_whenFound_returnsMappedDto() {
        Pujo pujo = new Pujo();
        PujoDetailsDto dto = new PujoDetailsDto(
                1L, "Ballygunge Cultural", "ballygunge-cultural",
                "Ballygunge Cultural Association", "Ballygunge", "ballygunge",
                "A great pujo", "http://img.jpg", "http://maps.google.com", true
        );

        when(pujoRepository.findBySlug("ballygunge-cultural")).thenReturn(Optional.of(pujo));
        when(pujoMapper.toDetailsDto(pujo)).thenReturn(dto);

        PujoDetailsDto result = pujoService.getPujoBySlug("ballygunge-cultural");

        assertThat(result.slug()).isEqualTo("ballygunge-cultural");
        assertThat(result.featured()).isTrue();
    }

    @Test
    void getPujoBySlug_whenNotFound_throwsResourceNotFoundException() {
        when(pujoRepository.findBySlug("unknown")).thenReturn(Optional.empty());

        assertThatThrownBy(() -> pujoService.getPujoBySlug("unknown"))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessageContaining("unknown");
    }

    @Test
    void getFeaturedPujos_returnsMappedFeaturedList() {
        Pujo pujo = new Pujo();
        FeaturedPujoDto dto = new FeaturedPujoDto(1L, "Ballygunge Cultural", "ballygunge-cultural", "http://img.jpg", "Ballygunge");

        when(pujoRepository.findByFeaturedTrue()).thenReturn(List.of(pujo));
        when(pujoMapper.toFeaturedDtoList(List.of(pujo))).thenReturn(List.of(dto));

        List<FeaturedPujoDto> result = pujoService.getFeaturedPujos();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).slug()).isEqualTo("ballygunge-cultural");
    }
}
