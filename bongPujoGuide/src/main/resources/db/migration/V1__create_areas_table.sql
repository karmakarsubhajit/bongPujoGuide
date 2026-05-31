CREATE TABLE areas (
    id   BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL
);

CREATE UNIQUE INDEX idx_areas_slug ON areas (slug);
