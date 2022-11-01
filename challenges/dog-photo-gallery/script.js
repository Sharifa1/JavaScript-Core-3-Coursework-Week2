function generateUrl() {
   let url = "https://dog.ceo/api/breeds/image/random";
   return fetch(url).then((response) => response.json()
   .then((jsonResponse) => {
    if(jsonResponse.code === 404)
        return Promise.reject("No dog is found") 
        else return jsonResponse.message;
   }))
}

function generateDog(url) {
    const dogList = document.querySelector("ul");
    const dogElement = document.createElement("li");
    const dogImage = document.createElement("img");
    dogImage.src = url;
    dogList.appendChild(dogElement);
    dogElement.appendChild(dogImage);
}

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    generateUrl()
    .then((url) => generateDog(url))
    .catch((err) => {
        const placeHolder = "./dog-placeholder.jpg"
        generateDog(placeHolder)
    });
});