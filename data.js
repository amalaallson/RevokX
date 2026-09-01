/* ============================================
   REVOKX — STATIC NUTRITION DATA (zero-cost, no API)
   All values are approximate per standard hostel serving.
   ============================================ */

// Common Indian hostel mess items: id, label, emoji, protein(g), carbs(g), fat(g), calories, tag
const FOOD_DB = [
  { id: 'rice',        label: 'Rice (1 bowl)',           icon: '🍚', protein: 4,  carbs: 45, fat: 0.5, cal: 200, tag: 'carb' },
  { id: 'roti',         label: 'Roti (2 pcs)',            icon: '🫓', protein: 6,  carbs: 30, fat: 2,   cal: 160, tag: 'carb' },
  { id: 'dal',         label: 'Dal (1 bowl)',            icon: '🥣', protein: 9,  carbs: 20, fat: 3,   cal: 150, tag: 'protein' },
  { id: 'sabzi',       label: 'Mixed Sabzi',             icon: '🥦', protein: 3,  carbs: 12, fat: 4,   cal: 100, tag: 'veg' },
  { id: 'curd',        label: 'Curd (1 bowl)',           icon: '🥛', protein: 6,  carbs: 8,  fat: 4,   cal: 90,  tag: 'protein' },
  { id: 'salad',       label: 'Salad / Raw Veg',         icon: '🥗', protein: 1,  carbs: 5,  fat: 0,   cal: 25,  tag: 'veg' },
  { id: 'eggcurry',    label: 'Egg Curry (2 eggs)',      icon: '🍳', protein: 13, carbs: 5,  fat: 10,  cal: 180, tag: 'protein' },
  { id: 'chickencurry',label: 'Chicken Curry (150g)',    icon: '🍗', protein: 25, carbs: 5,  fat: 12,  cal: 230, tag: 'protein' },
  { id: 'paneer',      label: 'Paneer Sabzi (100g)',     icon: '🧀', protein: 14, carbs: 6,  fat: 15,  cal: 210, tag: 'protein' },
  { id: 'fish',        label: 'Fish Curry (150g)',       icon: '🐟', protein: 22, carbs: 4,  fat: 8,   cal: 180, tag: 'protein' },
  { id: 'fruit',       label: 'Fruit (1 serving)',       icon: '🍌', protein: 1,  carbs: 25, fat: 0,   cal: 100, tag: 'veg' },
  { id: 'sambar',      label: 'Sambar (1 bowl)',         icon: '🍲', protein: 5,  carbs: 15, fat: 2,   cal: 100, tag: 'protein' },
  { id: 'chapati_veg', label: 'Chapati + Veg Curry',     icon: '🍛', protein: 7,  carbs: 35, fat: 6,   cal: 230, tag: 'carb' },
  { id: 'pulao',       label: 'Veg Pulao (1 plate)',     icon: '🍚', protein: 6,  carbs: 55, fat: 6,   cal: 300, tag: 'carb' },
  { id: 'idli',        label: 'Idli (3 pcs)',            icon: '⚪', protein: 6,  carbs: 40, fat: 1,   cal: 190, tag: 'carb' },
  { id: 'dosa',        label: 'Dosa (2 pcs)',            icon: '🫓', protein: 6,  carbs: 45, fat: 6,   cal: 250, tag: 'carb' },
  { id: 'milk',        label: 'Milk (1 glass)',          icon: '🥛', protein: 8,  carbs: 12, fat: 8,   cal: 150, tag: 'protein' },
];

