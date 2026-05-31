package com.bongpujoguide.repository;

import com.bongpujoguide.entity.Pujo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PujoRepository extends JpaRepository<Pujo, Long> {
    Optional<Pujo> findBySlug(String slug);
    List<Pujo> findByFeaturedTrue();
    List<Pujo> findByAreaSlug(String areaSlug);
}
