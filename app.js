const btn = document.querySelector("button");
const box = document.querySelector(".container");
const input = document.querySelector("input");
input.focus();
// const avatar = document.createElement("img");
// const logo = document.querySelector(".logo");
let arr = [];

async function getData() {
  let url = `https://www.omdbapi.com/?t=${input.value}&apikey=7c987752`;
  let source = await fetch(url);
  let data = await source.json();
  let fullData = data.Poster;
  let img = document.createElement("img");
  img.src = fullData;
  let namediv = document.createElement("div");
  namediv.innerText = `Title: ${data.Title}`;
  let genre = document.createElement("div");
  genre.innerText = `Genre: ${data.Genre}`;
  let year = document.createElement("div");
  year.innerText = `Year: ${data.Year}`;
  let plot = document.createElement("div");
  plot.innerText = `Plot: ${data.Plot}`;
  let director = document.createElement("div");
  director.innerText = `Director: ${data.Director}`;
  let actors = document.createElement("div");
  actors.innerText = `Actors: ${data.Actors}`;
  let ratingsAll = "";
  data.Ratings.forEach((element) => {
    ratingsAll += `source: ${element.Source} value:${element.Value}`;
  });
  let ratings = document.createElement("div");
  ratings.innerText = `Ratings: ${ratingsAll}`;
  box.innerHTML = "";
  box.append(namediv);
  box.append(img);
  box.append(genre);
  box.append(year);
  box.append(plot);
  box.append(director);
  box.append(actors);
  box.append(ratings);
}
// getData();

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getData();
    input.value = "";
  }
});
input.addEventListener("click", function (event) {
  input.value = "";
});
btn.addEventListener("click", getData);
btn.addEventListener("click", function (event) {
  input.value = "";
  input.focus();
});
