const images = [
  "izone0.jpg",
  "izone1.jpg",
  "izone2.jpg",
  "izone3.jpg",
  "izone4.jpg",
  "izone5.jpg",
  "izone6.jpg",
  "izone7.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.background = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
console.log(chosenImage);
