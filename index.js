const btnEl= document.getElementById("btn");
const animeContainerEl= document.querySelector(".anime-container");
const animeImgEl= document.querySelector(".anime-image");
const animeNameEl= document.querySelector(".anime-name");


btnEl.addEventListener("click", async function(){
    try{
        btnEl.disabled= true;
        btnEl.innerText= "Loading...";
        animeNameEl.innerText="Updating...";
        animeImgEl.src="spinner.svg";
        const response= await fetch("https://api.catboys.com/img"); 
        const data= await response.json();
        btnEl.disabled= false;
        btnEl.innerText="Get Anime"
        animeContainerEl.style.display= "block";
        animeImgEl.src= data.url;
        animeNameEl.textContent= data.artist;


    } catch (error){
        btnEl.disabled= false;
        btnEl.innerText="Get Anime";
        animeNameEl.textContent="An error occured, please try again later";
    }
})