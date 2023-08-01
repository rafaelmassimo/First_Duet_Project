const hamburger = document.getElementById('hamburger-icon');
const navigation = document.getElementById('buttons_top');

hamburger.addEventListener('click', (event) => {
  navigation.classList.toggle('navbar-display');
});

// ---------------------------------------------------------------------
// *                     Home Page Audios
// ---------------------------------------------------------------------

//           ***** BAR ****
const bar_box = document.getElementById("audio-box");
bar_box.addEventListener("mouseover", (event) => {
  let bar_audio = document.getElementById("bar-audio");
  bar_audio.currentTime = 6;
  bar_audio.play();
});


const bar_box_ = document.getElementById("audio-box");
bar_box_.addEventListener("mouseout", (event) => {
  let bar_audio_ = document.getElementById("bar-audio");
  bar_audio_.pause();
  bar_audio_currentTime = 0;
});

//           ***** Kitchen ****

const kit_box = document.getElementById("kitchen-box");
kit_box.addEventListener("mouseover", (event) => {
  let kit_audio = document.getElementById("kitchen-audio");
  kit_audio.play();
});


const kit_box_ = document.getElementById("kitchen-box");
kit_box_.addEventListener("mouseout", (event) => {
  let kit_audio_ = document.getElementById("kitchen-audio");
  kit_audio_.pause();
  kit_audio_currentTime = 0;
});

//           ***** Main Lounge ****


const lounge_box = document.getElementById("lounge-box");
lounge_box.addEventListener("mouseover", (event) => {
  let lounge_audio = document.getElementById("lounge-audio");

  lounge_audio.play();
});


const lounge_box_ = document.getElementById("lounge-box");
lounge_box_.addEventListener("mouseout", (event) => {
  let lounge_audio_ = document.getElementById("lounge-audio");
  lounge_audio_.pause();
  lounge_audio_currentTime = 0;
});

//           ***** Event Room ****


const event_box = document.getElementById("event-box");
event_box.addEventListener("mouseover", (event) => {
  let event_audio = document.getElementById("event-audio");
  event_audio.currentTime = 48.2;
  event_audio.play();
  
});


const event_box_ = document.getElementById("event-box");
event_box_.addEventListener("mouseout", (event) => {
  let event_audio_ = document.getElementById("event-audio");
  event_audio_.pause();
  event_audio_currentTime = 0;
});