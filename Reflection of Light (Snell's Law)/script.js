

let medium = "Water";
let RI = 1.33


function water() {
    medium = 'Water'
    document.getElementById('medium2').style.backgroundColor = "#2E8A99"
    RI = 1.333
    refraction();
}

function air() {
    medium = 'Air'
    document.getElementById('medium2').style.backgroundColor = "#DDE6ED"
    RI = 1.0003
    refraction();
}

function kerosene(params) {
    medium = "Kerosene"
    document.getElementById('medium2').style.backgroundColor = "#FFD966"
    RI = 1.44
    refraction();

}

function diamond() {
    medium = "Diamond"
    document.getElementById('medium2').style.backgroundColor = "#B9F2FF"
    RI = 2.42
    refraction();

}

function ethylAlcohol() {
    medium = "Ethyl Alcohol"
    document.getElementById('medium2').style.backgroundColor = "#EEEEEE"
    RI = 1.3614
    refraction();

}

function refraction() {
    let incidentAngle = parseFloat(document.getElementById('incidenceInput').value);

    if (isNaN(incidentAngle)) {
        alert("Please enter a valid incident angle.");
        return;
    }

    document.getElementById("incidentRay").style.transform = "rotate(" + (270 - incidentAngle) + "deg)";

    var refractedAngle = Math.asin(Math.sin(incidentAngle * Math.PI / 180) / RI) * 180 / Math.PI;

    document.getElementById('result').innerHTML = "Refracted Angle: " + refractedAngle.toFixed(2) + "deg <br> Refractive Index Medium 2: " + RI + "<br>Medium 2 : " + medium + " <br>Refractive Index Medium 1: 1 <br> Medium 1: Vacuum";
    document.getElementById("refractedRay").style.transform = "rotate(" + (-90 - refractedAngle) + "deg)";

}