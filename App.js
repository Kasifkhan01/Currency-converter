const BASE_URL ="http://open.er-api.com/v6/latest";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn =  document.querySelector("form button");
const formcurr = document.querySelector(".form select");
const tocurr = document.querySelector(".to select");



for ( let select of dropdowns){
    for (currcode in countryList){
        let newOption =document.createElement("option");
        newOption.innerText=currcode;
        newOption.value =currcode;
        if( select.name === "form" && currcode === "USD"){
            newOption.selected ="selected"
        } else if( select.name === "TO" && currcode === "INR"){
            newOption.selected ="selected"
        }
        select.append(newOption);
};
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})
}

const updateFlag=(element)=>{
    let currcode = element.value;
    // console.log(currcode);
    let countryCode = countryList[currcode];
    let newScr=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newScr
}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amout input");
    let amtVal = amount.value;
    console.log(amtVal);
    if(amtVal === ""|| amtVal <1){
        amtVal =1;
        amount.value="1";

    }
     
    // console.log(formcurr.value ,tocurr.value);
    // const URL = `{BASE_URL}/${formcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    // const URL = `${BASE_URL}?amout=${amtVal}&form=${formcurr.value}&to=${tocurr.value}`;
    const URL = `${BASE_URL}/${formcurr.value}`
    let response = await fetch(URL);
     let data = await response.json();
     let rate = data.rates[tocurr.value];
    // console.log(response);
    console.log(data);
    console.log(rate)

});