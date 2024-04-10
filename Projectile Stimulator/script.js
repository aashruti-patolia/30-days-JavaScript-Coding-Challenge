const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const g = 9.81; // acceleration due to gravity (m/s^2)
const dt = 0.01; // time step (s)


let x = 0;
let y = canvas.height;
let vx = velocity * Math.cos(angle);
let vy = -velocity * Math.sin(angle);

let velocityInput = document.getElementById('velocity');
let angleInput = document.getElementById('angle');

function calculateDistance(velocity, angle) {
    const distance = (velocity * velocity * Math.sin(2 * angle)) / g;
    var counter = 0.0;
    if (!isNaN(distance)) {
        var interval = setInterval(function () {
            if (counter <= distance) {
                document.getElementById("counter").innerText = counter + " m (approximately)";
                counter++;
            } else {
                clearInterval(interval);
            }
        }, 1);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}


function drawProjectile(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFE4D6';
    ctx.fill();
}

function updatePosition() {
    const ax = 0; // no acceleration in x direction
    const ay = g; // acceleration in y direction is due to gravity

    // Update velocity
    vx += ax * dt;
    vy += ay * dt;

    // Update position
    x += vx * dt;
    y += vy * dt;

    // Draw projectile at new position
    drawProjectile(x, y);

    // Check if projectile hits the ground
    if (y >= canvas.height) {
        clearInterval(intervalId);
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startSimulation() {
    clearCanvas();
    let angle = parseFloat(angleInput.value) * Math.PI / 180; // convert angle to radians
    let velocity = parseFloat(velocityInput.value);

    x = 0;
    y = canvas.height;
    vx = velocity * Math.cos(angle);
    vy = -velocity * Math.sin(angle);
    intervalId = setInterval(updatePosition, dt * 6000 - velocity);

    calculateDistance(velocity, angle);
}

let intervalId;


