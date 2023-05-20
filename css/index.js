const cat = document.querySelector(".goodcat");

cat.addEventListener("click", function () {
  var userInput = prompt("Enter a Url of image:");
  if (userInput !== null && userInput.trim() !== "") cat.src = userInput;
});

const editprofile = document.querySelector(".editprofiles");
editprofile.addEventListener("click", function () {
  const loren = document.querySelector(".lorens");
  var userInput = prompt("edit profile bio");
  loren.innerHTML = userInput;
});

const postes = document.querySelector(".posts");
postes.addEventListener("click", function () {
  var userInput = prompt("Enter a URL of the  new post:");
  var newImage = new Image();
  if (userInput !== null && userInput.trim() !== "") {
    newImage.src = userInput;
    const divElement = document.createElement("div");
    divElement.className = "my-3";
    divElement.appendChild(newImage);
    postes.appendChild(divElement);
    var postvalue = document.querySelector(".newpost");
    var newcount = Number(postvalue.innerHTML) + 1;
    console.log(newcount);
    postvalue.innerHTML = newcount;
  }
});
