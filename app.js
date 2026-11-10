/**
 * AMC FOODS - Pure Natural Seafood D2C Storefront
 * High-Converting Seafood D2C Storefront
 * Works 100% both offline (file://) and online (http://localhost:3000)
 */

(function () {
  'use strict';

  // 1. DATASETS
  const PRODUCTS = [
    {
      id: "prod-sockeye-salmon",
      name: "Wild Alaskan Sockeye Salmon",
      category: "Fresh Catch",
      tag: "Wild-Caught Bristol Bay",
      badge: "Best Seller",
      rating: 4.95,
      reviewsCount: 1420,
      shortDescription: "Vibrant ruby-red wild salmon with rich flavor and highest natural Omega-3 content. Pure wild ocean caught.",
      origin: "Bristol Bay, Alaska",
      harvestMethod: "Sustainably Drift Net Harvested",
      certifications: ["MSC Certified Sustainable", "Wild-Caught USA", "Non-GMO"],
      flashFrozen: "Flash-frozen at sea within 3 hours at -40°F",
      pricePerPortion: 7.49,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 32.99, compareAtPrice: 38.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 59.99, compareAtPrice: 69.99 },
        { id: "v3", packCount: 14, totalWeight: "5.25 lbs", price: 99.99, compareAtPrice: 119.99 }
      ],
      preparationOptions: ["Portioned Fillets (Skin-on)", "Skinless Portions", "Thick-Cut Steaks"],
      nutrition: { calories: 220, protein: "34g", omega3: "1,450mg", fat: "8g", sodium: "75mg" },
      cookingTips: "Pan-sear skin-side down for 4 mins until crispy, flip and cook 2 mins. Medium-rare is perfection.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-pacific-halibut",
      name: "Pacific Wild Halibut Portions",
      category: "Fresh Catch",
      tag: "Wild-Caught Gulf of Alaska",
      badge: "Chef Favorite",
      rating: 4.92,
      reviewsCount: 890,
      shortDescription: "Sweet, delicately mild white fish with large, tender flakes and a clean, melt-in-your-mouth oceanic finish.",
      origin: "Gulf of Alaska / Dutch Harbor",
      harvestMethod: "Hook & Line Longline Harvested",
      certifications: ["MSC Certified", "Alaska Seafood Verified"],
      flashFrozen: "Flash-frozen within 4 hours at sea",
      pricePerPortion: 9.99,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 42.99, compareAtPrice: 49.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 79.99, compareAtPrice: 92.99 },
        { id: "v3", packCount: 12, totalWeight: "4.5 lbs", price: 114.99, compareAtPrice: 134.99 }
      ],
      preparationOptions: ["Skinless Center-Cut Fillets", "Portioned Fillets (Skin-on)"],
      nutrition: { calories: 190, protein: "36g", omega3: "680mg", fat: "2.5g", sodium: "95mg" },
      cookingTips: "Pan-roast in foaming European butter with smashed garlic, capers, and fresh lemon slices.",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44a0463?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-sea-scallops",
      name: "Jumbo Wild Sea Scallops (Dry-Pack)",
      category: "Shellfish",
      tag: "10-20ct Colossal Dry Pack",
      badge: "Top Rated",
      rating: 4.98,
      reviewsCount: 2150,
      shortDescription: "100% natural, chemical-free 'dry' sea scallops. Caramelizes to a golden crust in minutes with buttery sweet tenderness.",
      origin: "Georges Bank, Massachusetts",
      harvestMethod: "Sustainably Dredged North Atlantic",
      certifications: ["Dry Pack (No STPP / No Added Water)", "Wild Atlantic Harvest"],
      flashFrozen: "Individually Quick Frozen (IQF) at -40°F",
      pricePerPortion: 8.75,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 36.99, compareAtPrice: 42.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 69.99, compareAtPrice: 79.99 },
        { id: "v3", packCount: 12, totalWeight: "4.5 lbs", price: 99.99, compareAtPrice: 118.99 }
      ],
      preparationOptions: ["Dry-Pack Colossal (Unprocessed)", "Marinated Herb-Garlic Butter"],
      nutrition: { calories: 160, protein: "30g", omega3: "420mg", fat: "1g", sodium: "260mg" },
      cookingTips: "Pat completely dry. Sear in screaming hot cast-iron skillet for 90 seconds per side.",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-wild-gulf-shrimp",
      name: "Wild American Gulf Pink Shrimp",
      category: "Shellfish",
      tag: "Colossal 16/20ct Raw EZ-Peel",
      badge: "Customer Favorite",
      rating: 4.91,
      reviewsCount: 1120,
      shortDescription: "Sweet, snappy wild shrimp from warm Gulf waters. Chemical-free, never farm-raised, and peeled for convenience.",
      origin: "Key West & Gulf of Mexico",
      harvestMethod: "Wild Trawl Fleet Certified",
      certifications: ["Wild American Shrimp Certified", "Zero Preservatives"],
      flashFrozen: "IQF Onboard within 90 minutes",
      pricePerPortion: 6.99,
      portionSize: "8 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "2.0 lbs", price: 29.99, compareAtPrice: 34.99 },
        { id: "v2", packCount: 8, totalWeight: "4.0 lbs", price: 56.99, compareAtPrice: 66.99 },
        { id: "v3", packCount: 12, totalWeight: "6.0 lbs", price: 79.99, compareAtPrice: 96.99 }
      ],
      preparationOptions: ["EZ-Peel Deveined (Tail-on)", "Peeled & Deveined (Tail-off)", "Shell-On Raw Whole"],
      nutrition: { calories: 140, protein: "28g", omega3: "320mg", fat: "1.5g", sodium: "190mg" },
      cookingTips: "Grill on skewers for 2 minutes per side or sauté with garlic, chili flakes, and olive oil.",
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-ahi-tuna",
      name: "Sashimi-Grade Yellowfin Ahi Tuna",
      category: "Sashimi Grade",
      tag: "AAA #1 Sashimi Grade",
      badge: "Raw & Poke Ready",
      rating: 4.96,
      reviewsCount: 1640,
      shortDescription: "Vibrant ruby-red sushi-grade tuna steaks. Firm texture, clean ocean flavor, ideal for rare seared steaks or poke.",
      origin: "Hawaii / Central Pacific Waters",
      harvestMethod: "Sustainable Handline & Pole Caught",
      certifications: ["Dolphin-Safe Certified", "100% Sashimi Grade #1"],
      flashFrozen: "Super-frozen at -60°C cryogenic hold",
      pricePerPortion: 8.49,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 35.99, compareAtPrice: 41.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 67.99, compareAtPrice: 78.99 },
        { id: "v3", packCount: 12, totalWeight: "4.5 lbs", price: 96.99, compareAtPrice: 114.99 }
      ],
      preparationOptions: ["Thick-Cut Steaks", "Poke-Cut Cubes", "Saku Sashimi Block"],
      nutrition: { calories: 180, protein: "38g", omega3: "890mg", fat: "1.2g", sodium: "60mg" },
      cookingTips: "Sear in smoking hot sesame oil for 45-60 seconds per side. Center must remain cool and deep ruby.",
      image: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-chilean-seabass",
      name: "Glacier 51 Patagonian Toothfish (Chilean Sea Bass)",
      category: "Fresh Catch",
      tag: "Wild Antarctic Glacier 51",
      badge: "Luxury Catch",
      rating: 4.99,
      reviewsCount: 780,
      shortDescription: "The Wagyu of the sea. Pure snow-white fillet with an extraordinarily rich, buttery flake that never dries out.",
      origin: "Heard Island, Sub-Antarctic Ocean",
      harvestMethod: "Strict MSC Certified Demersal Longline",
      certifications: ["MSC Certified Glacier 51", "Collette Traceability Tagged"],
      flashFrozen: "Flash-frozen within 2 hours at -45°F",
      pricePerPortion: 14.99,
      portionSize: "7 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.75 lbs", price: 64.99, compareAtPrice: 74.99 },
        { id: "v2", packCount: 8, totalWeight: "3.5 lbs", price: 124.99, compareAtPrice: 145.99 },
        { id: "v3", packCount: 12, totalWeight: "5.25 lbs", price: 179.99, compareAtPrice: 210.99 }
      ],
      preparationOptions: ["Skin-on Thick Center Cut", "Skinless Fillet Portions"],
      nutrition: { calories: 280, protein: "32g", omega3: "2,100mg", fat: "16g", sodium: "85mg" },
      cookingTips: "Coat with sweet white miso glaze and broil 8 minutes until blistered and caramelized.",
      image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-maine-lobster-tails",
      name: "Wild Cold-Water Maine Lobster Tails",
      category: "Shellfish",
      tag: "Wild-Caught Atlantic Cold Water",
      badge: "Signature Luxury",
      rating: 4.97,
      reviewsCount: 1890,
      shortDescription: "Sweet, firm, succulent meat harvested by generational Maine lobstermen from icy Atlantic waters.",
      origin: "Casco Bay & Bar Harbor, Maine",
      harvestMethod: "Low-Impact Trap & Pot Harvested",
      certifications: ["Gulf of Maine Certified", "100% Sustainable Fishery"],
      flashFrozen: "Flash-frozen using cryogenic nitrogen bath",
      pricePerPortion: 13.50,
      portionSize: "5-6 oz Tail",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 58.99, compareAtPrice: 68.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 112.99, compareAtPrice: 129.99 },
        { id: "v3", packCount: 12, totalWeight: "4.5 lbs", price: 159.99, compareAtPrice: 189.99 }
      ],
      preparationOptions: ["Butterfly Cut Ready", "Whole Raw Tail Shell-On"],
      nutrition: { calories: 130, protein: "27g", omega3: "210mg", fat: "1g", sodium: "380mg" },
      cookingTips: "Butterfly shell, pull meat upward to rest on top, brush with garlic butter and broil for 7 minutes.",
      image: "https://images.unsplash.com/photo-1559737558-245cb384218f?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-king-crab-legs",
      name: "Colossal Wild Red King Crab Legs",
      category: "Shellfish",
      tag: "Bering Sea 6/9ct Colossal Size",
      badge: "Pre-Cooked & Steamed",
      rating: 4.98,
      reviewsCount: 2340,
      shortDescription: "Giant succulent legs bursting with rich, naturally sweet king crab meat. Pre-steamed at harvest, ready in minutes.",
      origin: "Bering Sea / Norton Sound, Alaska",
      harvestMethod: "Bering Sea Fleet Pot Harvested",
      certifications: ["100% Alaskan Red King Crab", "Responsible Fisheries Management"],
      flashFrozen: "Glazed and flash-frozen at sea",
      pricePerPortion: 24.99,
      portionSize: "1 lb Claws & Legs",
      variants: [
        { id: "v1", packCount: 2, totalWeight: "2.0 lbs", price: 99.99, compareAtPrice: 119.99 },
        { id: "v2", packCount: 4, totalWeight: "4.0 lbs", price: 189.99, compareAtPrice: 229.99 },
        { id: "v3", packCount: 6, totalWeight: "6.0 lbs", price: 274.99, compareAtPrice: 329.99 }
      ],
      preparationOptions: ["Whole Legs & Claws (Score-Cut)", "Standard Whole Legs (Unsplit)"],
      nutrition: { calories: 130, protein: "26g", omega3: "610mg", fat: "2g", sodium: "910mg" },
      cookingTips: "Steam over boiling salted water for 5 minutes until hot. Dip into melted warm clarified butter.",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: false
    },
    {
      id: "prod-wild-cod",
      name: "Wild Alaskan Pacific Cod Portions",
      category: "Fresh Catch",
      tag: "Wild-Caught Longline",
      badge: "Everyday Value",
      rating: 4.88,
      reviewsCount: 940,
      shortDescription: "Firm, thick white flakes with a gentle, clean ocean taste. High protein, naturally low fat.",
      origin: "Aleutian Islands, Alaska",
      harvestMethod: "Certified Longline Hook Caught",
      certifications: ["MSC Certified", "Alaska RFM"],
      flashFrozen: "Flash-frozen within 3 hours onboard",
      pricePerPortion: 5.99,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 24.99, compareAtPrice: 29.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 47.99, compareAtPrice: 56.99 },
        { id: "v3", packCount: 14, totalWeight: "5.25 lbs", price: 79.99, compareAtPrice: 94.99 }
      ],
      preparationOptions: ["Skinless Fillet Portions", "Portioned Fillets (Skin-on)"],
      nutrition: { calories: 150, protein: "32g", omega3: "290mg", fat: "1g", sodium: "115mg" },
      cookingTips: "Bake at 400°F with breadcrumbs, herbs, and butter for 12-14 minutes.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-wild-king-salmon",
      name: "Copper River Wild King Salmon (Chinook)",
      category: "Fresh Catch",
      tag: "Wild Copper River Chinook",
      badge: "Crown Jewel",
      rating: 4.99,
      reviewsCount: 830,
      shortDescription: "The undisputed king of wild salmon. Dense marbling of healthy Omega-3 oils with an unmatched velvety melt.",
      origin: "Copper River Flats, Cordova, Alaska",
      harvestMethod: "Limited Spring Drift Net Fishery",
      certifications: ["Copper River Seal of Authenticity", "Wild-Caught USA"],
      flashFrozen: "Flash-frozen on dry ice within 2 hours",
      pricePerPortion: 15.99,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 69.99, compareAtPrice: 79.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 134.99, compareAtPrice: 159.99 },
        { id: "v3", packCount: 12, totalWeight: "4.5 lbs", price: 194.99, compareAtPrice: 229.99 }
      ],
      preparationOptions: ["Portioned Fillets (Skin-on)", "Skinless Center-Cut Fillets"],
      nutrition: { calories: 290, protein: "34g", omega3: "2,200mg", fat: "16g", sodium: "70mg" },
      cookingTips: "Gently grill on a water-soaked cedar plank. Keep center medium-rare.",
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-black-cod",
      name: "Wild Alaskan Black Cod (Sablefish)",
      category: "Fresh Catch",
      tag: "Deep-Water Wild Sablefish",
      badge: "Chef Secret",
      rating: 4.96,
      reviewsCount: 670,
      shortDescription: "Known as Butterfish. Luxurious, silky texture and a rich flavor profile that absorbs marinades like a dream.",
      origin: "Gulf of Alaska / Prince William Sound",
      harvestMethod: "Deep-Water Longline Certified",
      certifications: ["MSC Certified Sustainable", "Alaskan Ocean Guard"],
      flashFrozen: "Flash-frozen at sea -40°F",
      pricePerPortion: 11.25,
      portionSize: "6 oz",
      variants: [
        { id: "v1", packCount: 4, totalWeight: "1.5 lbs", price: 49.99, compareAtPrice: 58.99 },
        { id: "v2", packCount: 8, totalWeight: "3.0 lbs", price: 94.99, compareAtPrice: 112.99 },
        { id: "v3", packCount: 12, totalWeight: "4.5 lbs", price: 139.99, compareAtPrice: 165.99 }
      ],
      preparationOptions: ["Portioned Fillets (Skin-on)", "Skinless Fillets"],
      nutrition: { calories: 250, protein: "29g", omega3: "1,800mg", fat: "15g", sodium: "80mg" },
      cookingTips: "Marinate in sake, mirin, and white miso for 24-48 hours. Broil until surface is browned and blistered.",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44a0463?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    },
    {
      id: "prod-smoked-salmon",
      name: "Artisan Cold-Smoked Wild Sockeye Salmon",
      category: "Smoked & Prepared",
      tag: "Hardwood Applewood Smoked",
      badge: "Ready to Eat",
      rating: 4.94,
      reviewsCount: 1250,
      shortDescription: "Traditional Northwest sea-salt cure, cold smoked gently over natural applewood chips. Paper-thin slices.",
      origin: "Petersburg, Southeast Alaska",
      harvestMethod: "Wild Alaskan Harvest",
      certifications: ["All-Natural Ingredients", "No Nitrates", "Kosher"],
      flashFrozen: "Chilled and vacuum sealed immediately",
      pricePerPortion: 8.99,
      portionSize: "4 oz Pack",
      variants: [
        { id: "v1", packCount: 3, totalWeight: "12 oz", price: 27.99, compareAtPrice: 32.99 },
        { id: "v2", packCount: 6, totalWeight: "24 oz", price: 52.99, compareAtPrice: 62.99 },
        { id: "v3", packCount: 10, totalWeight: "40 oz", price: 84.99, compareAtPrice: 99.99 }
      ],
      preparationOptions: ["Thin Sliced Portions", "Cured Whole Fillet"],
      nutrition: { calories: 160, protein: "26g", omega3: "1,200mg", fat: "5g", sodium: "580mg" },
      cookingTips: "Ready to eat right out of the pouch. Serve with fresh whipped cream cheese, capers, and dill.",
      image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80",
      boxBuilderEligible: true
    }
  ];

  const CURATED_BOXES = [
    {
      id: "box-wild-salmon-sampler",
      name: "The Alaskan Wild Salmon Showcase Box",
      badge: "Signature Box",
      portions: 14,
      rating: 4.97,
      reviewsCount: 840,
      price: 109.99,
      compareAtPrice: 134.99,
      subscribePrice: 98.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
      description: "6x Wild Sockeye Fillets (6oz), 4x Copper River King Fillets (6oz), 4x Applewood Smoked Salmon packs (4oz).",
      items: ["6x Wild Sockeye Salmon 6oz", "4x Copper River King Salmon 6oz", "4x Smoked Sockeye 4oz"]
    },
    {
      id: "box-surf-and-turf-seafood",
      name: "The Ultimate Shellfish & Lobster Feast",
      badge: "Celebration Favorite",
      portions: 12,
      rating: 4.99,
      reviewsCount: 1150,
      price: 139.99,
      compareAtPrice: 169.99,
      subscribePrice: 125.99,
      image: "https://images.unsplash.com/photo-1559737558-245cb384218f?auto=format&fit=crop&w=800&q=80",
      description: "4x Maine Lobster Tails (5-6oz), 4x Jumbo Dry Sea Scallops (6oz), 4x Wild Gulf Pink Shrimp (8oz).",
      items: ["4x Maine Cold Water Lobster Tails", "4x Dry-Pack Jumbo Sea Scallops", "4x Colossal Wild Gulf Shrimp"]
    },
    {
      id: "box-omega3-heart-health",
      name: "The Heart-Healthy Omega-3 Power Box",
      badge: "Cardio Recommended",
      portions: 14,
      rating: 4.94,
      reviewsCount: 920,
      price: 114.99,
      compareAtPrice: 139.99,
      subscribePrice: 103.49,
      image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80",
      description: "Over 20,000mg total Omega-3s. 6x Sockeye Salmon (6oz), 4x Alaskan Sablefish (6oz), 4x Yellowfin Ahi Steaks (6oz).",
      items: ["6x Wild Alaskan Sockeye Salmon", "4x Deep-Water Sablefish (Black Cod)", "4x #1 Grade Yellowfin Ahi Tuna"]
    },
    {
      id: "box-white-fish-variety",
      name: "The Pristine Pacific White Fish Medley",
      badge: "Everyday Lean Protein",
      portions: 14,
      rating: 4.91,
      reviewsCount: 630,
      price: 99.99,
      compareAtPrice: 119.99,
      subscribePrice: 89.99,
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44a0463?auto=format&fit=crop&w=800&q=80",
      description: "Clean, delicate white fish fillets: 6x Pacific Halibut (6oz), 4x Alaskan Cod (6oz), 4x Patagonian Sea Bass (7oz).",
      items: ["6x Wild Pacific Halibut 6oz", "4x Alaskan Pacific Cod 6oz", "4x Chilean Sea Bass Portions"]
    }
  ];

  const CROSS_SELLS = [
    {
      id: "cs-lemon-herb-butter",
      name: "Artisan Lemon Herb Finishing Butter",
      weight: "3.5 oz Roll",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cs-cedar-planks",
      name: "Western Red Cedar Grilling Planks (2-Pack)",
      weight: "2 Pack / 12\" Planks",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cs-spice-rub",
      name: "AM Signature Ocean Citrus & Dill Rub",
      weight: "4 oz Tin",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "cs-shrimp-cocktail-addon",
      name: "Cooked Colossal Cocktail Shrimp Add-on",
      weight: "8 oz / ~12 Shrimp",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const SOURCING_DATA = [
    {
      id: "bristol-bay",
      name: "Bristol Bay, Alaska",
      species: "Wild Sockeye Salmon",
      harvestMethod: "Drift Net / Low Impact Fishery",
      season: "June – August Peak",
      temp: "38°F - 42°F Glacial Waters",
      badge: "MSC Certified Sustainable",
      description: "Pristine glacial river systems nourishing millions of wild salmon with unmatched ruby flesh and natural fats.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "gulf-of-alaska",
      name: "Gulf of Alaska & Dutch Harbor",
      species: "Pacific Halibut & Black Cod",
      harvestMethod: "Hook & Line Deep Longline",
      season: "March – November",
      temp: "36°F - 40°F Deep Sub-Arctic",
      badge: "Alaska RFM Certified",
      description: "Deep oceanic trenches producing firm, sweet, pure white fish packed with natural gelatin and clean flavor.",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44a0463?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "maine-coast",
      name: "Casco Bay & Bar Harbor, Maine",
      species: "Cold-Water Maine Lobster",
      harvestMethod: "Generational Low-Impact Traps",
      season: "Year-Round / Peak Autumn",
      temp: "42°F - 48°F Frigid Atlantic",
      badge: "100% Sustainable Fishery",
      description: "Rugged rocky shoals swept by cold Atlantic tides produce extraordinarily tender, sweet claw & tail meat.",
      image: "https://images.unsplash.com/photo-1559737558-245cb384218f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "georges-bank",
      name: "Georges Bank, Massachusetts",
      species: "Jumbo Dry Sea Scallops",
      harvestMethod: "Rotational Area Scallop Dredge",
      season: "May – October",
      temp: "40°F - 46°F Offshore Bank",
      badge: "100% Chemical-Free Dry Pack",
      description: "Rich tidal currents nurture thick, sweet sea scallops. Zero added water or phosphates, allowing deep caramelization.",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const RECIPES_DATA = [
    {
      id: "rec-1",
      title: "Pan-Seared Pacific Halibut with Lemon-Caper Butter",
      time: "18 mins",
      difficulty: "Easy",
      seafoodName: "Pacific Wild Halibut Portions",
      seafoodId: "prod-pacific-halibut",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44a0463?auto=format&fit=crop&w=600&q=80",
      desc: "Crispy golden crust with tender white flakes basted in wine, foaming butter, capers, and fresh lemon."
    },
    {
      id: "rec-2",
      title: "Cedar Plank Wild Sockeye with Maple Dijon Glaze",
      time: "25 mins",
      difficulty: "Easy",
      seafoodName: "Wild Alaskan Sockeye Salmon",
      seafoodId: "prod-sockeye-salmon",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      desc: "Sweet, tangy maple glaze caramelized gently over natural cedar smoke for a showstopping main."
    },
    {
      id: "rec-3",
      title: "Golden Caramelized Jumbo Scallops in Garlic Ghee",
      time: "12 mins",
      difficulty: "Medium",
      seafoodName: "Jumbo Wild Sea Scallops",
      seafoodId: "prod-sea-scallops",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
      desc: "Restaurant quality sear in screaming hot cast iron. Naturally sweet and tender inside."
    },
    {
      id: "rec-4",
      title: "Hawaiian Sesame-Ginger Ahi Tuna Poke Bowl",
      time: "15 mins",
      difficulty: "Easy",
      seafoodName: "Sashimi-Grade Yellowfin Ahi Tuna",
      seafoodId: "prod-ahi-tuna",
      image: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?auto=format&fit=crop&w=600&q=80",
      desc: "Sashimi-grade ruby ahi tossed in toasted sesame oil, tamari, sweet onion, and fresh avocado over warm rice."
    }
  ];

  // 2. APPLICATION STATE
  const state = {
    cart: [],
    selectedVariants: {}, // Tracks active fillet pack variant index per product
    boxTargetSize: 12,
    boxFrequency: 'subscribe',
    customBoxPortions: {
      "prod-sockeye-salmon": 4,
      "prod-pacific-halibut": 2,
      "prod-sea-scallops": 2,
      "prod-wild-gulf-shrimp": 2,
      "prod-ahi-tuna": 2
    },
    activeCategory: 'All Catch',
    activeTag: 'All',
    searchQuery: '',
    sortBy: 'popular',
    zipCode: '90210',
    deliveryDate: 'Tomorrow',
    carrier: 'UPS / FedEx Next-Day Chilled Express',
    discountPercent: 0,
    appliedPromoName: ''
  };

  const FREE_SHIPPING_THRESHOLD = 100.00; // Sizzlefish Fast Free Shipping on Orders $100+

  // 3. TOAST HELPER
  function showToast(msg) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    if (!toast || !msgEl) return;
    msgEl.textContent = msg;
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }, 3800);
  }

  // 4. CART CALCULATIONS & UI UPDATE
  function updateCartUI() {
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const discount = (subtotal * state.discountPercent) / 100;
    const shipping = subtotal === 0 ? 0 : (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 18.50);
    const total = Math.max(0, subtotal - discount + shipping);

    // Badges & Counters
    const headerCounter = document.getElementById('cart-counter-badge');
    const headerSubtotal = document.getElementById('cart-subtotal-header');
    const drawerCounter = document.getElementById('drawer-counter-badge');
    if (headerCounter) headerCounter.textContent = totalItems;
    if (headerSubtotal) headerSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (drawerCounter) drawerCounter.textContent = `${totalItems} items`;

    // Free shipping progress
    const freeDiff = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
    const progressPct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    const shipLabel = document.getElementById('free-shipping-label');
    const shipPercent = document.getElementById('free-shipping-percent');
    const shipBar = document.getElementById('free-shipping-bar');

    if (shipLabel) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        shipLabel.innerHTML = '🎉 <strong class="text-emerald-700">You unlocked FREE Fast Shipping (${freeDiff.toFixed(2)}00+)!</strong>';
      } else {
        shipLabel.innerHTML = `Add <strong class="text-orange-600">${freeDiff.toFixed(2)}</strong> more for FREE Shipping!`;
      }
    }
    if (shipPercent) shipPercent.textContent = `${progressPct}%`;
    if (shipBar) shipBar.style.width = `${progressPct}%`;

    // Totals in cart footer
    const subEl = document.getElementById('cart-subtotal-val');
    const shipEl = document.getElementById('cart-shipping-val');
    const totEl = document.getElementById('cart-total-val');
    if (subEl) subEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shipEl) shipEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totEl) totEl.textContent = `$${total.toFixed(2)}`;

    // Promo badge
    const promoBadge = document.getElementById('promo-applied-badge');
    const promoAmt = document.getElementById('promo-discount-amount');
    if (promoBadge && promoAmt) {
      if (state.discountPercent > 0) {
        promoBadge.classList.remove('hidden');
        promoBadge.classList.add('flex');
        promoAmt.textContent = `-$${discount.toFixed(2)} (${state.appliedPromoName})`;
      } else {
        promoBadge.classList.add('hidden');
        promoBadge.classList.remove('flex');
      }
    }

    // Render cart items
    const itemsContainer = document.getElementById('cart-items-container');
    if (itemsContainer) {
      if (state.cart.length === 0) {
        itemsContainer.innerHTML = `
          <div class="text-center py-12 space-y-3">
            <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 text-2xl">
              <i class="fa-solid fa-basket-shopping"></i>
            </div>
            <h4 class="font-bold text-slate-800">Your catch box is empty</h4>
            <p class="text-xs text-slate-500 max-w-xs mx-auto">
              Fill your freezer with fresh wild-caught salmon, halibut, or customize your own seafood box!
            </p>
            <button type="button" onclick="app.closeCart()" class="mt-3 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs cursor-pointer active:scale-95">
              Start Shopping
            </button>
          </div>
        `;
      } else {
        itemsContainer.innerHTML = state.cart.map(item => `
          <div class="flex gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-slate-100 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-start">
                <h4 class="text-xs font-bold text-slate-900 leading-tight">${item.name}</h4>
                <button type="button" onclick="app.removeCartItem('${item.cartItemId}')" class="text-slate-400 hover:text-red-500 text-xs ml-2 cursor-pointer p-1">✕</button>
              </div>
              <span class="text-[11px] text-slate-500 block mt-0.5">${item.preparation} • ${item.weight}</span>
              <div class="flex justify-between items-center mt-2.5">
                <div class="flex items-center gap-2 border border-slate-200 rounded-lg bg-slate-50 px-2 py-0.5">
                  <button type="button" onclick="app.adjustCartItemQty('${item.cartItemId}', -1)" class="text-slate-600 hover:text-black font-bold text-xs cursor-pointer px-1 active:scale-95">-</button>
                  <span class="text-xs font-black text-slate-900 w-4 text-center">${item.quantity}</span>
                  <button type="button" onclick="app.adjustCartItemQty('${item.cartItemId}', 1)" class="text-slate-600 hover:text-black font-bold text-xs cursor-pointer px-1 active:scale-95">+</button>
                </div>
                <span class="text-sm font-black text-slate-900 font-heading">$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  }

    // 5. RENDER CATALOG (SIZZLEFISH BEST SELLERS & CATCH)
  function renderCatalog() {
    const grid = document.getElementById('products-catalog-grid');
    if (!grid) return;

    let list = PRODUCTS.filter(p => {
      if (state.activeCategory !== 'All Catch') {
        if (state.activeCategory === 'Fresh Catch' && p.category !== 'Fresh Catch') return false;
        if (state.activeCategory === 'Shellfish' && p.category !== 'Shellfish') return false;
        if (state.activeCategory === 'Sashimi Grade' && p.category !== 'Sashimi Grade') return false;
        if (state.activeCategory === 'Smoked & Prepared' && p.category !== 'Smoked & Prepared') return false;
      }
      if (state.activeTag !== 'All') {
        if (state.activeTag === 'Wild' && !p.tag.includes('Wild')) return false;
        if (state.activeTag === 'Omega-3' && parseInt(p.nutrition.omega3.replace(/\D/g, ''), 10) < 1000) return false;
        if (state.activeTag === 'Best Seller' && p.badge !== 'Best Seller' && p.badge !== 'Top Rated') return false;
      }
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        const matches = p.name.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    });

    if (state.sortBy === 'price-asc') list.sort((a, b) => a.pricePerPortion - b.pricePerPortion);
    else if (state.sortBy === 'price-desc') list.sort((a, b) => b.pricePerPortion - a.pricePerPortion);
    else if (state.sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
          <i class="fa-solid fa-magnifying-glass text-4xl text-slate-400 mb-3"></i>
          <h3 class="text-lg font-bold text-slate-700">No seafood matched your search</h3>
          <p class="text-xs text-slate-500 mt-1">Try clearing your filters or search keywords.</p>
          <button onclick="app.resetFilters()" class="mt-4 px-4 py-2 bg-[#0B1B2B] text-white rounded-xl text-xs font-bold">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(product => {
      const activeVarIdx = state.selectedVariants[product.id] || 0;
      const v = product.variants[activeVarIdx] || product.variants[0];
      return `
        <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="relative h-56 overflow-hidden bg-slate-100">
              <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute top-3 left-3 flex flex-col gap-1.5">
                <span class="bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                  ${product.badge}
                </span>
                <span class="bg-slate-900/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow backdrop-blur">
                  ${product.tag}
                </span>
              </div>
              <button type="button" onclick="app.openProductModal('${product.id}')" class="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#0B1B2B] text-xs font-bold px-3 py-1.5 rounded-xl shadow backdrop-blur transition opacity-0 group-hover:opacity-100 cursor-pointer active:scale-95">
                Quick View
              </button>
            </div>

            <div class="p-5">
              <div class="flex items-center gap-1.5 text-xs mb-1.5">
                <span class="text-yellow-400 font-bold">★★★★★</span>
                <span class="text-slate-400 text-[11px]">(${product.reviewsCount})</span>
                <span class="text-slate-300">•</span>
                <span class="text-emerald-600 font-bold text-[11px]">${product.origin}</span>
              </div>

              <h3 onclick="app.openProductModal('${product.id}')" class="text-base font-bold font-heading text-[#0B1B2B] group-hover:text-orange-600 transition cursor-pointer mb-1 line-clamp-1">
                ${product.name}
              </h3>
              <p class="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">${product.shortDescription}</p>

              <div class="flex items-baseline justify-between mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div>
                  <span id="price-${product.id}" class="text-lg font-black text-[#0B1B2B] font-heading">${v.price}</span>
                  <span id="compare-${product.id}" class="text-[11px] text-slate-400 line-through ml-1.5">${v.compareAtPrice}</span>
                </div>
                <span id="portion-price-${product.id}" class="text-[11px] font-bold text-orange-600">~${(v.price / v.packCount).toFixed(2)}/portion</span>
              </div>

              <div class="space-y-2 mb-4">
                <div class="flex gap-1.5">
                  ${product.variants.map((variant, idx) => `
                    <button
                      onclick="app.selectProductVariant('${product.id}', ${idx})"
                      id="var-btn-${product.id}-${idx}"
                      class="var-btn flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition border ${idx === activeVarIdx ? 'bg-[#0B1B2B] text-white border-[#0B1B2B] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}"
                    >
                      ${variant.packCount} Fillets
                    </button>
                  `).join('')}
                </div>

                <select id="prep-${product.id}" class="w-full text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-orange-500">
                  ${product.preparationOptions.map(p => `<option value="${p}">${p}</option>`).join('')}
                </select>
              </div>

            </div>
          </div>

          <div class="p-5 pt-0">
            <button type="button" onclick="app.addCatalogProductToCart('${product.id}')" class="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition hover:shadow-md cursor-pointer active:scale-95">
              <i class="fa-solid fa-cart-plus"></i>
              Add to Cart
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

    // 6. RENDER CUSTOM BOX BUILDER (SIZZLEFISH PRIME)
  function renderBoxBuilder() {
    const totalSelected = Object.values(state.customBoxPortions).reduce((sum, q) => sum + (q || 0), 0);
    const target = state.boxTargetSize;
    const remaining = target - totalSelected;
    const isFull = totalSelected >= target;

    // Price calculation
    let rawTotal = 0;
    Object.entries(state.customBoxPortions).forEach(([id, qty]) => {
      const p = PRODUCTS.find(prod => prod.id === id);
      if (p && qty > 0) rawTotal += p.pricePerPortion * qty;
    });
    let base = Math.max(rawTotal * 0.95, 69.99);
    if (state.boxFrequency === 'subscribe') base *= 0.90;
    const finalPrice = Math.round(base * 100) / 100;

    // Update labels
    const portionsLabel = document.getElementById('box-portions-label');
    const statusBadge = document.getElementById('box-status-badge');
    const remainingLabel = document.getElementById('box-remaining-label');
    const progressBar = document.getElementById('box-progress-bar');
    const summaryPrice = document.getElementById('box-summary-price');
    const subBadge = document.getElementById('box-sub-discount-badge');
    const addBoxBtn = document.getElementById('btn-add-custom-box');

    if (portionsLabel) portionsLabel.textContent = `${totalSelected} of ${target} Portions Selected`;
    if (statusBadge) {
      statusBadge.className = isFull 
        ? "bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-black uppercase"
        : "bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full text-xs font-black uppercase";
      statusBadge.textContent = isFull ? "✓ 100% Full & Ready" : `In Progress (${totalSelected}/${target})`;
    }
    if (remainingLabel) remainingLabel.textContent = remaining > 0 ? `${remaining} more portions needed` : "Box full & ready for dry ice dispatch!";
    if (progressBar) progressBar.style.width = `${Math.min(100, (totalSelected / target) * 100)}%`;
    if (summaryPrice) summaryPrice.textContent = `${finalPrice.toFixed(2)}`;
    if (subBadge) subBadge.style.display = state.boxFrequency === 'subscribe' ? 'inline-block' : 'none';

    if (addBoxBtn) {
      if (isFull) {
        addBoxBtn.disabled = false;
        addBoxBtn.className = "px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition bg-orange-600 hover:bg-orange-500 text-white cursor-pointer";
        addBoxBtn.innerHTML = '<i class="fa-solid fa-box-open"></i> Add Box to Cart';
      } else {
        addBoxBtn.disabled = true;
        addBoxBtn.className = "px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition bg-slate-200 text-slate-400 cursor-not-allowed";
        addBoxBtn.innerHTML = `<i class="fa-solid fa-box-open"></i> Select ${remaining} More`;
      }
    }

    // Slots container
    const slotsEl = document.getElementById('box-slots-container') || document.getElementById('box-slots-tray');
    if (slotsEl) {
      // Gather flat list of selected portions
      const filledItems = [];
      Object.entries(state.customBoxPortions).forEach(([id, qty]) => {
        const prod = PRODUCTS.find(p => p.id === id);
        for (let i = 0; i < qty; i++) {
          filledItems.push(prod ? prod.name.split(' ')[0] : 'Catch');
        }
      });

      slotsEl.innerHTML = Array.from({ length: target }).map((_, idx) => {
        const isFilled = idx < totalSelected;
        const itemName = filledItems[idx] || '';
        return `
          <div class="h-9 rounded-xl flex items-center justify-center text-[10px] font-black transition-all ${isFilled ? 'bg-orange-600 text-white shadow-sm' : 'border border-dashed border-slate-300 text-slate-400 bg-slate-50'}">
            ${isFilled ? `🐟 ${itemName}` : (idx + 1)}
          </div>
        `;
      }).join('');
    }

    // Grid of portions
    const grid = document.getElementById('box-builder-items-grid');
    if (grid) {
      grid.innerHTML = PRODUCTS.filter(p => p.boxBuilderEligible).map(p => {
        const currentQty = state.customBoxPortions[p.id] || 0;
        return `
          <div class="p-4 rounded-2xl border transition-all ${currentQty > 0 ? 'border-orange-400 bg-orange-50/20 shadow-sm' : 'border-slate-200 bg-white'}">
            <div class="flex gap-3 items-center">
              <img src="${p.image}" alt="${p.name}" class="w-16 h-16 rounded-xl object-cover border border-slate-100" />
              <div class="flex-1 min-w-0">
                <h4 class="text-xs font-bold text-slate-900 truncate">${p.name}</h4>
                <span class="text-[11px] text-slate-500 block">${p.portionSize} portion</span>
                <span class="text-xs font-black text-orange-700">${p.pricePerPortion}/ea</span>
              </div>
            </div>

            <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-600">Portions:</span>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  onclick="app.adjustBoxPortion('${p.id}', -1)"
                  ${currentQty === 0 ? 'disabled' : ''}
                  class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold flex items-center justify-center transition cursor-pointer active:scale-95"
                >
                  -
                </button>
                <span class="w-6 text-center text-sm font-black text-slate-900">${currentQty}</span>
                <button
                  type="button"
                  onclick="app.adjustBoxPortion('${p.id}', 1)"
                  ${totalSelected >= target ? 'disabled' : ''}
                  class="w-7 h-7 rounded-lg bg-orange-600 hover:bg-orange-500 disabled:opacity-40 text-white font-bold flex items-center justify-center transition shadow-sm cursor-pointer active:scale-95"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // 7. RENDER CURATED BOXES, SOURCING & RECIPES
  function renderStaticSections() {
    // Curated boxes
    const cGrid = document.getElementById('curated-boxes-grid');
    if (cGrid) {
      cGrid.innerHTML = CURATED_BOXES.map(box => `
        <div class="bg-[#0B1B2B] text-white rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-lg group">
          <div>
            <div class="relative h-48 overflow-hidden">
              <img src="${box.image}" alt="${box.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 bg-orange-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow">
                ${box.badge}
              </div>
              <div class="absolute bottom-3 right-3 bg-slate-900/90 text-orange-300 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur">
                ${box.portions} Portions
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-1 text-yellow-400 text-xs mb-1">
                <span>★★★★★</span>
                <span class="text-slate-400">(${box.reviewsCount})</span>
              </div>
              <h3 class="text-base font-bold font-heading mb-2">${box.name}</h3>
              <p class="text-xs text-slate-300 line-clamp-2 mb-4">${box.description}</p>
              <div class="space-y-1 text-xs text-slate-400">
                ${box.items.map(item => `<div class="flex items-center gap-1.5"><i class="fa-solid fa-check text-emerald-400 text-[10px]"></i><span>${item}</span></div>`).join('')}
              </div>
            </div>
          </div>

          <div class="p-6 pt-0 border-t border-slate-800 mt-4">
            <div class="flex items-baseline justify-between mb-4 pt-4">
              <div>
                <span class="text-xs text-slate-400 line-through mr-1">$${box.compareAtPrice}</span>
                <span class="text-xl font-black text-white font-heading">$${box.price}</span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-emerald-400 block font-bold">Sub & Save 10%</span>
                <span class="text-xs font-black text-emerald-300">$${box.subscribePrice}</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button type="button" onclick="app.addCuratedBox('${box.id}', false)" class="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700 transition cursor-pointer active:scale-95">
                One-Time
              </button>
              <button type="button" onclick="app.addCuratedBox('${box.id}', true)" class="py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-xs font-extrabold text-white transition shadow cursor-pointer active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Sourcing cards
    const sGrid = document.getElementById('sourcing-cards-grid');
    if (sGrid) {
      sGrid.innerHTML = SOURCING_DATA.map(origin => `
        <div class="bg-[#0B1B2B] rounded-2xl p-5 border border-slate-800 text-white flex flex-col justify-between">
          <div>
            <img src="${origin.image}" alt="${origin.name}" class="w-full h-32 rounded-xl object-cover mb-3" />
            <span class="text-[10px] uppercase font-bold text-orange-400 block">${origin.species}</span>
            <h4 class="text-sm font-bold text-white mt-0.5">${origin.name}</h4>
            <p class="text-xs text-slate-300 mt-2 line-clamp-3">${origin.description}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-orange-300 font-semibold flex items-center gap-1">
            <i class="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
            <span>${origin.badge}</span>
          </div>
        </div>
      `).join('');
    }

    // Sourcing modal list
    const smList = document.getElementById('sourcing-modal-list');
    if (smList) {
      smList.innerHTML = SOURCING_DATA.map(origin => `
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row gap-5 items-center">
          <img src="${origin.image}" alt="${origin.name}" class="w-full md:w-44 h-32 rounded-xl object-cover" />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <h4 class="text-base font-bold text-slate-900">${origin.name}</h4>
              <span class="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">${origin.species}</span>
            </div>
            <p class="text-xs text-slate-600 mt-1 mb-3">${origin.description}</p>
            <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-500">
              <div><strong>Harvest Method:</strong> ${origin.harvestMethod}</div>
              <div><strong>Water Temp:</strong> ${origin.temp}</div>
              <div><strong>Peak Season:</strong> ${origin.season}</div>
              <div><strong>Certification:</strong> ${origin.badge}</div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Chef recipes
    const rGrid = document.getElementById('recipes-grid');
    if (rGrid) {
      rGrid.innerHTML = RECIPES_DATA.map(recipe => `
        <div class="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition group">
          <div>
            <div class="relative h-44 overflow-hidden">
              <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                ⏱ ${recipe.time} • ${recipe.difficulty}
              </div>
            </div>
            <div class="p-5">
              <span class="text-[11px] font-bold text-orange-600 block uppercase">${recipe.seafoodName}</span>
              <h3 class="text-sm font-bold text-slate-900 mt-1 mb-2 line-clamp-2">${recipe.title}</h3>
              <p class="text-xs text-slate-500 line-clamp-2">${recipe.desc}</p>
            </div>
          </div>
          <div class="p-5 pt-0">
            <button type="button" onclick="app.addCatalogProductToCart('${recipe.seafoodId}')" class="w-full py-2.5 rounded-xl bg-[#0B1B2B] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition cursor-pointer active:scale-95">
              <i class="fa-solid fa-cart-plus text-orange-400"></i>
              Add Catch to Cart
            </button>
          </div>
        </div>
      `).join('');
    }

    // Cart cross sells
    const csContainer = document.getElementById('cart-cross-sells-container');
    if (csContainer) {
      csContainer.innerHTML = `
        <h4 class="text-xs font-black uppercase tracking-wider text-slate-500 mb-3">Frequently Paired Add-ons:</h4>
        <div class="space-y-2">
          ${CROSS_SELLS.map(cs => `
            <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-200">
              <div class="flex items-center gap-2.5">
                <img src="${cs.image}" alt="${cs.name}" class="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <span class="text-xs font-bold text-slate-900 block leading-tight">${cs.name}</span>
                  <span class="text-[10px] text-slate-500">$${cs.price.toFixed(2)} • ${cs.weight}</span>
                </div>
              </div>
              <button type="button" onclick="app.addCrossSell('${cs.id}')" class="px-2.5 py-1 rounded-lg bg-white border border-orange-400 text-orange-600 hover:bg-orange-600 hover:text-white font-bold text-[11px] transition cursor-pointer active:scale-95">
                + Add
              </button>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  // 8. PUBLIC EXPORTED APP CONTROLLER
  window.app = {
    // Cart operations
    openCart: function () {
      const el = document.getElementById('cart-drawer-container');
      if (el) el.classList.remove('hidden');
      updateCartUI();
    },
    closeCart: function () {
      const el = document.getElementById('cart-drawer-container');
      if (el) el.classList.add('hidden');
    },
    addToCart: function (productId, variantIdx = 0, prepOption = null) {
      const p = PRODUCTS.find(prod => prod.id === productId);
      if (!p) return;
      const v = p.variants[variantIdx] || p.variants[0];
      const prep = prepOption || p.preparationOptions[0];
      const cartItemId = `${p.id}-${v.id}-${prep}`;

      const existing = state.cart.find(i => i.cartItemId === cartItemId);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({
          cartItemId,
          id: p.id,
          name: p.name,
          image: p.image,
          price: v.price,
          packCount: v.packCount,
          weight: v.totalWeight,
          preparation: prep,
          quantity: 1,
          isBox: false
        });
      }
      showToast(`Added ${p.name} (${v.packCount}-Pack) to your cart!`);
      updateCartUI();
      window.app.openCart();
    },
    addCatalogProductToCart: function (productId) {
      const prepSelect = document.getElementById(`prep-${productId}`);
      const prep = prepSelect ? prepSelect.value : null;
      const varIdx = state.selectedVariants[productId] || 0;
      window.app.addToCart(productId, varIdx, prep);
    },
    selectProductVariant: function (productId, variantIdx) {
      const p = PRODUCTS.find(prod => prod.id === productId);
      if (!p) return;
      state.selectedVariants[productId] = variantIdx;
      const v = p.variants[variantIdx];
      const prEl = document.getElementById(`price-${productId}`);
      const compEl = document.getElementById(`compare-${productId}`);
      const portionEl = document.getElementById(`portion-price-${productId}`);

      if (prEl) prEl.textContent = `${v.price}`;
      if (compEl) compEl.textContent = `${v.compareAtPrice}`;
      if (portionEl) portionEl.textContent = `~${(v.price / v.packCount).toFixed(2)}/portion`;

      p.variants.forEach((_, idx) => {
        const btn = document.getElementById(`var-btn-${productId}-${idx}`);
        if (btn) {
          if (idx === variantIdx) {
            btn.className = "var-btn flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition border bg-[#0B1B2B] text-white border-[#0B1B2B] shadow-sm cursor-pointer active:scale-95";
          } else {
            btn.className = "var-btn flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition border bg-white text-slate-600 border-slate-200 hover:bg-slate-50 cursor-pointer active:scale-95";
          }
        }
      });
    },
    addCuratedBox: function (boxId, isSub) {
      const b = CURATED_BOXES.find(box => box.id === boxId);
      if (!b) return;
      const price = isSub ? b.subscribePrice : b.price;
      const cartItemId = `${b.id}-${isSub ? 'sub' : 'one-time'}`;

      const existing = state.cart.find(i => i.cartItemId === cartItemId);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({
          cartItemId,
          id: b.id,
          name: b.name,
          image: b.image,
          price: price,
          packCount: b.portions,
          weight: `${b.portions} Portions`,
          preparation: isSub ? 'Recurring Catch (Save 10%)' : 'One-Time Delivery',
          quantity: 1,
          isBox: true
        });
      }
      showToast(`Added ${b.name} to your cart!`);
      updateCartUI();
      window.app.openCart();
    },
    addCrossSell: function (addonId) {
      const cs = CROSS_SELLS.find(item => item.id === addonId);
      if (!cs) return;
      const cartItemId = `cs-${cs.id}`;
      const existing = state.cart.find(i => i.cartItemId === cartItemId);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({
          cartItemId,
          id: cs.id,
          name: cs.name,
          image: cs.image,
          price: cs.price,
          packCount: 1,
          weight: cs.weight,
          preparation: "Gourmet Pairing",
          quantity: 1,
          isBox: false
        });
      }
      showToast(`Added ${cs.name} to your order!`);
      updateCartUI();
    },
    removeCartItem: function (cartItemId) {
      state.cart = state.cart.filter(i => i.cartItemId !== cartItemId);
      updateCartUI();
    },
    adjustCartItemQty: function (cartItemId, delta) {
      const item = state.cart.find(i => i.cartItemId === cartItemId);
      if (!item) return;
      item.quantity += delta;
      if (item.quantity <= 0) {
        window.app.removeCartItem(cartItemId);
      } else {
        updateCartUI();
      }
    },
    applyPromoCode: function (manualCode = null) {
      const input = document.getElementById('promo-input');
      const code = (manualCode || (input ? input.value : '')).trim().toUpperCase();
      if (code === 'AMC10' || code === 'SIZZLE10' || code === 'SF10') {
        state.discountPercent = 10;
        state.appliedPromoName = 'AMC10 (10% OFF)';
        showToast("🎉 Promo AMC10 applied: 10% OFF your AMC FOODS box!");
      } else if (code === 'AMC15' || code === 'SIZZLE15' || code === 'AM15') {
        state.discountPercent = 15;
        state.appliedPromoName = 'AMC15 (15% OFF)';
        showToast("🎉 Promo AMC15 applied: 15% OFF your order!");
      } else if (code === 'FREESHIP') {
        state.discountPercent = 10;
        state.appliedPromoName = 'FREESHIP (FREE SHIPPING)';
        showToast("🎉 Promo FREESHIP applied: Free Shipping Discount!");
      } else {
        alert("Invalid code. Try 'AMC10' for 10% off your first box!");
        return;
      }
      updateCartUI();
    },

    // Box builder operations
    setBoxTargetSize: function (size) {
      state.boxTargetSize = size;
      const b6 = document.getElementById('box-size-btn-6') || document.getElementById('btn-box-6');
      const b12 = document.getElementById('box-size-btn-12') || document.getElementById('btn-box-12');
      if (size === 6) {
        if (b6) b6.className = "px-5 py-2.5 rounded-xl text-xs font-black transition bg-[#0B1B2B] text-white shadow";
        if (b12) b12.className = "px-5 py-2.5 rounded-xl text-xs font-black transition text-slate-600 hover:text-black";
      } else {
        if (b12) b12.className = "px-5 py-2.5 rounded-xl text-xs font-black transition bg-[#0B1B2B] text-white shadow";
        if (b6) b6.className = "px-5 py-2.5 rounded-xl text-xs font-black transition text-slate-600 hover:text-black";
      }
      renderBoxBuilder();
    },
    setBoxFrequency: function (freq) {
      state.boxFrequency = freq;
      const bSub = document.getElementById('box-freq-sub') || document.getElementById('btn-freq-sub');
      const bOne = document.getElementById('box-freq-onetime') || document.getElementById('btn-freq-onetime');
      if (freq === 'subscribe') {
        if (bSub) bSub.className = "px-5 py-2.5 rounded-xl text-xs font-black transition bg-orange-600 text-white shadow flex items-center gap-1.5";
        if (bOne) bOne.className = "px-5 py-2.5 rounded-xl text-xs font-black transition text-slate-600 hover:text-black";
      } else {
        if (bOne) bOne.className = "px-5 py-2.5 rounded-xl text-xs font-black transition bg-[#0B1B2B] text-white shadow";
        if (bSub) bSub.className = "px-5 py-2.5 rounded-xl text-xs font-black transition text-slate-600 hover:text-black flex items-center gap-1.5";
      }
      renderBoxBuilder();
    },
    adjustBoxPortion: function (prodId, delta) {
      const cur = state.customBoxPortions[prodId] || 0;
      const total = Object.values(state.customBoxPortions).reduce((sum, q) => sum + (q || 0), 0);
      if (delta > 0 && total >= state.boxTargetSize) {
        showToast("Box is already full! Remove a portion or switch to 12-pack.");
        return;
      }
      const next = cur + delta;
      if (next < 0) return;
      state.customBoxPortions[prodId] = next;
      renderBoxBuilder();
    },
    addCustomBoxToCart: function () {
      const total = Object.values(state.customBoxPortions).reduce((sum, q) => sum + (q || 0), 0);
      if (total !== state.boxTargetSize) {
        showToast(`⚠️ Please select exactly ${state.boxTargetSize} portions to fill your box.`);
        return;
      }

      let rawTotal = 0;
      const portionsList = [];
      Object.entries(state.customBoxPortions).forEach(([id, qty]) => {
        const p = PRODUCTS.find(prod => prod.id === id);
        if (p && qty > 0) {
          rawTotal += p.pricePerPortion * qty;
          portionsList.push(`${qty}x ${p.name.split(' ')[0]}`);
        }
      });
      let base = Math.max(rawTotal * 0.95, 69.99);
      if (state.boxFrequency === 'subscribe') base *= 0.90;
      const price = Math.round(base * 100) / 100;

      const cartItemId = `custom-box-${state.boxTargetSize}-${state.boxFrequency}-${Date.now()}`;
      state.cart.push({
        cartItemId,
        id: `custom-${state.boxTargetSize}-box`,
        name: `Custom Curated ${state.boxTargetSize}-Pack Seafood Box`,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
        price: price,
        packCount: state.boxTargetSize,
        weight: `${state.boxTargetSize} Curated Portions`,
        preparation: `${state.boxFrequency === 'subscribe' ? 'Bi-Weekly Subscription (10% Off)' : 'One-Time Delivery'} • [${portionsList.join(', ')}]`,
        quantity: 1,
        isBox: true
      });

      showToast(`Added Custom ${state.boxTargetSize}-Pack Seafood Box to your cart!`);
      updateCartUI();
      window.app.openCart();
    },

    // Catalog filtering
    handleSearch: function (q) {
      state.searchQuery = q;
      renderCatalog();
    },
    setCategory: function (cat, btn) {
      state.activeCategory = cat;
      const pills = document.querySelectorAll('.cat-pill');
      pills.forEach(b => {
        b.className = "cat-pill px-4 py-2 rounded-xl text-xs font-bold transition bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 cursor-pointer";
      });
      if (btn) {
        btn.className = "cat-pill active-cat px-4 py-2 rounded-xl text-xs font-bold transition bg-[#0B1B2B] text-white shadow cursor-pointer";
      } else {
        pills.forEach(b => {
          if (b.textContent.trim().toLowerCase().includes(cat.toLowerCase()) || (cat === 'Fresh Catch' && b.textContent.includes('Salmon'))) {
            b.className = "cat-pill active-cat px-4 py-2 rounded-xl text-xs font-bold transition bg-[#0B1B2B] text-white shadow cursor-pointer";
          }
        });
      }
      renderCatalog();
    },
    setTag: function (tag, btn) {
      state.activeTag = tag;
      const pills = document.querySelectorAll('.tag-pill');
      pills.forEach(b => {
        b.className = "tag-pill px-3 py-1 rounded-lg font-bold border transition bg-white text-slate-600 border-slate-200 hover:bg-slate-50 cursor-pointer";
      });
      if (btn) {
        btn.className = "tag-pill active-tag px-3 py-1 rounded-lg font-bold border transition bg-orange-100 text-orange-700 border-orange-300 cursor-pointer";
      } else {
        pills.forEach(b => {
          if (b.textContent.trim().toLowerCase() === tag.toLowerCase()) {
            b.className = "tag-pill active-tag px-3 py-1 rounded-lg font-bold border transition bg-orange-100 text-orange-700 border-orange-300 cursor-pointer";
          }
        });
      }
      renderCatalog();
    },
    handleSort: function (val) {
      state.sortBy = val;
      renderCatalog();
    },
    handleNewsletter: function (e) {
      if (e && e.preventDefault) e.preventDefault();
      const input = document.getElementById('newsletter-email');
      const email = input ? input.value : '';
      if (!email) return;
      showToast("🎉 Thank you for subscribing to AMC FOODS Catch of the Week! Use code AMC10 for 10% off.");
      if (input) input.value = '';
    },
    resetFilters: function () {
      state.searchQuery = '';
      const input = document.getElementById('search-input');
      if (input) input.value = '';
      window.app.setCategory('All Catch');
      window.app.setTag('All');
    },

    // Zip modal
    openZipModal: function () {
      const el = document.getElementById('zip-modal');
      if (el) el.classList.remove('hidden');
    },
    closeZipModal: function () {
      const el = document.getElementById('zip-modal');
      if (el) el.classList.add('hidden');
    },
    submitZipCode: function (eOrZip) {
      let zip = eOrZip;
      if (eOrZip && eOrZip.preventDefault) {
        eOrZip.preventDefault();
        const input = document.getElementById('zip-modal-input');
        zip = input ? input.value : '90210';
      }
      if (!zip || zip.toString().trim().length < 4) {
        alert("Please enter a valid 5-digit US Zip or Postal code.");
        return;
      }
      const clean = zip.toString().trim();
      const isNextDay = parseInt(clean.slice(-1), 10) % 2 === 0;

      const target = new Date();
      target.setDate(target.getDate() + (isNextDay ? 1 : 2));
      if (target.getDay() === 0) target.setDate(target.getDate() + 1);

      const dateStr = target.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
      state.zipCode = clean;
      state.deliveryDate = dateStr;
      state.carrier = isNextDay ? "UPS Next-Day Chilled Express" : "FedEx Priority Chilled Air";

      const topZip = document.getElementById('topbar-zip');
      const topDate = document.getElementById('topbar-date');
      const heroDate = document.getElementById('hero-delivery-date');
      const chkDate = document.getElementById('checkout-delivery-date');

      if (topZip) topZip.textContent = clean;
      if (topDate) topDate.textContent = isNextDay ? "Tomorrow" : dateStr;
      if (heroDate) heroDate.textContent = isNextDay ? "Tomorrow" : dateStr;
      if (chkDate) chkDate.textContent = dateStr;

      window.app.closeZipModal();
      showToast(`✅ Zip code verified! Next chilled delivery scheduled for ${dateStr}.`);
    },

    // Product detail modal (PDP)
        openProductModal: function (productId) {
      const p = PRODUCTS.find(prod => prod.id === productId);
      if (!p) return;
      const modal = document.getElementById('product-modal');
      const content = document.getElementById('product-modal-content');
      if (!modal || !content) return;

      const activeVarIdx = state.selectedVariants[p.id] || 0;
      const v = p.variants[activeVarIdx] || p.variants[0];

      content.innerHTML = `
        <button type="button" onclick="app.closeProductModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center z-10 cursor-pointer">✕</button>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="rounded-2xl overflow-hidden h-72 sm:h-80 bg-slate-100 border border-slate-200">
              <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" />
            </div>
            <div class="mt-4 flex flex-wrap gap-1.5">
              ${p.certifications.map(c => `<span class="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">✓ ${c}</span>`).join('')}
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-orange-600 block">${p.origin} • ${p.harvestMethod}</span>
              <h2 class="text-2xl font-black font-heading text-[#0B1B2B] mt-1 mb-2">${p.name}</h2>
              <div class="flex items-center gap-2 text-xs mb-3">
                <span class="text-yellow-400 font-bold">★★★★★</span>
                <span class="text-slate-500 font-semibold">${p.rating} (${p.reviewsCount} verified reviews)</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed mb-4">${p.shortDescription}</p>

              <!-- Nutrition Facts -->
              <div class="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4">
                <div><strong>Calories:</strong> ${p.nutrition.calories} kcal</div>
                <div><strong>Protein:</strong> ${p.nutrition.protein}</div>
                <div><strong>Omega-3s:</strong> ${p.nutrition.omega3}</div>
                <div><strong>Total Fat:</strong> ${p.nutrition.fat}</div>
              </div>

              <!-- Chef Technique -->
              <div class="text-xs text-slate-600 bg-sky-50 p-3 rounded-xl border border-sky-100 mb-4">
                <p class="font-semibold text-[#0B1B2B] mb-1">👨‍🍳 Preparation Technique:</p>
                <p>${p.cookingTips}</p>
              </div>

              <!-- Pack Size Selector in Modal -->
              <div class="mb-4">
                <label class="text-xs font-bold text-slate-700 uppercase mb-1.5 block">Select Pack Size:</label>
                <div class="flex gap-2">
                  ${p.variants.map((variant, idx) => `
                    <button
                      type="button"
                      onclick="app.selectModalVariant('${p.id}', ${idx})"
                      id="modal-var-btn-${idx}"
                      class="flex-1 py-2 px-2 rounded-xl text-xs font-bold transition border cursor-pointer ${idx === activeVarIdx ? 'bg-[#0B1B2B] text-white border-[#0B1B2B] shadow' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}"
                    >
                      ${variant.packCount} Fillets<br/><span class="text-[11px] font-black">${variant.price}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Preparation Dropdown -->
              <div class="space-y-1 mb-6">
                <label class="text-xs font-bold text-slate-700 uppercase">Cut Preparation:</label>
                <select id="modal-prep-select" class="w-full text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer">
                  ${p.preparationOptions.map(prep => `<option value="${prep}">${prep}</option>`).join('')}
                </select>
              </div>
            </div>

            <button 
              id="modal-add-to-cart-btn"
              type="button"
              onclick="app.addToCart('${p.id}', state.selectedVariants['${p.id}'] || 0, document.getElementById('modal-prep-select').value); app.closeProductModal();" 
              class="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-600/25 cursor-pointer active:scale-95 transition"
            >
              Add ${v.packCount}-Pack to Cart (${v.price})
            </button>
          </div>
        </div>
      `;
      modal.classList.remove('hidden');
    },
    selectModalVariant: function (productId, variantIdx) {
      const p = PRODUCTS.find(prod => prod.id === productId);
      if (!p) return;
      state.selectedVariants[productId] = variantIdx;
      const v = p.variants[variantIdx];

      p.variants.forEach((_, idx) => {
        const btn = document.getElementById(`modal-var-btn-${idx}`);
        if (btn) {
          if (idx === variantIdx) {
            btn.className = "flex-1 py-2 px-2 rounded-xl text-xs font-bold transition border cursor-pointer bg-[#0B1B2B] text-white border-[#0B1B2B] shadow";
          } else {
            btn.className = "flex-1 py-2 px-2 rounded-xl text-xs font-bold transition border cursor-pointer bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100";
          }
        }
      });

      const addBtn = document.getElementById('modal-add-to-cart-btn');
      if (addBtn) {
        addBtn.textContent = `Add ${v.packCount}-Pack to Cart (${v.price})`;
      }

      // Also sync catalog card if visible
      app.selectProductVariant(productId, variantIdx);
    },
    closeProductModal: function () {
      const modal = document.getElementById('product-modal');
      if (modal) modal.classList.add('hidden');
    },

    // Sourcing modal
    openSourcingModal: function () {
      const el = document.getElementById('sourcing-modal');
      if (el) el.classList.remove('hidden');
    },
    closeSourcingModal: function () {
      const el = document.getElementById('sourcing-modal');
      if (el) el.classList.add('hidden');
    },

    // Checkout modal
    openCheckoutModal: function () {
      window.app.closeCart();
      const modal = document.getElementById('checkout-modal');
      if (modal) modal.classList.remove('hidden');
      window.app.goToCheckoutStep(1);

      const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const discount = (subtotal * state.discountPercent) / 100;
      const shipping = subtotal === 0 ? 0 : (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 18.50);
      const total = Math.max(0, subtotal - discount + shipping);

      const totEl = document.getElementById('chk-final-total');
      if (totEl) totEl.textContent = `$${total.toFixed(2)}`;
    },
    closeCheckoutModal: function () {
      const modal = document.getElementById('checkout-modal');
      if (modal) modal.classList.add('hidden');
    },
    goToCheckoutStep: function (step) {
      const s1 = document.getElementById('checkout-form-step1');
      const s2 = document.getElementById('checkout-form-step2');
      const t1 = document.getElementById('chk-step1-tab');
      const t2 = document.getElementById('chk-step2-tab');

      if (step === 1) {
        if (s1) s1.classList.remove('hidden');
        if (s2) s2.classList.add('hidden');
        if (t1) t1.className = "text-orange-600 underline";
        if (t2) t2.className = "text-slate-400";
      } else {
        if (s1) s1.classList.add('hidden');
        if (s2) s2.classList.remove('hidden');
        if (t1) t1.className = "text-slate-400";
        if (t2) t2.className = "text-orange-600 underline";
      }
    },
    placeFinalOrder: function () {
      const orderId = "AMC-" + Math.floor(100000 + Math.random() * 900000);
      const tracking = "1Z" + Math.floor(100000000000 + Math.random() * 900000000000);

      const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const discount = (subtotal * state.discountPercent) / 100;
      const shipping = subtotal === 0 ? 0 : (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 18.50);
      const total = Math.max(0, subtotal - discount + shipping);

      // Populate Receipt Modal
      const rId = document.getElementById('receipt-order-id');
      const rTrack = document.getElementById('receipt-tracking-num');
      const rDate = document.getElementById('receipt-arrival-date');
      const rSub = document.getElementById('receipt-subtotal');
      const rShip = document.getElementById('receipt-shipping');
      const rTot = document.getElementById('receipt-total');
      const rList = document.getElementById('receipt-items-list');

      if (rId) rId.textContent = `Receipt #${orderId}`;
      if (rTrack) rTrack.textContent = tracking;
      if (rDate) rDate.textContent = state.deliveryDate;
      if (rSub) rSub.textContent = `$${subtotal.toFixed(2)}`;
      if (rShip) rShip.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
      if (rTot) rTot.textContent = `$${total.toFixed(2)}`;

      if (rList) {
        rList.innerHTML = state.cart.map(item => `
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="font-medium text-slate-800">${item.quantity}x ${item.name}</span>
            <span class="font-bold text-slate-900">$${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('');
      }

      window.app.closeCheckoutModal();
      const rModal = document.getElementById('receipt-modal');
      if (rModal) rModal.classList.remove('hidden');

      // Clear cart
      state.cart = [];
      updateCartUI();
      showToast(`🎉 Order #${orderId} confirmed! Check your email receipt.`);
    },
    closeReceiptModal: function () {
      const rModal = document.getElementById('receipt-modal');
      if (rModal) rModal.classList.add('hidden');
    }
  };

  // 9. BOOTSTRAP APPLICATION
  document.addEventListener('DOMContentLoaded', function () {
    renderCatalog();
    renderBoxBuilder();
    renderStaticSections();
    updateCartUI();
  });

  // If DOM is already ready
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    renderCatalog();
    renderBoxBuilder();
    renderStaticSections();
    updateCartUI();
  }

})();
