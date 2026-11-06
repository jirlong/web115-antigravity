# Compact PNG edition

Open aladdin-six-scenes-png.html for the self-contained offline page.

For the smallest HTML and reusable assets, open index.html with style.css, scroll.js and assets/ beside it. Keep the entire folder together.

## Size

- Previous standalone HTML: 18,899,250 bytes.
- Compact standalone HTML: 996,609 bytes (94.7% smaller).
- Separate-assets HTML: 5,027 bytes; its images load from assets/.

The previous SVGs embedded entire raster screenshots inside clipping wrappers, sometimes with duplicate href/xlink data, and the wrappers were then base64-encoded again in the standalone page.

This edition rasterizes only the visible cutout area into transparent PNGs. PNGs use an optimized 128-color palette. Opaque grayscale backgrounds use JPEG quality 87. The princess retains a small inline SVG positioning wrapper with two transparent PNGs so her arm keeps the original pivot and movement.

Animation JavaScript is byte-for-byte unchanged. Scene structure, sizes, layer arrangement and English text are retained. The original edition is preserved separately. The image compression is visually close but not pixel-lossless.

Checked asset references, transparency, cutout quality and identical animation code. Browser scrolling has not been tested in this environment.

## Brighter paper styling

All image layers are brighter. Midground, character and foreground cutouts have a white contour and dark drop shadow following their transparency; motion and layout are unchanged. Styling is controlled by --image-light and --paper-edge-shadow in style.css.