// Affordable Indian add-ons: id, label, icon, cost(INR, approx per serving), protein(g), calories
const ADDON_DB = [
  { id: 'egg',        label: 'Boiled Egg',            icon: '🥚', cost: 7,  protein: 6,  cal: 78 },
  { id: 'milk',       label: 'Milk (1 glass, 200ml)', icon: '🥛', cost: 12, protein: 7,  cal: 120 },
  { id: 'banana',     label: 'Banana',                icon: '🍌', cost: 5,  protein: 1,  cal: 105 },
  { id: 'peanuts',    label: 'Roasted Peanuts (30g)', icon: '🥜', cost: 6,  protein: 7,  cal: 170 },
  { id: 'chana',      label: 'Boiled Chana (50g dry)',icon: '🫘', cost: 5,  protein: 10, cal: 170 },
  { id: 'soya',       label: 'Soya Chunks (30g dry)', icon: '🍢', cost: 6,  protein: 15, cal: 100 },
  { id: 'curd',       label: 'Curd Cup (100g)',       icon: '🥣', cost: 10, protein: 3,  cal: 60  },
  { id: 'paneer',     label: 'Paneer (50g)',          icon: '🧀', cost: 25, protein: 9,  cal: 130 },
  { id: 'oats',       label: 'Oats (40g)',            icon: '🥣', cost: 8,  protein: 5,  cal: 150 },
  { id: 'sprouts',    label: 'Sprouts (50g)',         icon: '🌱', cost: 5,  protein: 4,  cal: 45  },
  { id: 'whey',       label: 'Whey Protein (1 scoop)',icon: '🥤', cost: 35, protein: 24, cal: 120 },
  { id: 'pb',         label: 'Peanut Butter (1 tbsp)',icon: '🫙', cost: 12, protein: 4,  cal: 95  },
];

// Goal-based plan templates — pure static text, no computation needed beyond variable insertion
const PLAN_DB = {
  fatloss: {
    title: 'Hostel Fat-Loss Plan',
    emoji: '🔥',
    summary: 'Same hostel meals, smarter portions. Cut refined carbs slightly, keep protein high, add volume with veg.',
    rules: [
      'Rice/Roti: take 1 serving instead of 2 at dinner.',
      'Dal / Curd / Egg curry: always take a full portion — don\'t skip protein items.',
      'Salad or extra sabzi: add a second helping, it\'s free volume with low calories.',
      'Skip the dessert/sweet counter on weekdays, allow it once on weekends.',
      'Add-ons: 2 boiled eggs or a chana bowl between lunch and dinner if hungry, instead of snacks/chips.',
      'Drink water before meals — hostel plates are often carb-heavy, this helps control portions naturally.',
    ]
  },
  musclegain: {
    title: 'Hostel Muscle-Gain Plan',
    emoji: '💪',
    summary: 'Same meals, bigger portions + smart add-ons. Priority is hitting protein and total calories consistently.',
    rules: [
      'Rice/Roti: take 1.5x portion at lunch and dinner for extra calories.',
      'Never skip dal, curd, egg or chicken curry — take full portion every time it\'s served.',
      'Add-ons: milk + banana after breakfast, peanuts or soya chunks as an evening snack.',
      'Before bed: a glass of milk (with peanut butter if available) to add slow calories overnight.',
      'If gym access is available, train 4-5x/week with progressive overload — food alone won\'t build muscle.',
      'Track weight weekly — if it\'s not going up over 2 weeks, add one more add-on item daily.',
    ]
  },
  recomp: {
    title: 'Hostel Body-Recomposition Plan',
    emoji: '⚖️',
    summary: 'Balance calories, prioritize protein at every meal, use training to reshape rather than just scale changes.',
    rules: [
      'Take normal portions of rice/roti — don\'t increase or decrease, keep carbs steady.',
      'Max out protein items every meal: dal + curd + egg/chicken/paneer whenever available.',
      'Add-ons: 1 egg or a small curd cup between meals, not more — recomp needs a smaller surplus/deficit.',
      'Prioritize strength training 3-4x/week over just cardio — muscle retention matters more here.',
      'Track waist measurement + weight together weekly, not just weight — recomp often means weight stays flat while shape changes.',
      'Be patient — recomposition is slower than pure fat-loss or pure gain, expect visible change over 6-8 weeks.',
    ]
  }
};
