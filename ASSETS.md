# Asset Management Instructions

This document outlines how to manage and replace visual assets for the Truverizen website.

## 1. Replacing the Company Logo

Currently, the logo is referenced in the HTML and React components.

### Top Navigation Logo & Favicon
The `logo.png` file should be placed in the public root directory (or the root directory in this specific file environment).

To replace the logo:
1.  Prepare your logo file (preferably PNG or SVG).
2.  Name it `logo.png`.
3.  Replace the existing file in the root directory.

*Note: In the Navbar component (`components/Navbar.tsx`), the logo is also constructed using HTML/CSS (a "T" inside a colored square) as a fallback/primary display. If you wish to use an image file in the Navbar instead:*

1.  Open `components/Navbar.tsx`.
2.  Locate the button containing the "T" div.
3.  Replace the `<div>...</div>` with an `<img src="/logo.png" alt="Truverizen" className="w-8 h-8" />`.

## 2. Replacing Footer Icons

The footer currently uses `lucide-react` icons (Linkedin, Twitter, Github). If you have custom SVG icons for social media:

1.  Open `components/Footer.tsx`.
2.  Import your SVG or image.
3.  Replace the `<SocialLink icon={<Linkedin ... />} />` calls with your image.

## 3. General Images (Hero, About Page, Blog)

Most images in the application currently use **Unsplash** URLs for demonstration purposes. 

**To replace these with company-specific assets:**

1.  **Place your images** in a public folder (e.g., `/public/images/`).
2.  **Update the source paths** in the respective components:
    *   **About Page**: `pages/About.tsx` (Search for `img src`)
    *   **Blog Page**: `pages/Blog.tsx` (Search for `img src` inside the `posts` array)
    *   **Industry Details**: `pages/IndustryDetail.tsx` (If hero images are enabled)

## 4. Dashboard Demos

The product demos (TaraDemo, SafetyDemo, CloudManagerDemo) use CSS and Framer Motion to simulate software interfaces. They do not use static screenshots. To change the appearance of these, you must edit the code in `components/demos/`.
