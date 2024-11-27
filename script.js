let mode = document.getElementById("mode");
let heading = document.getElementById("heading");
let input = document.getElementById("input");
let main = document.getElementById("main");
let numbers = document.getElementById("numbers");
let namee = document.getElementById("name");
let joined = document.getElementById("joined");
let bio = document.getElementById("bio");
let bio_hidden = document.getElementById("bio_hidden");
let about = document.getElementsByClassName("about");
let num = document.getElementsByClassName("num");
let txt = document.getElementsByClassName("txt");
let SM = document.getElementsByClassName("SM");
let btn = document.getElementById("btn");
let avatar = document.getElementById("avatar");
let link = document.getElementById("link");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let repos = document.getElementById("repos");
let github = document.getElementById("github");
let dark = document.getElementById("dark");
let locationn = document.getElementById("location");
let moon = document.getElementById("moon");
let twitter = document.getElementById("twitter");
let company = document.getElementById("company");
let error_txt = document.getElementById("error_txt");

btn.addEventListener("click", async (value) => {
  value.preventDefault();
  try {
    let info = await fetch(`https://api.github.com/users/${input.value}`);
    let data = await info.json();
    namee.textContent = data.name;
    link.textContent = "@" + data.login;
    avatar.src = data.avatar_url;
    followers.textContent = data.followers;
    following.textContent = data.following;
    joined.textContent =
      "joined " + data.created_at.slice(0, data.created_at.length - 10);
    repos.textContent = data.public_repos;
    if (data.bio === null || data.bio === "") {
      bio.textContent = "This account has no bio...";
    } else {
      bio.textContent = data.bio;
    }
    if (data.bio === null || data.bio === "") {
      bio_hidden.textContent = "This account has no bio...";
    } else {
      bio_hidden.textContent = data.bio;
    }
    if (data.location === null || data.location === "") {
      locationn.textContent = "No Location";
      locationn.style.opacity = "0.5";
    } else {
      locationn.textContent = data.location;
      locationn.style.opacity = "1";
    }
    if (data.twitter_username === null || data.twitter_username === "") {
      twitter.textContent = "Not Available";
      twitter.style.opacity = "0.5";
    } else {
      twitter.textContent = data.twitter_username;
      twitter.style.opacity = "1";
    }
    if (data.company === null || data.company === "") {
      company.textContent = "Not Available";
      company.style.opacity = "0.5";
    } else {
      company.textContent = data.company;
      company.style.opacity = "1";
    }
    if (data.blog === null || data.blog === "") {
      github.textContent = "Not Available";
      github.style.opacity = "0.5";
    } else {
      github.textContent = data.blog;
      github.style.opacity = "1";
    }
    error_txt.style.display = "none";
    input.value = "";
  } catch (error) {
    error_txt.style.display = "block";
    input.value = "";
    namee.textContent = "Undefined";
    joined.textContent = "Undefined";
    company.textContent = "Undefined";
    github.textContent = "Undefined";
    twitter.textContent = "Undefined";
    locationn.textContent = "Undefined";
    bio.textContent = "Please enter correct username";
    avatar.src = "./images/github.png";
    repos.textContent = "NAN";
    followers.textContent = "NAN";
    following.textContent = "NAN";
  }
});

mode.addEventListener("click", () => {
  if (localStorage.getItem("darkmode") === "true") {
    localStorage.setItem("darkmode", "false");
  } else {
    localStorage.setItem("darkmode", "true");
  }
  DarkLightModes();
});

function DarkLightModes() {
  if (localStorage.getItem("darkmode") === "true") {
    moon.src = "./images/002-sun.png";
    dark.textContent = "light";
    mode.classList.add("mode_dark");
    document.body.style.backgroundColor = "#141D2F";
    dark.classList.add("dark_dark");
    heading.classList.add("heading_dark");
    input.classList.add("input_dark");
    main.classList.add("main_dark");
    numbers.classList.add("numbers_dark");
    namee.classList.add("name_dark");
    joined.classList.add("joined_dark");
    bio.classList.add("bio_dark");
    bio_hidden.classList.add("bio_hiddendark");
    for (let j = 0; j < about.length; j++) {
      about[j].style.color = "white";
    }
    for (let j = 0; j < num.length; j++) {
      num[j].style.color = "white";
    }
    for (let k = 0; k < txt.length; k++) {
      txt[k].style.color = "white";
    }
    for (let k = 0; k < SM.length; k++) {
      SM[k].style.filter =
        "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(298deg) brightness(102%) contrast(102%)";
    }
  } else {
    moon.src = "./images/Path (4).png";
    dark.textContent = "Dark";
    mode.classList.remove("mode_dark");
    document.body.style.backgroundColor = "white";
    dark.classList.remove("dark_dark");
    heading.classList.remove("heading_dark");
    input.classList.remove("input_dark");
    main.classList.remove("main_dark");
    numbers.classList.remove("numbers_dark");
    namee.classList.remove("name_dark");
    joined.classList.remove("joined_dark");
    bio.classList.remove("bio_dark");
    bio_hidden.classList.remove("bio_hiddendark");
    for (let j = 0; j < about.length; j++) {
      about[j].style.color = "#4B6A9B";
    }
    for (let j = 0; j < num.length; j++) {
      num[j].style.color = "#2B3442";
    }
    for (let k = 0; k < txt.length; k++) {
      txt[k].style.color = "#4B6A9B";
    }
    for (let k = 0; k < SM.length; k++) {
      SM[k].style.filter =
        " brightness(0) saturate(100%) invert(44%) sepia(9%) saturate(2398%) hue-rotate(178deg) brightness(86%) contrast(87%)";
    }
  }
}
DarkLightModes();
