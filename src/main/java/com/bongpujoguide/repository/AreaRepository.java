package com.bongpujoguide.repository;

import com.bongpujoguide.entity.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AreaRepository extends JpaRepository<Area, Long> {

    Optional<Area> findBySlug(String slug);

    @Query("SELECT a FROM Area a LEFT JOIN FETCH a.pujos WHERE a.slug = :slug")
    Optional<Area> findBySlugWithPujos(@Param("slug") String slug);
}
