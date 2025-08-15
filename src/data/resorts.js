// src/data/resorts.js
// Expanded resort dataset focused on Tagaytay (public/private classification)
// Each resort includes tagline, classification, coverImage, virtualTour (image fallback),
// walkthrough (mp4), offers, amenities, and rooms.

export const resorts = [
  {
    id: 'olayn',
    name: 'Olayn Resort',
    owner: 'Olayn Management',
    tagline: 'Family-friendly resort with pools and garden villas',
    classification: 'Private',
    description: 'Olayn Resort offers family villas, event spaces, and multiple pools with landscaped gardens. Ideal for reunions and private events.',
    location: 'Barangay Mendez, Tagaytay City',
    coverImage: '/assets/olayn-cover.jpg',
    virtualTour: '/assets/360-olayn.jpg',
    walkthrough: '/assets/360-olayn-walk.mp4',
    amenities: ['Pool', 'Function Hall', 'Restaurant', 'Garden', 'WiFi'],
    offers: [
      { id: 'o_ol1', type: 'food', title: 'All-day Dining', items: ['Local Breakfast Set', 'Grilled Specials', 'Vegetarian Options'] },
      { id: 'o_ol2', type: 'service', title: 'Event Packages', items: ['Wedding Package', 'Birthday Package', 'Corporate Day Use'] }
    ],
    rating: 4.6,
    rooms: [
      { id: 'ol_r1', name: 'Family Villa (Pool Access)', price: 9500, capacity: 8, rating: 4.8, images: ['/assets/olayn-room1.jpg'] },
      { id: 'ol_r2', name: 'Garden Suite', price: 4200, capacity: 4, rating: 4.5, images: ['/assets/olayn-room2.jpg'] }
    ]
  },

  {
    id: 'casasilvina',
    name: 'Casa Silvina',
    owner: 'Casa Silvina',
    tagline: 'Homey stays, intimate charm',
    classification: 'Private',
    description: 'A peaceful family resort with garden spaces and an intimate atmosphere. Great for small gatherings and quiet getaways.',
    location: 'Barangay San Jose, Tagaytay',
    coverImage: '/assets/casa-cover.jpg',
    virtualTour: '/assets/360-casa.jpg',
    walkthrough: '/assets/360-casa-walk.mp4',
    amenities: ['Breakfast', 'BBQ Area', 'Function Hall', 'Free Parking'],
    offers: [
      { id: 'o_cs1', type: 'food', title: 'Breakfast Menu', items: ['Filipino Silog', 'Pancake Platter', 'Fresh Fruit Bowl'] }
    ],
    rating: 4.3,
    rooms: [
      { id: 'cs_r1', name: 'Cozy Standard', price: 2500, capacity: 2, rating: 4.2, images: ['/assets/casa-room1.jpg'] },
      { id: 'cs_r2', name: 'Family Loft', price: 4600, capacity: 5, rating: 4.4, images: ['/assets/casa-room2.jpg'] }
    ]
  },

  {
    id: 'la_soledad',
    name: 'La Soledad',
    owner: 'La Soledad Group',
    tagline: 'Tranquil hillside villas and scenic views',
    classification: 'Private',
    description: 'La Soledad combines modern comfort with Tagaytay’s serene hillside views. Perfect for couples and small groups.',
    location: 'Tagaytay Ridge',
    coverImage: '/assets/la-soledad.jpg',
    virtualTour: '/assets/360-la-soledad.jpg',
    walkthrough: '/assets/360-la-soledad-walk.mp4',
    amenities: ['Private Villas', 'Spa', 'Restaurant', 'WiFi'],
    offers: [
      { id: 'o_ls1', type: 'service', title: 'Couple Spa', items: ['60-min Couple Massage', 'Aromatherapy Add-on'] }
    ],
    rating: 4.7,
    rooms: [
      { id: 'ls_r1', name: 'Hillside Villa', price: 12000, capacity: 6, rating: 4.9, images: ['/assets/ls-room1.jpg'] },
      { id: 'ls_r2', name: 'Junior Suite', price: 4800, capacity: 3, rating: 4.5, images: ['/assets/ls-room2.jpg'] }
    ]
  },

  {
    id: 'escala',
    name: 'Escala Tagaytay Hotel',
    owner: 'Escala Hotels',
    tagline: 'Modern stays with mountain views',
    classification: 'Public',
    description: 'Escala Tagaytay offers contemporary rooms and suites with hotel amenities, conference rooms, and dining options.',
    location: 'Silang-Tanay Road, Tagaytay',
    coverImage: '/assets/escala.jpg',
    virtualTour: '/assets/360-escala.jpg',
    walkthrough: '/assets/360-escala-walk.mp4',
    amenities: ['Restaurant', 'Conference Room', 'WiFi', 'Parking'],
    offers: [
      { id: 'o_es1', type: 'food', title: 'Buffet Breakfast', items: ['Local & Continental', 'Fresh Coffee'] }
    ],
    rating: 4.2,
    rooms: [
      { id: 'es_r1', name: 'Standard Double', price: 3800, capacity: 2, rating: 4.1, images: ['/assets/escala-room1.jpg'] },
      { id: 'es_r2', name: 'Executive Suite', price: 7200, capacity: 4, rating: 4.4, images: ['/assets/escala-room2.jpg'] }
    ]
  },

  {
    id: 'aneya',
    name: 'Anya Resort Tagaytay',
    owner: 'Anya Hospitality',
    tagline: 'Luxury cottages with a garden sanctuary',
    classification: 'Private',
    description: 'Anya offers boutique luxury villas and well-curated services in a garden sanctuary—ideal for romantic retreats.',
    location: 'Tagaytay-Calamba Road',
    coverImage: '/assets/anya.jpg',
    virtualTour: '/assets/360-anya.jpg',
    walkthrough: '/assets/360-anya-walk.mp4',
    amenities: ['Spa', 'Private Cottages', 'Restaurant', 'Garden'],
    offers: [
      { id: 'o_an1', type: 'service', title: 'Romance Package', items: ['Private Dinner', 'In-villa Massage'] }
    ],
    rating: 4.8,
    rooms: [
      { id: 'an_r1', name: 'Garden Cottage', price: 15000, capacity: 2, rating: 4.9, images: ['/assets/anya-room1.jpg'] }
    ]
  },

  {
    id: 'twinlakes',
    name: 'Twin Lakes Tagaytay',
    owner: 'Twin Lakes Inc.',
    tagline: 'Winery, dining & lake views',
    classification: 'Public',
    description: 'Twin Lakes offers vineyard views, restaurants, and event spaces overlooking scenic lake and mountain vistas.',
    location: 'Twin Lakes, Tagaytay',
    coverImage: '/assets/twinlakes.jpg',
    virtualTour: '/assets/360-twinlakes.jpg',
    walkthrough: '/assets/360-twinlakes-walk.mp4',
    amenities: ['Restaurant', 'Winery', 'Events', 'Parking'],
    offers: [
      { id: 'o_tw1', type: 'food', title: 'Winery Dinner', items: ['Tasting Menu', 'Wine Pairing'] }
    ],
    rating: 4.5,
    rooms: [
      { id: 'tw_r1', name: 'Lakeview Suite', price: 6800, capacity: 3, rating: 4.6, images: ['/assets/twinlakes-room1.jpg'] }
    ]
  },

  {
    id: 'lakeview',
    name: 'Lakeview Suites',
    owner: 'Lakeview Holdings',
    tagline: 'Affordable stays with great vantage points',
    classification: 'Public',
    description: 'Lakeview Suites provides clean and comfortable rooms ideal for budget-conscious guests who want good views.',
    location: 'Tagaytay City Proper',
    coverImage: '/assets/lakeview.png',
    virtualTour: '/assets/360-lakeview.jpg',
    walkthrough: '/assets/360-lakeview-walk.mp4',
    amenities: ['WiFi', 'Breakfast', 'Parking'],
    offers: [
      { id: 'o_lv1', type: 'food', title: 'Breakfast Set', items: ['Local Breakfast', 'Coffee'] }
    ],
    rating: 4.0,
    rooms: [
      { id: 'lv_r1', name: 'Standard Twin', price: 2200, capacity: 2, rating: 4.0, images: ['/assets/lakeview-room1.jpg'] }
    ]
  },

  {
    id: 'labella',
    name: 'La Bella Boutique Hotel',
    owner: 'La Bella Group',
    tagline: 'Chic boutique hotel near the ridge',
    classification: 'Private',
    description: 'Small boutique hotel with personalized service and modern rooms close to Tagaytay’s attractions.',
    location: 'Near Picnic Grove, Tagaytay',
    coverImage: '/assets/labella.jpg',
    virtualTour: '/assets/360-labella.jpg',
    walkthrough: '/assets/360-labella-walk.mp4',
    amenities: ['Breakfast', 'Concierge', 'WiFi'],
    offers: [
      { id: 'o_lb1', type: 'food', title: 'In-house Cafe', items: ['Coffee & Pastries', 'Light Meals'] }
    ],
    rating: 4.4,
    rooms: [
      { id: 'lb_r1', name: 'Boutique Double', price: 4200, capacity: 2, rating: 4.5, images: ['/assets/labella-room1.jpg'] }
    ]
  }
];
