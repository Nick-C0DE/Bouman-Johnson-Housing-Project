



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title> predict API </title>
</head>

<body>
<div id="container">
    <div id="banner">
    <img class="cityNight" style="width:100%; height: 641px;" src="image/cityNight.jpg" alt="city night">
    <div class="centered"><h1>Predict your HOME PRICE</h1></div>
    
    
    </div>
    <div id="main" >
        <div id="left">
        <img class="greenFlat" style="opacity:0.9; width: 100%;" src="image/greenFlat.jpg" alt="green Flat">
        </div>
        <div id="center">
        <div class="centeredx"><form action="" method="post" id="example-form">
        <label for="property-type">Type(*):</label>
        <select id="property-type" name="property-type">
            <option value="APARTMENT">APARTMENT</option>
            <option value="HOUSE">HOUSE</option>
            <option value="OTHERS">OTHERS</option>
          </select>
        <br>
        <label for="area">Area(*):</label>
        <input type="number" id="area" name="area">
        <br>
        <label for="rooms-number">Number of room(s)(*):</label>
        <input type="number" id="rooms-number" name="rooms-number">
        <br>
        <label for="zip-code">zip-code(*):</label>
        <input type="number" id="zip-code" name="zip-code">
        <br>
        <label for="gardenTRUE">With garden</label>
        <input type="radio" id="gardenTRUE" name="garden" value="gardenTRUE">
        <label for="gardenFALSE">Without garden</label>
        <input type="radio" id="gardenFALSE" name="garden" value="gardenFALSE">
        <br> 
        <label for="garden-area">Size of the garden:</label>
        <input type="number" id="garden-area" name="garden-area">
        <br>
        <label for="terraceTRUE">With terrace</label>
        <input type="radio" id="terraceTRUE" name="terrace" value="terraceTRUE">
        <label for="terraceFALSE">Without terrace</label>
        <input type="radio" id="terraceFALSE" name="terrace" value="terraceFALSE">
        <br>
        <label for="terrace-area">Size of the terrace:</label>
        <input type="number" id="terrace-area" name="terrace-area">
        <br>
        <label for="facades-number">Number of facades:</label>
        <input type="number" id="facades-number" name="facades-number">
        <br>
        <label for="building-state">Type(*):</label>
        <select id="building-state" name="building-state">
            <option value="NEW">NEW</option>
            <option value="GOOD">GOOD</option>
            <option value="TO RENOVATE">TO RENOVATE</option>
            <option value="JUST RENOVATED">JUST RENOVATED</option>
            <option value="TO REBUILD">TO REBUILD</option>
          </select>
          <label for="equipped-kitchenTRUE">With equipped kitchen</label>
        <input type="radio" id="equipped-kitchenTRUE" name="equipped-kitchen" value="equipped-kitchenTRUE">
        <label for="equipped-kitchenFALSE">Without equipped kitchen</label>
        <input type="radio" id="equipped-kitchenFALSE" name="equipped-kitchen" value="equipped-kitchenFALSE">
        <br>
        <label for="furnishedTRUE">furnished</label>
        <input type="radio" id="furnishedTRUE" name="furnished" value="furnishedTRUE">
        <label for="furnishedFALSE">unfurnished</label>
        <input type="radio" id="furnishedFALSE" name="furnished" value="furnishedFALSE">
        <br>
        
    <input type="submit" id="submit" name="submit">
    </form>
    <p id='pricing'></p></div>
        </div>

        <div id="right">
        <img class="villaView" style= "width: 100%;"src="image/villaView.jpg" alt="villaView">
        </div>

   

    
    
    </div>
    <div id='footer'>
    </div>
    </div>
    <script src="index.js"></script>
</body>
</html>

