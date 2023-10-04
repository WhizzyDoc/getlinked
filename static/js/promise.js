// const settings = {
//   async: true,
//   crossDomain: true,
//   url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta",
//   method: "GET",
//   headers: {},
// };

// $(document).ready(function () {
//   $("#btn").click(function () {
//     fetch(
//       "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "323b1296c6msh6f017023e0b67f8p1fe891jsn74f1e99f5eda",
//           "X-RapidAPI-Host":
//             "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//         },
//       }
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// });

// declaring a new promise object
let new_promise = new Promise(function (resolve, reject) {
  // code to be executed
  let data = fetch("./js/data.json");

  if (data) {
    resolve("Success"); // when unsuccessful
  } else {
    reject("Error while fetching data"); // when successful
  }
});

// resolving the promise
new_promise.then(
  function (value) {
    // do something withe returned value
    console.log(value);
  },
  function (error) {
    // do something with the error message
    console.log(error);
  }
);
