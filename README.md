# D3 Particle Logo Animation

This project demonstrates a dynamic particle animation effect using D3.js and GSAP (GreenSock Animation Platform). The animation transforms a static PNG logo into a particle-based animation, where particles move from the center of the canvas to their respective positions in the logo.

## **Important Note**
**The logo must be in PNG format and converted to a base64 image data string for the animation to work properly.**

---

## Features
- **Particle Animation**: Particles animate from the center of the canvas to form the logo.
- **Interactive**: Click anywhere on the canvas to replay the animation.
- **Responsive**: The canvas dynamically adjusts to the size of the logo.

---

## How It Works
1. The PNG logo is loaded and converted into image data.
2. The image data is analyzed to determine the positions of the particles.
3. Each particle is animated using GSAP to move from the center of the canvas to its designated position in the logo.
4. The animation can be replayed by clicking on the canvas.

---

## Setup
1. Clone the repository or download the source code.
2. Replace the `png.src` in the `main.js` file with your own base64-encoded PNG image data.
3. Open the `index.html` file in your browser to view the animation.

---

## Code Structure
- **index.html**: The main HTML file that includes the canvas and scripts.
- **main.js**: The JavaScript file containing the logic for particle animation.
- **styles.css**: (Optional) Add custom styles if needed.

---

## Dependencies
- [GSAP](https://greensock.com/gsap/): Used for smooth and customizable animations.
- Plain JavaScript: No additional libraries are required for the core functionality.

---

## Usage
1. Ensure your logo is in PNG format.
2. Convert the PNG image to a base64 string using an online tool or a script.
3. Replace the `png.src` value in `main.js` with your base64 string.
4. Open `index.html` in your browser to see the animation.

---

## Example Base64 Image Data
Replace the `png.src` in `main.js` with your base64-encoded PNG image data:
```javascript
png.src = "data:image/png;base64,iV...";