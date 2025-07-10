// logo-slider.js
document.addEventListener("DOMContentLoaded", () => {
  const template = document.getElementById("logo-set").content;
  const track = document.getElementById("slider-track");
  const track2 = document.getElementById("slider-track-duplicate");

  // Append logos twice
  track.appendChild(template.cloneNode(true));
  track2.appendChild(template.cloneNode(true));
});
