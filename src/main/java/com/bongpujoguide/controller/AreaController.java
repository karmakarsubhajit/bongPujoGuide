package com.bongpujoguide.controller;

import com.bongpujoguide.dto.AreaDetailsDto;
import com.bongpujoguide.dto.AreaListItemDto;
import com.bongpujoguide.service.AreaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/areas")
@RequiredArgsConstructor
public class AreaController {

    private final AreaService areaService;

    @GetMapping
    public List<AreaListItemDto> getAllAreas() {
        return areaService.getAllAreas();
    }

    @GetMapping("/{slug}")
    public AreaDetailsDto getAreaBySlug(@PathVariable String slug) {
        return areaService.getAreaBySlug(slug);
    }
}
