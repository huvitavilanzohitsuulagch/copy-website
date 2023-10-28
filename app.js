let title = document.getElementById("hello");
let name = document.getElementById("title");
let sub = document.getElementById("sub")
fetch("./test.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => title.innerHTML = json.movies.popular[0].harry.title );
  fetch("./test.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => sub.innerHTML = json.movies.popular[0].harry.subscription );
  fetch("./test.json")
  .then((response) => {
    return response.json();
  })
  .then((json) => name.innerHTML = json.movies.popular[0].harry.img );
  let move = document.getElementById("move");
  move.onclick = function() {myFunction()};
  function myFunction() {
    location.href = "tailbar.html"
  }
