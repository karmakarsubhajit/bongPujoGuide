package com.bongpujoguide.service;

import com.bongpujoguide.dto.AreaDetailsDto;
import com.bongpujoguide.dto.AreaListItemDto;
import com.bongpujoguide.exception.ResourceNotFoundException;
import com.bongpujoguide.mapper.AreaMapper;
import com.bongpujoguide.repository.AreaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AreaService {

    private final AreaRepository areaRepository;
    private final AreaMapper areaMapper;

    public List<AreaListItemDto> getAllAreas() {
        log.debug("Fetching all areas");
        return areaMapper.toListItemDtoList(areaRepository.findAll());
    }

    public AreaDetailsDto getAreaBySlug(String slug) {
        log.debug("Fetching area by slug: {}", slug);
        return areaRepository.findBySlugWithPujos(slug)
                .map(areaMapper::toDetailsDto)
                .orElseThrow(() -> {
                    log.warn("Area not found for slug: {}", slug);
                    return new ResourceNotFoundException("Area not found: " + slug);
                });
    }
}
