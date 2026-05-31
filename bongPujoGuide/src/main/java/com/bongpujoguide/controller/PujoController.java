package com.bongpujoguide.controller;

import com.bongpujoguide.dto.FeaturedPujoDto;
import com.bongpujoguide.dto.PujoDetailsDto;
import com.bongpujoguide.dto.PujoListItemDto;
import com.bongpujoguide.service.PujoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PujoController {

    private final PujoService pujoService;

    @GetMapping("/pujos")
    public List<PujoListItemDto> getAllPujos() {
        return pujoService.getAllPujos();
    }

    @GetMapping("/pujos/{slug}")
    public PujoDetailsDto getPujoBySlug(@PathVariable String slug) {
        return pujoService.getPujoBySlug(slug);
    }

    @GetMapping("/featured-pujos")
    public List<FeaturedPujoDto> getFeaturedPujos() {
        return pujoService.getFeaturedPujos();
    }
}
