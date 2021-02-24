
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
        } };
        
        console.log(_data)
        fetch(url, {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        
        .then(response => response.json())
        .then((data) => {
            document.querySelector("#pricing").innerText = `L'évaluation de votre bien est de ` + Math.floor(data.prediction.price)+ " €."
            document.querySelector("#pricing1").innerText = `Nous sommes a ` + parseInt(data.prediction.r2_score *100)+ ` % sûre de notre estimation. `
        });
        
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(event) {
    event.preventDefault()
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    
  if (event.target == modal) {
    modal.style.display = "none";
  }
}