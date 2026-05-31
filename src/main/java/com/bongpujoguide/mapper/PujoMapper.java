package com.bongpujoguide.mapper;

import com.bongpujoguide.dto.FeaturedPujoDto;
import com.bongpujoguide.dto.PujoDetailsDto;
import com.bongpujoguide.dto.PujoListItemDto;
import com.bongpujoguide.entity.Pujo;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PujoMapper {

    PujoListItemDto toListItemDto(Pujo pujo);

    List<PujoListItemDto> toListItemDtoList(List<Pujo> pujos);

    @Mapping(target = "areaName", source = "area.name")
    @Mapping(target = "areaSlug", source = "area.slug")
    PujoDetailsDto toDetailsDto(Pujo pujo);

    @Mapping(target = "areaName", source = "area.name")
    FeaturedPujoDto toFeaturedDto(Pujo pujo);

    List<FeaturedPujoDto> toFeaturedDtoList(List<Pujo> pujos);
}
