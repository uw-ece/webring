// Sliders
var slider = document.getElementById("song-progress");

noUiSlider.create(slider, {
  start: [20],
  range: {
    min: [0],
    max: [100],
  },
});

var slider = document.getElementById("song-volume");

noUiSlider.create(slider, {
  start: [90],
  range: {
    min: [0],
    max: [100],
  },
});

// Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Viewport Heights
$(window).on("resize load", function () {
  var totalHeight = $(window).height();

  var headerHeight = $(".header").outerHeight();
  var footerHeight = $(".current-track").outerHeight();
  var playlistHeight = $(".playlist").outerHeight();
  var nowPlaying = $(".playing").outerHeight();

  var navHeight =
    totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  var artistHeight = totalHeight - (headerHeight + footerHeight);

  console.log(totalHeight);

  $(".navigation").css("height", navHeight);
  $(".artist").css("height", artistHeight);
  $(".social").css("height", artistHeight);
});

// Collapse Toggles
$(".navigation__list__header").on("click", function () {
  $(this).toggleClass("active");
});

// Media Queries
$(window).on("resize load", function () {
  if ($(window).width() <= 768) {
    $(".collapse").removeClass("in");
    $(".navigation").css("height", "auto");
    $(".artist").css("height", "auto");
  }
});

$(window).on("resize load", function () {
  if ($(window).width() > 768) {
    $(".collapse").addClass("in");
  }
});

const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let ece_students = [
  {
    name: "Sayma Khan",
    website: "https://saymaakhan.github.io/",
  },
  {
    name: "Adshayan Balendra",
    website: "https://adshayanb.github.io/",
  },
  {
    name: "Jaishree Balamurugan",
    website: "https://jaishreebala.com/",
  },
];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = ece_students.filter((students) => {
    return (
      students.name.toLowerCase().includes(searchString) ||
      students.website.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    displayCharacters(ece_students);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (students) => {
  const htmlString = students
    .map((students) => {
      return `
            <div class="track">
                <div class="track__number">1</div>
                <div class="track__added">
                    <i class="ion-checkmark-round added"></i>
                </div>

                <div class="track__title featured">
                    <span class="title">${students.name}</span>
                    <span class="feature">
                        <a target="_blank" href="${students.website}">${students.website}</a>
                    </span>
                </div>

                <div class="track__explicit">
                    <span class="label">Explicit</span>
                </div>

                <div class="track__length">2024</div>
                <div class="track__popularity">
                    <i class="ion-arrow-graph-up-right"></i>
                </div>
            </div>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
