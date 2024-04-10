function GravitationalForce() {
    let celestialBody1 = document.getElementById('celestialBody1').value;
    let celestialBody2 = document.getElementById('celestialBody2').value;

    if (celestialBody1 !== celestialBody2) {



        let result = document.getElementById('result');
        // mass 
        let mass1 = Mass(celestialBody1);
        let mass2 = Mass(celestialBody2);

        document.getElementById('body1').innerHTML = `<img src='media/${celestialBody1}.png'><br><div id="Mass1">${scientificNotation(mass1)} kg</div>`
        document.getElementById('body2').innerHTML = `<img src='media/${celestialBody2}.png'><br><div id="Mass2">${scientificNotation(mass2)} kg</div>`

        // distance
        let d = distance(celestialBody1, celestialBody2) * 1.496e+11;
        document.getElementById('Dline').innerHTML = `<i class="fa-solid fa-angle-left fa-xl" style="color: #58e63f;"></i><center><h5>${d / 1.496e+11} au</h5></center><i
        class="fa-solid fa-angle-right fa-xl" style="color: #58e63f;"></i>`

        // displaying mass
        let exponent = Math.floor(Math.log10(Math.abs(d)));
        let mantissa = d / Math.pow(10, exponent);
        console.log(mantissa + ' * 10^' + exponent + " of " + celestialBody1 + " " + celestialBody2 + parseInt(mantissa * 100))

        document.getElementById('Dline').style.width = `${parseInt(distance(celestialBody1, celestialBody2) * 50)}px`

        const G = 6.6743e-11;

        let Force = scientificNotation(G * mass1 * mass2 / (d * d));
        Mass1Box = `${scientificNotation(mass1)} kg`;
        Mass2Box = `${scientificNotation(mass2)} kg`;

        result.innerHTML = `Gravitational Force: <br> <h1>${Force} kg m/s<sup>2</sup></h1>`
    }

    else {
        alert("Select Different Celestial Bodies")
    }
}

function scientificNotation(number) {
    let exponent = Math.floor(Math.log10(Math.abs(number)));
    let mantissas = number / Math.pow(10, exponent);

    return mantissas.toFixed(5) + ' * 10 <sup>' + exponent + '</sup>';
}





function Mass(celestialBody) {
    var earthMass = 5.972e24;

    switch (celestialBody) {
        case "Sun":
            return 33000 * earthMass;
            break;

        case "Moon":
            return 0.0123 * earthMass;
            break;

        case "Mercury":
            return 0.055 * earthMass;
            break;

        case "Venus":
            return 0.815 * earthMass;
            break;

        case "Earth":
            return earthMass;
            break;

        case "Mars":
            return 0.107 * earthMass;
            break;

        case "Jupiter":
            return 317.8 * earthMass;
            break;

        case "Saturn":
            return 95.2 * earthMass;
            break;

        case "Uranus":
            return 14.5 * earthMass;
            break;

        case "Neptune":
            return 17.1 * earthMass;
            break;
        default:

            return 0;
            break;
    }
}

function distance(celestialBody1, celestialBody2) {

    let celestialBody = '';

    if (celestialBody1 == 'Sun' || celestialBody2 == 'Sun') {
        if (celestialBody1 == 'Sun') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {
            case "Moon":
                return 1 - 0.00257;
                break;

            case "Mercury":
                return 0.39;
                break;

            case "Venus":
                return 0.72;
                break;

            case "Earth":
                return 1;
                break;

            case "Mars":
                return 1.52;
                break;

            case "Jupiter":
                return 5.20;
                break;

            case "Saturn":
                return 9.54;
                break;

            case "Uranus":
                return 19.22;
                break;

            case "Neptune":
                return 30.06;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Moon' || celestialBody2 == 'Moon') {
        if (celestialBody1 == 'Moon') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {

            case "Mercury":
                return 0.38;
                break;

            case "Venus":
                return 0.28;
                break;

            case "Earth":
                return 0.00257;
                break;

            case "Mars":
                return 0.52;
                break;

            case "Jupiter":
                return 3.84;
                break;

            case "Saturn":
                return 7.17;
                break;

            case "Uranus":
                return 14.62;
                break;

            case "Neptune":
                return 22.86;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Mercury' || celestialBody2 == 'Mercury') {
        if (celestialBody1 == 'Mercury') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {

            case "Venus":
                return 0.34;
                break;

            case "Earth":
                return 0.61;
                break;

            case "Mars":
                return 1.14;
                break;

            case "Jupiter":
                return 4.82;
                break;

            case "Saturn":
                return 9.14;
                break;

            case "Uranus":
                return 18.82;
                break;

            case "Neptune":
                return 29.70;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Venus' || celestialBody2 == 'Venus') {
        if (celestialBody1 == 'Venus') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {


            case "Earth":
                return 0.28;
                break;

            case "Mars":
                return 0.8;
                break;

            case "Jupiter":
                return 4.48;
                break;

            case "Saturn":
                return 8.80;
                break;

            case "Uranus":
                return 18.49;
                break;

            case "Neptune":
                return 29.37;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Earth' || celestialBody2 == 'Earth') {
        if (celestialBody1 == 'Earth') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {

            case "Mars":
                return 0.52;
                break;

            case "Jupiter":
                return 4.2;
                break;

            case "Saturn":
                return 8.52;
                break;

            case "Uranus":
                return 18.21;
                break;

            case "Neptune":
                return 29.09;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Mars' || celestialBody2 == 'Mars') {
        if (celestialBody1 == 'Mars') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {
            case "Jupiter":
                return 3.68;
                break;

            case "Saturn":
                return 7.99;
                break;

            case "Uranus":
                return 17.69;
                break;

            case "Neptune":
                return 28.56;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Jupiter' || celestialBody2 == 'Jupiter') {
        if (celestialBody1 == 'Jupiter') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {
            case "Saturn":
                return 4.32;
                break;

            case "Uranus":
                return 14.01;
                break;

            case "Neptune":
                return 24.89;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Saturn' || celestialBody2 == 'Saturn') {
        if (celestialBody1 == 'Saturn') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {

            case "Uranus":
                return 9.7;
                break;

            case "Neptune":
                return 20.57;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Saturn' || celestialBody2 == 'Saturn') {
        if (celestialBody1 == 'Saturn') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {

            case "Uranus":
                return 9.7;
                break;

            case "Neptune":
                return 20.57;
                break;

            default:
                return 0;
                break;
        }
    }

    else if (celestialBody1 == 'Uranus' || celestialBody2 == 'Uranus') {
        if (celestialBody1 == 'Saturn') {
            celestialBody = celestialBody2
        }
        else {
            celestialBody = celestialBody1
        }

        switch (celestialBody) {

            case "Neptune":
                return 10.88;
                break;

            default:
                return 0;
                break;
        }
    }
}