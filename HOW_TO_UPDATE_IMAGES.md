# How to Update Images in Your Portfolio

## 📁 How to Change Folder Animation Images

The folder animation images (the pictures that show when you click on a folder) are defined in `src/App.jsx`.

### Location: Lines 49-101 in `src/App.jsx`

```javascript
const folders = [
  {
    title: 'Graphic Design',
    folderType: 'graphic-design',
    color: '#a25aff',
    shots: [
      {
        src: 'YOUR_IMAGE_PATH_HERE',  // ← Change this
        alt: 'Graphic design work',
      },
      {
        src: 'YOUR_IMAGE_PATH_HERE',  // ← Change this
        alt: 'Design project',
      },
      {
        src: 'YOUR_IMAGE_PATH_HERE',  // ← Change this
        alt: 'Creative work',
      },
    ],
  },
  // ... more folders
];
```

### Steps to Change Folder Images:

1. **Place your images in the `public` folder:**
   ```
   public/
   └── AssetOfMine/
       ├── folder-images/
       │   ├── graphic1.jpg
       │   ├── graphic2.jpg
       │   └── graphic3.jpg
   ```

2. **Update the `src` path in App.jsx:**
   ```javascript
   shots: [
     {
       src: 'AssetOfMine/folder-images/graphic1.jpg',
       alt: 'Graphic design work',
     },
     {
       src: 'AssetOfMine/folder-images/graphic2.jpg',
       alt: 'Design project',
     },
     {
       src: 'AssetOfMine/folder-images/graphic3.jpg',
       alt: 'Creative work',
     },
   ],
   ```

3. **Save the file** - The changes will appear automatically!

---

## 🎨 How to Add Pictures to the Drawings Gallery

The drawings displayed in the Masonry gallery are defined in `src/pages/Drawings.jsx`.

### Location: Lines 5-28 in `src/pages/Drawings.jsx`

```javascript
const drawings = [
  {
    id: 1,
    img: 'YOUR_IMAGE_PATH_HERE',  // ← Change this
    height: 720,  // ← Adjust height for layout
  },
  // ... more drawings
];
```

### Steps to Add Drawings:

1. **Place your drawing images in the `public` folder:**
   ```
   public/
   └── AssetOfMine/
       ├── drawings/
       │   ├── drawing1.jpg
       │   ├── drawing2.png
       │   ├── drawing3.jpg
       │   └── drawing4.png
   ```

2. **Update `src/pages/Drawings.jsx`:**
   ```javascript
   const drawings = [
     {
       id: 1,
       img: 'AssetOfMine/drawings/drawing1.jpg',
       height: 720,
     },
     {
       id: 2,
       img: 'AssetOfMine/drawings/drawing2.png',
       height: 650,
     },
     {
       id: 3,
       img: 'AssetOfMine/drawings/drawing3.jpg',
       height: 800,
     },
     {
       id: 4,
       img: 'AssetOfMine/drawings/drawing4.png',
       height: 680,
     },
     // Add more as needed!
   ];
   ```

3. **Tips for `height` values:**
   - Use varying heights (600-850) for a nice masonry effect
   - Taller images = larger display
   - The width is automatically calculated

---

## 🖼️ How to Add Pictures to Graphic Design Gallery

Similar to Drawings, edit `src/pages/GraphicDesign.jsx`:

### Location: Lines 5-44 in `src/pages/GraphicDesign.jsx`

```javascript
const graphicDesignWorks = [
  {
    id: 1,
    img: 'AssetOfMine/graphics/1.png',
    height: 600,
  },
  // Add more here
];
```

### To add new graphics:

```javascript
{
  id: 10,  // Next available ID
  img: 'AssetOfMine/graphics/your-new-image.jpg',
  height: 700,
},
```

---

## 📂 Recommended Folder Structure

```
unrealgraphics-portfolio/
├── public/
│   └── AssetOfMine/
│       ├── 1by1pic.jpg (your profile picture)
│       ├── graphics/
│       │   ├── 1.png
│       │   ├── 2.png
│       │   └── ... (your graphic design works)
│       ├── drawings/
│       │   ├── drawing1.jpg
│       │   ├── drawing2.png
│       │   └── ... (your drawings)
│       ├── projects/
│       │   └── ... (project images)
│       └── folder-images/
│           ├── graphic1.jpg (for folder animation)
│           ├── graphic2.jpg
│           └── ... (preview images)
└── src/
    ├── App.jsx (folder animation images)
    └── pages/
        ├── GraphicDesign.jsx (graphic design gallery)
        ├── Drawings.jsx (drawings gallery)
        └── Projects.jsx (projects gallery)
```

---

## 🔄 Quick Reference

| What to Change | File Location | What to Edit |
|---------------|---------------|--------------|
| **Folder animation images** | `src/App.jsx` | `folders` array (lines 49-101) |
| **Graphic Design gallery** | `src/pages/GraphicDesign.jsx` | `graphicDesignWorks` array |
| **Drawings gallery** | `src/pages/Drawings.jsx` | `drawings` array |
| **Projects gallery** | `src/pages/Projects.jsx` | Add content as needed |

---

## ⚡ After Making Changes:

1. Save the file
2. The development server will auto-reload
3. Check your browser to see the changes!

**Need to rebuild?** Run: `npm run build`

---

## 💡 Tips:

- Use **optimized images** (compress them first!)
- Recommended formats: **JPG** for photos, **PNG** for graphics
- Keep file sizes under **500KB** for best performance
- Use descriptive filenames: `logo-design-1.jpg` instead of `img123.jpg`

---

Happy designing! 🎨✨

