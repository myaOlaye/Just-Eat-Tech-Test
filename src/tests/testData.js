const mockRestaurants = [
  {
    id: 1,
    name: "The Gourmet Spot",
    cuisines: [
      { name: "Italian", uniqueName: "italian" },
      { name: "Mediterranean", uniqueName: "mediterranean" },
    ],
    rating: { starRating: 4.5 },
    address: { city: "London", firstLine: "123 High Street" },
    logoUrl: "https://example.com/logos/gourmet-spot.png",
  },
  {
    id: 2,
    name: "Sushi Haven",
    cuisines: [
      { name: "Japanese", uniqueName: "japanese" },
      { name: "Sushi", uniqueName: "sushi" },
    ],
    rating: { starRating: 4.8 },
    address: { city: "Manchester", firstLine: "45 Ocean Avenue" },
    logoUrl: "https://example.com/logos/sushi-haven.png",
  },
  {
    id: 3,
    name: "BBQ Brothers",
    cuisines: [
      { name: "American", uniqueName: "american" },
      { name: "BBQ", uniqueName: "bbq" },
    ],
    rating: { starRating: 4.3 },
    address: { city: "Birmingham", firstLine: "78 Smoke Lane" },
    logoUrl: "https://example.com/logos/bbq-brothers.png",
  },
  {
    id: 4,
    name: "Curry Delight",
    cuisines: [
      { name: "Indian", uniqueName: "indian" },
      { name: "Vegetarian", uniqueName: "vegetarian" },
    ],
    rating: { starRating: 4.6 },
    address: { city: "Leeds", firstLine: "32 Spice Road" },
    logoUrl: "https://example.com/logos/curry-delight.png",
  },
  {
    id: 5,
    name: "Vegan Bites",
    cuisines: [
      { name: "Vegan", uniqueName: "vegan" },
      { name: "Healthy", uniqueName: "healthy" },
    ],
    rating: { starRating: 4.7 },
    address: { city: "Bristol", firstLine: "9 Green Street" },
    logoUrl: "https://example.com/logos/vegan-bites.png",
  },
  {
    id: 6,
    name: "Taco Fiesta",
    cuisines: [
      { name: "Mexican", uniqueName: "mexican" },
      { name: "Street Food", uniqueName: "street-food" },
    ],
    rating: { starRating: 4.4 },
    address: { city: "Liverpool", firstLine: "56 Fiesta Plaza" },
    logoUrl: "https://example.com/logos/taco-fiesta.png",
  },
  {
    id: 7,
    name: "Dragon Wok",
    cuisines: [
      { name: "Chinese", uniqueName: "chinese" },
      { name: "Asian Fusion", uniqueName: "asian-fusion" },
    ],
    rating: { starRating: 4.2 },
    address: { city: "Nottingham", firstLine: "88 Dragon Alley" },
    logoUrl: "https://example.com/logos/dragon-wok.png",
  },
  {
    id: 8,
    name: "Burger Hub",
    cuisines: [
      { name: "Fast Food", uniqueName: "fast-food" },
      { name: "American", uniqueName: "american" },
    ],
    rating: { starRating: 4.0 },
    address: { city: "Sheffield", firstLine: "24 Burger Lane" },
    logoUrl: "https://example.com/logos/burger-hub.png",
  },
  {
    id: 9,
    name: "Pasta House",
    cuisines: [
      { name: "Italian", uniqueName: "italian" },
      { name: "Pasta", uniqueName: "pasta" },
    ],
    rating: { starRating: 4.1 },
    address: { city: "Cardiff", firstLine: "12 Pasta Place" },
    logoUrl: "https://example.com/logos/pasta-house.png",
  },
  {
    id: 10,
    name: "Steakhouse Grill",
    cuisines: [
      { name: "Steak", uniqueName: "steak" },
      { name: "Grill", uniqueName: "grill" },
    ],
    rating: { starRating: 4.9 },
    address: { city: "Edinburgh", firstLine: "10 Grill Street" },
    logoUrl: "https://example.com/logos/steakhouse-grill.png",
  },
  {
    id: 11,
    name: "Pizza Paradise",
    cuisines: [
      { name: "Italian", uniqueName: "italian" },
      { name: "Pizza", uniqueName: "pizza" },
    ],
    rating: { starRating: 4.7 },
    address: { city: "Bristol", firstLine: "22 Pizza Lane" },
    logoUrl: "https://example.com/logos/pizza-paradise.png",
  },
  {
    id: 12,
    name: "Taco Tower",
    cuisines: [
      { name: "Mexican", uniqueName: "mexican" },
      { name: "Taco", uniqueName: "taco" },
    ],
    rating: { starRating: 4.3 },
    address: { city: "Manchester", firstLine: "5 Taco Crescent" },
    logoUrl: "https://example.com/logos/taco-tower.png",
  },
  {
    id: 13,
    name: "Sushi Shogun",
    cuisines: [
      { name: "Japanese", uniqueName: "japanese" },
      { name: "Sushi", uniqueName: "sushi" },
    ],
    rating: { starRating: 4.8 },
    address: { city: "London", firstLine: "15 Shogun Way" },
    logoUrl: "https://example.com/logos/sushi-shogun.png",
  },
  {
    id: 14,
    name: "Burger Boss",
    cuisines: [
      { name: "American", uniqueName: "american" },
      { name: "Burger", uniqueName: "burger" },
    ],
    rating: { starRating: 4.6 },
    address: { city: "Birmingham", firstLine: "8 Burger Street" },
    logoUrl: "https://example.com/logos/burger-boss.png",
  },
  {
    id: 15,
    name: "Vegan Village",
    cuisines: [
      { name: "Vegan", uniqueName: "vegan" },
      { name: "Vegetarian", uniqueName: "vegetarian" },
    ],
    rating: { starRating: 4.5 },
    address: { city: "Glasgow", firstLine: "19 Greenfield Road" },
    logoUrl: "https://example.com/logos/vegan-village.png",
  },
];

export default mockRestaurants;
