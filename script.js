let xhrUrl = "https://api.tvmaze.com/search/shows?q=girls";
let xhr = new XMLHttpRequest();

let blck = document.querySelector(".movie-sect");

xhr.open("GET", xhrUrl);

const Datta = new Promise((resolve, reject) => {
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const user = JSON.parse(xhr.response);
      //   console.log(user); *********************
      resolve(user);
    }
  };
})
  .then((person) => {
    person.map((item) => {
      console.log(item, "458786546466687/79864");
      let movie = document.createElement("div");
      movie.innerHTML = `<h1 class="names">${item.show.name}</h1> <h2>${item.score}</h2>`;

      // Shoul Do Map for Show //
      let aba = item.show.image.medium;
      // console.log(aba);
      let imge = document.createElement("div");
      imge.setAttribute("class", "abba");
      imge.innerHTML = `<img src=${aba} alt="">`;

      let txt = document.createElement("div"); // Add class
      txt.classList.add("txt-sty");
      txt.innerHTML = `<p>${item.show.genres}</p> <p>${item.show.language}</p> <p>${item.show.premiered}</p> <p>${item.show.status}</p> <p>${item.show.network.country.name}</p>`;
      blck.append(movie);
      blck.append(imge);
      blck.append(txt);
    });
  })
  .catch((person) => {
    console.error(person);
  });

xhr.send();

//*********************************************** */
