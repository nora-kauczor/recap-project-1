const box1Button = document.querySelector('[data-js="box1-bookmark"]');
const box2Button = document.querySelector('[data-js="box2-bookmark"]');

const showAnswer = box1Button.addEventListener("click", () => {});
const showAnswer = box2Button.addEventListener("click", () => {});

// profile page
const profileMain = document.querySelector('[data-js="profile-page_main"]');
const darkModeButton = document.querySelector('[data-js="settings-button"]');

// slide statt click??
darkModeButton.addEventListener("click", () => {
  profileMain.classList.toggle("dark");
});
