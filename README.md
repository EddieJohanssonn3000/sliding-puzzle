# Sliding Puzzle

An interactive puzzle game built with React and TypeScript.

## About the Game

Sliding Puzzle is a classic 15-puzzle game where you must arrange numbered tiles from 1-14 in the correct order with one empty space. Click tiles adjacent to the empty space to move them.

**Board:** 3 rows × 5 columns (15 tiles total)

### How to Play
1. Click on a tile adjacent to the empty space to move it
2. Arrange all tiles in order (1-14 + empty space)
3. When the puzzle is solved, "You made it!" appears
4. Click "Shuffle" to remix and play again

### Keyboard Navigation
- **Tab** - Focus on tiles
- **Enter/Space** - Activate focused tile
- **Shuffle button** - Also focusable with Tab

## Technology

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Font:** Google Fonts (Open Sans)
- **Build tool:** Vite

## Project Structure

```
src/
├── App.tsx              # Main component with state management
├── App.css              # Main styling with variables
├── index.css            # Global styling
├── components/
│   ├── Board.tsx        # Renders grid with tiles
│   ├── Board.module.css # Board styling
│   ├── Tile.tsx         # Individual tile (with accessibility)
│   └── Tile.module.css  # Tile styling
└── utils/
    └── board.ts         # All puzzle logic
```

## Features

**Game Logic**
- `createBoard()` - Creates initial solved board (1-14 + null)
- `shuffleBoard()` - Shuffles board with 200 random moves
- `moveTiles()` - Handles tile movement when clicked
- `isBoardSolved()` - Checks if puzzle is solved

**Responsive Design**
- Desktop (1024px+)
- Tablet (600-768px)
- Mobile (< 480px)

**Accessibility**
- Keyboard navigation (Tab, Enter, Space)

## Installation & Running

```bash
# 1. Clone the repository
git clone https://github.com/EddieJohanssonn3000/sliding-puzzle.git

# 2. Navigate into the folder
cd sliding-puzzle

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Time Spent

Spread over five days, approximately 15 hours total.

## Challenges & Solutions

### 1. Shuffle Algorithm
**Challenge:** Ensure the shuffled puzzle is always solvable
**Solution:** Use 200 random valid moves instead of random tile positions

### 2. Responsive Grid Layout
**Challenge:** Tiles weren't centered on mobile with fixed pixel values
**Solution:** Used `repeat(${board[0].length}, minmax(0, 1fr))` for flexible scaling

### 3. TypeScript - Brand New Language
**Challenge:** TypeScript was completely new to me (started only a week ago in school). Understanding types, interfaces, and how to apply them to a real project was the biggest challenge.
**Solution:**
- Gradually learned the language
- Looked up documentation and asked for help when unsure

## Configuration

You can easily change the puzzle size by modifying the constants in `App.tsx`:

```typescript
const ROWS = 3;
const COLS = 5;  
```

Change these values and restart the server for a different puzzle size!

## Design Choices

- **Color Scheme:** Brown/beige for a wooden appearance reminiscent of classic puzzles
- **CSS Variables:** For easy maintenance and theme switching
- **Mobile-first:** Layout works well from mobile → desktop

## Notes

This was my first real React project with TypeScript, which made it a great challenge. We only started learning TypeScript a week ago in school, so it was very new to apply to a real project. I hope you're satisfied with the result!

---

**Developer:** Eddie Johansson  
**Date:** April 2026