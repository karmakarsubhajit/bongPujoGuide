package com.bongpujoguide.dto;

public record PujoDetailsDto(
        Long id,
        String name,
        String slug,
        String committeeName,
        String areaName,
        String areaSlug,
        String description,
        String imageUrl,
        String googleMapUrl,
        boolean featured
) {}
