# Diploma Files Setup

To enable diploma downloads on the portfolio website, you need to add the following PDF files to a `diplomas` folder in the `public` directory:

## Required Files

Create the folder structure:
```
public/diplomas/
├── diplome-ingenieur-esprit-2024.pdf    (Engineering degree from ESPRIT - 2024)
└── diplome-bachelor-issat-2021.pdf      (Bachelor's degree from ISSAT - 2021)
```

## Instructions

1. Create a new folder `diplomas` inside the `public` directory
2. Add your diploma PDF files with the exact names listed above
3. The files will be automatically available for download from:
   - About page (Diplomas section)
   - CV Download component

## Supported Formats
- PDF files (.pdf)
- Keep file sizes under 10MB for optimal performance

## File Naming Convention
- Use lowercase with hyphens: `diplome-[type]-[school]-[year].pdf`
- Keep names short and descriptive
