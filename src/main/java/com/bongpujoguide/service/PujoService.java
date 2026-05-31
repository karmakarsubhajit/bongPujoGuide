package com.bongpujoguide.service;

import com.bongpujoguide.dto.FeaturedPujoDto;
import com.bongpujoguide.dto.PujoDetailsDto;
import com.bongpujoguide.dto.PujoListItemDto;
import com.bongpujoguide.exception.ResourceNotFoundException;
import com.bongpujoguide.mapper.PujoMapper;
import com.bongpujoguide.repository.PujoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PujoService {

    private final PujoRepository pujoRepository;
    private final PujoMapper pujoMapper;

    public List<PujoListItemDto> getAllPujos() {
        log.debug("Fetching all pujos");
        return pujoMapper.toListItemDtoList(pujoRepository.findAll());
    }

    public PujoDetailsDto getPujoBySlug(String slug) {
        log.debug("Fetching pujo by slug: {}", slug);
        return pujoRepository.findBySlug(slug)
                .map(pujoMapper::toDetailsDto)
                .orElseThrow(() -> {
                    log.warn("Pujo not found for slug: {}", slug);
                    return new ResourceNotFoundException("Pujo not found: " + slug);
                });
    }

    public List<FeaturedPujoDto> getFeaturedPujos() {
        log.debug("Fetching featured pujos");
        return pujoMapper.toFeaturedDtoList(pujoRepository.findByFeaturedTrue());
    }
}
