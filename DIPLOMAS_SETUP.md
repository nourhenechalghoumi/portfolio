# Diploma Files Setup

To enable diploma display and downloads on the portfolio website, you need to add the following image files to a `diplomas` folder in the `public` directory:

## Required Files

Create the folder structure:
```
public/diplomas/
├── ING-diploma.png          (Engineering degree from ESPRIT - 2024)
└── licence-diploma.png      (Bachelor's degree from ISSAT - 2021)
```

## Instructions

1. Create a new folder `diplomas` inside the `public` directory (if not already created)
2. Add your diploma image files with the exact names listed above:
   - **ING-diploma.png** - Your Engineering degree certificate/diploma
   - **licence-diploma.png** - Your Bachelor's degree certificate/diploma
3. The files will be automatically displayed on the About page with:
   - Diploma images shown as cards in a grid
   - Download buttons for each diploma
   - Bilingual support (French/English)

## Supported Formats
- PNG files (.png) - Recommended for quality and transparency
- Recommended dimensions: 1024x1440px (portrait)
- Maximum file size: 5MB per file

## File Naming Convention
- Use exact names: `ING-diploma.png` and `licence-diploma.png`
- Case-sensitive on Linux/Mac servers

## Features
✓ Diploma images displayed in responsive grid (1-2 columns based on screen size)
✓ Download button for each diploma  
✓ Bilingual labels (French/English)
✓ Hover effects and smooth transitions
✓ Mobile-friendly layout
