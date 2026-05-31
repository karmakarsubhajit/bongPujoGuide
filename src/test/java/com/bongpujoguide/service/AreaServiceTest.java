package com.bongpujoguide.service;

import com.bongpujoguide.dto.AreaDetailsDto;
import com.bongpujoguide.dto.AreaListItemDto;
import com.bongpujoguide.entity.Area;
import com.bongpujoguide.exception.ResourceNotFoundException;
import com.bongpujoguide.mapper.AreaMapper;
import com.bongpujoguide.repository.AreaRepository;
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
class AreaServiceTest {

    @Mock
    private AreaRepository areaRepository;

    @Mock
    private AreaMapper areaMapper;

    @InjectMocks
    private AreaService areaService;

    @Test
    void getAllAreas_returnsAllMappedAreas() {
        Area area = new Area();
        AreaListItemDto dto = new AreaListItemDto(1L, "Ballygunge", "ballygunge");

        when(areaRepository.findAll()).thenReturn(List.of(area));
        when(areaMapper.toListItemDtoList(List.of(area))).thenReturn(List.of(dto));

        List<AreaListItemDto> result = areaService.getAllAreas();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).slug()).isEqualTo("ballygunge");
        verify(areaRepository).findAll();
    }

    @Test
    void getAreaBySlug_whenFound_returnsMappedDto() {
        Area area = new Area();
        AreaDetailsDto dto = new AreaDetailsDto(1L, "Ballygunge", "ballygunge", List.of());

        when(areaRepository.findBySlugWithPujos("ballygunge")).thenReturn(Optional.of(area));
        when(areaMapper.toDetailsDto(area)).thenReturn(dto);

        AreaDetailsDto result = areaService.getAreaBySlug("ballygunge");

        assertThat(result.slug()).isEqualTo("ballygunge");
    }

    @Test
    void getAreaBySlug_whenNotFound_throwsResourceNotFoundException() {
        when(areaRepository.findBySlugWithPujos("unknown")).thenReturn(Optional.empty());

        assertThatThrownBy(() -> areaService.getAreaBySlug("unknown"))
                .isInstanceOf(ResourceNotFoundException.class)
                .hasMessageContaining("unknown");
    }
}
