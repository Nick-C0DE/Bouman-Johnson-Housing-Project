<?php
$property_type = $_POST["property-type"];
$area = $_POST["area"];
$rooms_number = $_POST["rooms-number"];
$zip_code = $_POST["zip-code"];
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title> predict API </title>
</head>
<body>
    <h1>Predict your HOME PRICE</h1>
    <h2 id="test"></h2>
    <form action="" method="post">
        <label for="property-type">Type(*):</label>
        <select id="property-type" name="property-type">
            <option id="property-type">APARTMENT</option>
            <option id="property-type">HOUSE</option>
            <option id="property-type">OTHERS</option>
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
    <input type="submit" id="submit" name="submit">
    <!-- <label for="area">Area:</label>
    <br><input type="number" id="area" name="area">
    <label for="area">Area:</label>
    <br><input type="number" id="area" name="area">
    <label for="area">Area:</label>
    <br><input type="number" id="area" name="area">
    <label for="area">Area:</label>
    <br><input type="number" id="area" name="area">
    <label for="area">Area:</label>
    <br><input type="number" id="area" name="area">
    <label for="area">Area:</label>
    <br><input type="number" id="area" name="area"> -->

    </form>
    <script src="index.js"></script>
</body>
</html>

<!-- "property-type": "APARTMENT" | "HOUSE" | "OTHERS",
        "area": int,
        "rooms-number": int,
        "zip-code": int,
        "garden": Optional[bool],
        "garden-area": Optional[int],
        "terrace": Optional[bool],
        "terrace-area": Optional[int],
        "facades-number": Optional[int],
        "building-state": Optional["NEW" | "GOOD" | "TO RENOVATE" | "JUST RENOVATED" | "TO REBUILD"],
        "equipped-kitchen": Optional[bool],
        "furnished": Optional[bool],
        "open-fire": Optional[bool],
        "swimmingpool": Optional[bool],
        "land-area": Optional[int],
        "full-address": Optional[str] -->