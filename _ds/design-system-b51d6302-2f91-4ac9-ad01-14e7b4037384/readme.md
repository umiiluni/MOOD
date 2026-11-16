# Mood — Design System
Mood · Café · Croissant · Baguette. Cafetería de Cruz del Eje, Córdoba (Eva Perón 234, Instagram @moodcafecde). Slogan: "Una nueva forma de disfrutar lo simple". Este sistema cubre el **menú digital móvil**.

**Fuentes:** `uploads/Mood_Identidad_de_Marca_v2.pdf` (manual; no leído en detalle, se usó el brief), `Carta_Mood_con_precios_v2.md`, logos SVG/PNG, fotos de producto, `LEEME.txt`. Sin Figma ni repo.

## Content fundamentals
Español rioplatense con voseo ("Elegí", "Tocá el producto"). Cálido, simple, directo; sin emoji. Títulos en MAYÚSCULAS (Antonio); productos en caja de oración. Viñeta redonda • como separador ("S $3.000 • M $4.000"). Precios en pesos con punto de miles ("$6.000"), siempre visibles. Ej.: "Una nueva forma de disfrutar lo simple".

## Visual foundations
- **Color:** Crema Latte de fondo, Espresso para texto; una banda de color por categoría (Cafetería Café con Leche, Bebidas frías Miel, Panadería Terracota, Dulces Chocolate, Combos Oliva). Texto sobre Miel: Espresso; sobre Café con Leche: tinta oscura; resto: crema.
- **Tipo:** Antonio MAYÚSCULAS (títulos, precios), Encode Sans Semi Condensed (texto).
- **Elemento gráfico:** bandas horizontales apiladas, gap 6px, esquina redondeada (28px) sólo del lado derecho; al abrir, redondeo superior y panel tintado al 14%.
- **Fondos:** planos, sin gradientes ni texturas. **Fotos:** cenitales/45° sobre papel kraft y madera, cálidas, 4:5, miniaturas con radio 14px.
- **Bordes/sombras:** filetes 1px espresso al 22%; sombra sólo en la ficha inferior. **Radios:** 14 / 28 / pill.
- **Movimiento:** sutil, 220ms ease-out; la ficha sube desde abajo. Hover: color de enlace pasa a Terracota; press: sin escala.
- **Transparencia:** scrim oscuro 55% tras la ficha; sin blur.
- **Layout:** columna móvil de 430px máx., padding 20px.

## Iconography
Sin sistema de íconos; la marca usa tipografía y la viñeta •. Cerrar = "×" tipográfico. Isologo (MOOD con granos de café) para tamaños chicos (<140px). Emoji: no.

## Assets
`assets/logo/` (logo e isologo en marrón, crema, oscuro, blanco; LEEME: usar crema sobre Chocolate/Terracota/Oliva, oscuro sobre Miel). `assets/photos/` (14 fotos de producto).

## Components
- **Band** — banda de categoría, expandible.
- **SubHeading** — subcategoría con aclaración de tamaños.
- **ProductRow** — nombre, descripción, precio, miniatura.
- **ProductSheet** — ficha con foto grande, descripción y precio.

## Index
`styles.css` → `tokens/` · `components/menu/` · `guidelines/` (tarjetas) · `ui_kits/menu/` (index.html, App.jsx, data.js con toda la carta; sin "Churros rellenos"; Brunch saludable "Precio a confirmar") · `thumbnail.html` · `SKILL.md`.
