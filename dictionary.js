const mainWord = document.querySelector(".Word"); 
const PartofSpeech = document.querySelector(".partofspeech");
const Details = document.querySelector(".details");
const Desc = document.querySelector(".description");


const srch = document.getElementById("search-btn");

srch.addEventListener("click",(e)=>{
    e.preventDefault();
    const input = document.querySelector(".input");
    if(input!==""){
        fetchData(input);
        input.textContent = "";
    }

});


async function fetchData(meaning){

    // const url = 'https://tagdef.p.rapidapi.com/ff.json';
    // const options = {
	// method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': 'c479a99c21mshd8cb035a3ee8bd8p155ae6jsn71a0a612c5c3',
	// 	'X-RapidAPI-Host': 'tagdef.p.rapidapi.com'}
    // };

    
    const response = await fetch(url,options);

    const data = await response.json();
    console.log(data);



    // Sorry I have to stop here as I couldn't find any free api which could provide me all data
    // THANK YOU
}