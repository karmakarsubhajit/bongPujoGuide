package com.bongpujoguide.dto;

import java.util.List;

public record AreaDetailsDto(Long id, String name, String slug, List<PujoListItemDto> pujos) {}
