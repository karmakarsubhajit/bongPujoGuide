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
     'https://res.cloudinary.com/abmub/image/upload/v1780247483/550281952_1219250790239195_2109252182017556815_n_wkhvve.jpg',
     'https://maps.google.com/?q=Ballygunge+Cultural+Durga+Puja',
     TRUE),

    ('Tridhara Sammilani',
     'tridhara-sammilani',
     'Tridhara Sammilani Club',
     (SELECT id FROM areas WHERE slug = 'dhakuria'),
     'A beloved South Kolkata pujo famous for its creative idol craftsmanship and community spirit.',
     'https://res.cloudinary.com/abmub/image/upload/v1780247507/652684718_26234535672854256_5358304805618170433_n_gqhqrt.jpg',
     'https://maps.google.com/?q=Tridhara+Sammilani+Durga+Puja',
     TRUE),

    ('Lake Town Adhibasi Brinda',
     'lake-town-adhibasi-brinda',
     'Adhibasi Brinda Sangha',
     (SELECT id FROM areas WHERE slug = 'lake-town'),
     'A prominent North Kolkata pujo drawing visitors with its grand decorations and cultural programs.',
     'https://res.cloudinary.com/abmub/image/upload/v1780247491/598717089_1202495698691502_8549538585911935357_n_z6nfzx.jpg',
     'https://maps.google.com/?q=Lake+Town+Adhibasi+Brinda',
     TRUE),

    ('Shyambazar Friends',
     'shyambazar-friends',
     'Shyambazar Friends Union',
     (SELECT id FROM areas WHERE slug = 'shyambazar'),
     'A historic pujo in the heart of Shyambazar with deep cultural roots and traditional celebrations.',
     'https://res.cloudinary.com/abmub/image/upload/v1780247477/705087491_1328428212764916_8857491275332685854_n_mrffiy.jpg',
     'https://maps.google.com/?q=Shyambazar+Friends+Durga+Puja',
     FALSE),

    ('Bagbazar Sarbojanin',
     'bagbazar-sarbojanin',
     'Bagbazar Sarbojanin Durgotsav',
     (SELECT id FROM areas WHERE slug = 'bagbazar'),
     'One of the oldest and most iconic pujos in Kolkata, carrying a legacy of more than 100 years.',
     'https://res.cloudinary.com/abmub/image/upload/v1780247500/558417155_1217435403751387_822072139016631293_n_g4jzng.jpg',
     'https://maps.google.com/?q=Bagbazar+Sarbojanin+Durga+Puja',
     TRUE);
