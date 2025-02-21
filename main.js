let canvas = document.getElementById("scene");
let ctx = canvas.getContext("2d");
let particles = [];

function drawScene() {
  particles = [];
  canvas.width = png.width * 6;
  canvas.height = png.height * 6;

  ctx.drawImage(png, 0, 0);

  const data = ctx.getImageData(0, 0, png.width, png.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  for (let y = 0, y2 = data.height; y < y2; y++) {
    for (let x = 0, x2 = data.width; x < x2; x++) {
      if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
        const particle = {
          x0: x,
          y0: y,
          x1: png.width / 2,
          y1: png.height / 2,
          speed: Math.random() * 4 + 2,
        };
        gsap.to(particle, {
          duration: particle.speed,
          x1: particle.x0,
          y1: particle.y0,
          delay: y / 30,
          ease: Elastic.easeOut,
        });
        particles.push(particle);
      }
    }
  }

  requestAnimationFrame(render);
}
const render = function () {
  requestAnimationFrame(render);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0, j = particles.length; i < j; i++) {
    const particle = particles[i];
    ctx.fillRect(particle.x1 * 6, particle.y1 * 6, 3, 3);
  }
};

const png = new Image();
png.onload = () => {
  drawScene();
  window.addEventListener("click", drawScene);
};

png.src =
  "data:image/png;base64,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";
