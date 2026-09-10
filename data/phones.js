// Demo catalog data. Swap this array for a real feed (CMS, sheet, DB, API)
// without touching any component — everything below reads from this shape:
// { brand, name, specs, price, old, tag }
export const BRANDS = [
  { name: "Apple", count: "2 модели" },
  { name: "Xiaomi", count: "2 модели" },
  { name: "Honor", count: "2 модели" },
  { name: "Nokia", count: "2 модели" },
  { name: "itel", count: "2 модели" },
  { name: "Blackview", count: "2 модели" },
  { name: "Prestigio", count: "2 модели" },
  { name: "Новый бренд", count: "Скоро", soon: true },
];

export const PHONES = [
  { brand: "Apple", name: "iPhone 15", specs: "6.1″ OLED · A16 Bionic · 128 ГБ", price: "11 990 000", old: null, tag: "Хит" },
  { brand: "Apple", name: "iPhone 15 Pro", specs: "6.1″ ProMotion · A17 Pro · 256 ГБ", price: "17 490 000", old: null, tag: null },
  { brand: "Xiaomi", name: "Redmi Note 13", specs: "6.67″ AMOLED · 108 МП · 8/256 ГБ", price: "3 190 000", old: "3 590 000", tag: "Скидка" },
  { brand: "Xiaomi", name: "Xiaomi 14", specs: "6.36″ AMOLED · Snapdragon 8 Gen3 · 12/512 ГБ", price: "9 990 000", old: null, tag: "Новинка" },
  { brand: "Honor", name: "Honor X9b", specs: "6.78″ AMOLED · 108 МП · 8/256 ГБ", price: "4 290 000", old: null, tag: null },
  { brand: "Honor", name: "Honor Magic6 Lite", specs: "6.78″ AMOLED · Snapdragon 6 Gen1 · 8/256 ГБ", price: "5 190 000", old: "5 690 000", tag: "Скидка" },
  { brand: "Nokia", name: "Nokia G42 5G", specs: "6.56″ HD+ · 50 МП · 6/128 ГБ", price: "2 590 000", old: null, tag: null },
  { brand: "Nokia", name: "Nokia C32", specs: "6.5″ HD+ · 50 МП · 4/64 ГБ", price: "1 390 000", old: null, tag: "Доступно" },
  { brand: "itel", name: "itel A70", specs: "6.6″ HD+ · 13 МП · 4/64 ГБ", price: "890 000", old: null, tag: "Бюджет" },
  { brand: "itel", name: "itel S23", specs: "6.6″ FHD+ · 50 МП · 8/128 ГБ", price: "1 590 000", old: "1 790 000", tag: "Скидка" },
  { brand: "Blackview", name: "Blackview A55 Pro", specs: "6.528″ HD+ · 13 МП · 6/128 ГБ", price: "1 190 000", old: null, tag: null },
  { brand: "Blackview", name: "Blackview BV6200", specs: "Защищённый · IP68 · 6/128 ГБ", price: "2 990 000", old: null, tag: "Rugged" },
  { brand: "Prestigio", name: "Prestigio Wize Q3", specs: "6.0″ IPS · 8 МП · 2/32 ГБ", price: "690 000", old: null, tag: "Бюджет" },
  { brand: "Prestigio", name: "Prestigio Muze A4", specs: "6.5″ HD+ · 13 МП · 4/64 ГБ", price: "990 000", old: "1 090 000", tag: "Скидка" },
];
