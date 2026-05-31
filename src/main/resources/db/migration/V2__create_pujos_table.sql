CREATE TABLE pujos (
    id             BIGSERIAL PRIMARY KEY,
    name           VARCHAR(255) NOT NULL,
    slug           VARCHAR(255) NOT NULL,
    committee_name VARCHAR(255) NOT NULL,
    area_id        BIGINT       NOT NULL REFERENCES areas (id),
    description    TEXT,
    image_url      VARCHAR(500),
    google_map_url VARCHAR(500),
    featured       BOOLEAN      NOT NULL DEFAULT FALSE
);

CREATE UNIQUE INDEX idx_pujos_slug ON pujos (slug);
CREATE INDEX idx_pujos_area_id ON pujos (area_id);
CREATE INDEX idx_pujos_featured ON pujos (featured);
