function getHumourUrl() {
    const jokeUrl = "https://xkcd.now.sh/?comic=latest";
    return fetch(jokeUrl)
    .then((response) => response.json())
}

function generateHumourImg({img:src,alt}) {
    const image = document.querySelector("img");
    image.src = src;
    image.alt = alt;
}

getHumourUrl().then((humourData) => {
    console.log("humour data: ", humourData)
    generateHumourImg(humourData);
})
.catch(() => {
    const errElement = document.createElement("p");
    const errMessage = "Sorry there is no joke available";
    errElement.innerText = errMessage;
    document.body.appendChild(errElement);

})
