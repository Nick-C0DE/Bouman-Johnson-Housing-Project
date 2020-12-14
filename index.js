
const url = "https://predict-keras-api-2.herokuapp.com/predict"; 

fetch(url,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        "data": {
            "property-type": "APARTMENT",
            "area": 200,
            "rooms-number": 2,
            "zip-code": 1060,
            // "garden": Optional[bool],
            // "garden-area": Optional[int],
            // "terrace": Optional[bool],
            // "terrace-area": Optional[int],
            // "facades-number": Optional[int],
            // "building-state": Optional["NEW" | "GOOD" | "TO RENOVATE" | "JUST RENOVATED" | "TO REBUILD"],
            // "equipped-kitchen": Optional[bool],
            // "furnished": Optional[bool],
            // "open-fire": Optional[bool],
            // "swimmingpool": Optional[bool],
            // "land-area": Optional[int],
            // "full-address": Optional[str]
        } 
    })
}) 
.then(response => response.json())
.then(data => console.log(data))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));




// "property-type": property-type,
//             "area": area,
//             "rooms-number": rooms-number,
//             "zip-code": zip-code,