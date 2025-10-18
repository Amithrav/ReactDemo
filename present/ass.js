function playTrack(i) {
  audio.src = tracks[i].src;
  audio.play();
  title.textContent = tracks[i].title;
  document.getElementById("currentCover").src = tracks[i].cover;

  [...carousel.children].forEach((item, idx) => {
    item.classList.toggle("active", idx === i);
  });
}
const tracks = [
  {
    title: "Jo Tum Mere Ho",
    artist: "Arijit Singh",
    src: "jo tum.mp3",
    cover: "jo tum.jpg",
    background: "jo tum.jpg", 
    favorite: false
  },
  {
    title: "Nesamaguren",
    artist: "Aimer",
    src: "Nesamaguren.mp3",
    cover: "nesa.jpg",
    background: "nesa.jpg",
    favorite: false
  },
  {
    title: "Abdi Abdi",
    artist: "Abdi",
    src: "abdi.mp3",
    cover: "ABDI.webp",
    background: "abdi.jpg",
    favorite: false
  }
];
function playTrack(i) {
  audio.src = tracks[i].src;
  audio.play();
  title.textContent = `${tracks[i].title} — ${tracks[i].artist}`;
  currentCover.src = tracks[i].cover;

 
  document.body.style.backgroundImage = `url('${tracks[i].background}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  [...carousel.children].forEach((item, idx) => {
    item.classList.toggle("active", idx === i);
  });
}

