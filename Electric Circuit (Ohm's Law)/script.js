let bool = false;
let V, I = 0, R, resistivity;
let resistor = document.getElementById('resistor');
var bulb = document.querySelector('.bulb');
var box = document.querySelector('.circuit');


function circuitStatus() {
    var btn = document.querySelector('button')

    if (!bool) {
        btn.innerHTML = `<img src="images/switch-on.png">`;
        bulb.innerHTML = `<img src="images/bulb-on.png">`;
        box.classList.add('move');
        bool = true;
        calCurrent();
    }
    else {
        btn.innerHTML = `<img src="images/switch-off.png" >`;
        bulb.innerHTML = `<img src="images/bulb-off.png">`;
        box.classList.remove('move');
        bool = false;
        calCurrent();
    }
}

function calCurrent() {

    V = document.getElementById('volt').value;

    if (!bool) {
        I = 0;
    }
    else {
        I = V / R;
    }

    document.getElementById('current').innerHTML = `${I.toFixed(3)} Ampere`;
}

// resistor color change functions 


function graphite() {
    resistor.style.backgroundColor = "#434242";
    R = 0.0000138;
    document.getElementById('resistorValue').innerHTML = `${R} ohm`;
    calCurrent();

}

function gold() {
    resistor.style.backgroundColor = "#FFD23F";
    R = 2.44e-8;
    document.getElementById('resistorValue').innerHTML = `${R} ohm`;
    calCurrent();

}

function iron() {
    resistor.style.backgroundColor = "#d4d7d9";
    R = 9.71e-8;
    document.getElementById('resistorValue').innerHTML = `${R} ohm`;
    calCurrent();

}
function water() {
    resistor.style.backgroundColor = "#97E7E1";
    R = 180000;
    document.getElementById('resistorValue').innerHTML = `${R} ohm`;
    bulb.innerHTML = `<img src="images/bulb-off.png">`;
    box.classList.remove('move');
    calCurrent();
    bool = false

}



graphite();