//Video section
const startButton = document.getElementById("startButton");
const startFromButton = document.getElementById("startFromButton");
const pauseButton = document.getElementById("pauseButton");

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "270",
    width: "480",
    videoId: "FTociictyyE",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  startButton.addEventListener("click", function () {
    if (player) {
      player.seekTo(0);
      if (playerState != YT.PlayerState.PLAYING) {
        player.playVideo();
      }
    }
  });

  startFromButton.addEventListener("click", function () {
    if (player) {
      player.seekTo(120);
      if (playerState != YT.PlayerState.PLAYING) {
        player.playVideo();
      }
    }
  });

  pauseButton.addEventListener("click", function () {
    if (player && playerState == YT.PlayerState.PLAYING) {
      player.pauseVideo();
    }
  });
}

var playerState;
function onPlayerStateChange(event) {
  playerState = event.data;
}

//Category strip section
const startPoint = 0;
const size = 8;
var app = new Vue({
  el: "#app",
  data: {
    sortParam: "",
    categories: [
      { image: "./images/breakfast.jpeg", title: "Breakfast" },
      { image: "./images/lunch.jpg", title: "Lunch" },
      { image: "./images/beverages.jpg", title: "Beverages" },
      { image: "./images/appetizers.jpg", title: "Appetizers" },
      { image: "./images/soups.jpg", title: "Soups" },
      { image: "./images/salads.jpg", title: "Salads" },
      { image: "./images/desserts.jpg", title: "Desserts" },
      { image: "./images/seafood.jpg", title: "Seafood" },
      { image: "./images/vegetarian.png", title: "Vegetarian" },
      { image: "./images/breads.jpg", title: "Breads" },
    ],
  },
  computed: {
    sortedList() {
      return this.categories.slice(startPoint, size);
    },
  },
  methods: {
    prev: function () {
      let item = this.categories.pop();
      this.categories.unshift(item);
    },
    next: function () {
      let item = this.categories.shift();
      this.categories.push(item);
    },
  },
});
