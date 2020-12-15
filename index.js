
let _data = {}

const url = "https://predict-keras-api-2.herokuapp.com/predict"; 
document.querySelector("#submit").addEventListener("click", (event) =>{
    event.preventDefault()
        _data = {
        "data": {
            "property-type": document.querySelector("#property-type").value,
            "area": parseInt(document.querySelector("#area").value),
            "rooms-number": parseInt(document.querySelector("#rooms-number").value),
            "zip-code": parseInt(document.querySelector("#zip-code").value),
            "garden": document.getElementsByName("garden")[0].checked,
            "garden-area": parseInt(document.querySelector("#garden-area").value),
            "terrace": document.getElementsByName("terrace")[0].checked,
            "terrace-area": parseInt(document.querySelector("#terrace-area").value),
            "facades-number": parseInt(document.querySelector("#facades-number").value),
            "building-state": document.querySelector("#building-state").value.toUpperCase(),
            "equipped-kitchen": document.getElementsByName("equipped-kitchen")[0].checked,
            "furnished": document.getElementsByName("furnished")[0].checked,
            "open-fire": document.getElementsByName("open-fire")[0].checked,
            "swimmingpool": document.getElementsByName("swimmingpool")[0].checked,
            "land-area": parseInt(document.querySelector("#land-area").value)
            // "full-address": toString(document.querySelector("#full-address").value),
        } };
        
        console.log(_data)
        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            document.querySelector("#pricing").innerText = `L'évaluation de votre bien est de ` + Math.floor(data.prediction.price)+ " €."
            document.querySelector("#pricing1").innerText = `Nous sommes a ` + parseInt(data.prediction.r2_score *100)+ ` % sûre de notre estimation. `
        });
        
});




// 

// const proxyurl = "https://cors-anywhere.herokuapp.com/http://cnos.herokuapp.com/predict";
// fetch(proxyurl)
//     .then(response => response.json())
//     .then((data) => {
        
//         let content =data.properties.data.properties['zip-code'].enum;
//         content.sort();
//         let zip = null;
//         content.forEach(element => {
//                 zip = `<option value="${element}">${element}</option>`;
//             document.getElementById("zip").insertAdjacentHTML("beforeend", zip);
//         });
//         console.log(data.properties.data.properties['zip-code'])
//     });



// ************************************************************************
// let dataBelgium= {};
//     let urlbelgium = "https://www.odwb.be/api/records/1.0/search/?dataset=code-postaux-belge&q=";

//     fetch(urlbelgium) 
//     .then(response => response.json())
//     .then((data) => {
    
//         let com = data.records["0"].fields.column_2;
//         console.log(com);
//         // document.querySelector("#pricing").innerText = Math.floor(data.prediction.price)+ " €"
//         // document.querySelector("#pricing1").innerText = parseInt(data.prediction.r2_score *100)+ " %"
        
//     });