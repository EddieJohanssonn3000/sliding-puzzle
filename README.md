# Sliding Puzzle

Ett interaktivt 15-pusselpel byggt med React och TypeScript.

## Om spelet

Sliding Puzzle är en klassisk pusselspel där du måste ordna numrerade brickor från 1-14 i rätt ordning med ett tomt rum. Klicka på brickor intill det tomma rummet för att flytta dem.

**Spelbräde:** 3 rader × 5 kolumner (15 brickor totalt)

### Hur man spelar
1. Klicka på en bricka intill det tomma rummet för att flytta den
2. Ordna alla brickor i rätt ordning (1-14 + tomt rum)
3. När pusslet är löst visas "You made it!" 
4. Klicka "Shuffle" för att blanda om och spela igen

### Keyboard Navigation
- **Tab** - Fokusera på brickor
- **Enter/Space** - Aktivera fokuserad bricka
- **Shuffle-knapp** - Fokuseras också med Tab

## Teknologi

- **Framework:** React 18
- **Språk:** TypeScript
- **Styling:** CSS-moduler + CSS-variabler
- **Font:** Google Fonts (Open Sans)
- **Build tool:** Vite

## Projektstruktur

```
src/
├── App.tsx              # Huvudkomponent med state-hantering
├── App.css              # Huvudstyling med variabler
├── index.css            # Global styling
├── components/
│   ├── Board.tsx        # Rendererar grid med tiles
│   ├── Board.module.css # Board-styling
│   ├── Tile.tsx         # Enskild bricka (med accessibility)
│   └── Tile.module.css  # Tile-styling
└── utils/
    └── board.ts         # All pusselnlogik
```

## Funktioner

**Spelets logik**
- `createBoard()` - Skapar initialt bräde (1-14 + null)
- `shuffleBoard()` - Blandar brädet med 200 random drag
- `moveTiles()` - Hanterar när användare klickar på bricka
- `isBoardSolved()` - Checkar om pusslet är löst

**Responsive Design**
- Desktop (1024px+)
- Tablet (600-768px)
- Mobile (< 480px)

**Accessibility**
- Keyboard navigation (Tab, Enter, Space)

## Installation & Körning

```bash
# 1. Clona repot
git clone https://github.com/EddieJohanssonn3000/sliding-puzzle.git

# 2. Navigera in i mappen
cd sliding-puzzle

# 3. Installera dependencies
npm install

# 4. Starta dev-servern
npm run dev
```

Öppna `http://localhost:5173` i din webbläsare.

## Implementeringstid

**Totalt:** ~15 timmar

### Tidsfördelning
Utspritt på fem dagar tog det ungefär 15 timmar. 

## Utmaningar & Lösningar

### 1. Shuffle-algoritmen
**Utmaning:** Säkerställa att det shufflade pusslet är lösbart
**Lösning:** Använd 200 random giltiga drag istället för randomiserade positioner

### 2. Responsiv grid-layout
**Utmaning:** Tiles skulle inte centreras på mobil med fasta px-värden
**Lösning:** Använde `repeat(${board[0].length}, minmax(0, 1fr))` för flexibel skalning

### 3. TypeScript - Helt nytt språk
**Utmaning:** TypeScript var helt nytt för mig (började för bara en vecka sedan i skolan). Att förstå types, interfaces och hur man applicerar dem på ett verkligt projekt var den största utmaningen.
**Lösning:** 
- Gradvis lärt mig om språket
- Letade upp dokumentation och tog hjälp när jag var osäker

## Design Choices

- **Färgschema:** Brun/beige för träutseende som påminner klassiska pusselspel
- **CSS-variabler:** För enkel underhållning
- **Mobile-first:** Layouten fungerar bra från mobil → desktop

## Anteckningar

Detta var mitt första riktiga React-projekt med TypeScript, vilket gjorde det till en bra utmaning. TypeScript började vi bara med för en vecka sedan i skolan, så det var mycket nytt att tillämpa på ett verkligt projekt. Hoppas ni är nöjda!

---

**Utvecklare:** Eddie Johansson  
**Datum:** April 2026