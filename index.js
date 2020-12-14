
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
            // "garden": parseInt(document.querySelector("#garden").value),
            // "garden-area": parseInt(document.querySelector("#garden-area").value),
            // "terrace": parseInt(document.querySelector("#terrace").value),
            // "terrace-area": parseInt(document.querySelector("#terrace-area").value),
            // "facades-number": parseInt(document.querySelector("#facades-number").value),
            // "building-state": document.querySelector("#building-state").value,
            // "equipped-kitchen": parseInt(document.querySelector("#equipped-kitchen").value),
            // "furnished": parseInt(document.querySelector("#furnished").value),
            //////////////////////////////////////////////////////////////////
            // "open-fire": parseInt(document.querySelector("#open-fire").value),
            // "swimmingpool": parseInt(document.querySelector("#swimmingpool").value),
            // "land-area": parseInt(document.querySelector("#land-area").value),
            // "full-address": toString(document.querySelector("#full-address").value),
        } }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        
        .then(response => response.json())
        .then(data => document.querySelector("#pricing").innerText = Math.floor(data.prediction.price)+ " €");
        
        

});



