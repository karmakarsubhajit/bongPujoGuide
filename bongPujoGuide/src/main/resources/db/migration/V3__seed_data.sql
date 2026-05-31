INSERT INTO areas (name, slug) VALUES
    ('Ballygunge', 'ballygunge'),
    ('Dhakuria', 'dhakuria'),
    ('Lake Town', 'lake-town'),
    ('Shyambazar', 'shyambazar'),
    ('Bagbazar', 'bagbazar');

INSERT INTO pujos (name, slug, committee_name, area_id, description, image_url, google_map_url, featured)
VALUES
    ('Ballygunge Cultural',
     'ballygunge-cultural',
     'Ballygunge Cultural Association',
     (SELECT id FROM areas WHERE slug = 'ballygunge'),
     'One of the most celebrated Durga Pujos in South Kolkata, known for its artistic themes and massive footfall.',
     'https://placehold.co/800x450?text=Ballygunge+Cultural',
     'https://maps.google.com/?q=Ballygunge+Cultural+Durga+Puja',
     TRUE),

    ('Tridhara Sammilani',
     'tridhara-sammilani',
     'Tridhara Sammilani Club',
     (SELECT id FROM areas WHERE slug = 'dhakuria'),
     'A beloved South Kolkata pujo famous for its creative idol craftsmanship and community spirit.',
     'https://placehold.co/800x450?text=Tridhara+Sammilani',
     'https://maps.google.com/?q=Tridhara+Sammilani+Durga+Puja',
     TRUE),

    ('Lake Town Adhibasi Brinda',
     'lake-town-adhibasi-brinda',
     'Adhibasi Brinda Sangha',
     (SELECT id FROM areas WHERE slug = 'lake-town'),
     'A prominent North Kolkata pujo drawing visitors with its grand decorations and cultural programs.',
     'https://placehold.co/800x450?text=Lake+Town+Adhibasi+Brinda',
     'https://maps.google.com/?q=Lake+Town+Adhibasi+Brinda',
     TRUE),

    ('Shyambazar Friends',
     'shyambazar-friends',
     'Shyambazar Friends Union',
     (SELECT id FROM areas WHERE slug = 'shyambazar'),
     'A historic pujo in the heart of Shyambazar with deep cultural roots and traditional celebrations.',
     'https://placehold.co/800x450?text=Shyambazar+Friends',
     'https://maps.google.com/?q=Shyambazar+Friends+Durga+Puja',
     FALSE),

    ('Bagbazar Sarbojanin',
     'bagbazar-sarbojanin',
     'Bagbazar Sarbojanin Durgotsav',
     (SELECT id FROM areas WHERE slug = 'bagbazar'),
     'One of the oldest and most iconic pujos in Kolkata, carrying a legacy of more than 100 years.',
     'https://placehold.co/800x450?text=Bagbazar+Sarbojanin',
     'https://maps.google.com/?q=Bagbazar+Sarbojanin+Durga+Puja',
     TRUE);
