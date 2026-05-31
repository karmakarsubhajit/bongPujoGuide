package com.bongpujoguide.mapper;

import com.bongpujoguide.dto.AreaDetailsDto;
import com.bongpujoguide.dto.AreaListItemDto;
import com.bongpujoguide.entity.Area;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = PujoMapper.class)
public interface AreaMapper {

    AreaListItemDto toListItemDto(Area area);

    List<AreaListItemDto> toListItemDtoList(List<Area> areas);

    @Mapping(target = "pujos", source = "pujos")
    AreaDetailsDto toDetailsDto(Area area);
}
