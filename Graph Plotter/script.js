function plotLine() {
  const canvas = document.getElementById('graphCanvas');
  const ctx = canvas.getContext('2d');

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Get input values
  const x1 = parseInt(document.getElementById('x1').value);
  const y1 = parseInt(document.getElementById('y1').value);
  const x2 = parseInt(document.getElementById('x2').value);
  const y2 = parseInt(document.getElementById('y2').value);

  // Calculate canvas center
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Draw axes
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, canvas.height);
  ctx.moveTo(0, centerY);
  ctx.lineTo(canvas.width, centerY);
  ctx.strokeStyle = '#2B2A4C';
  ctx.stroke();

  // Plot line
  ctx.beginPath();
  ctx.moveTo(centerX + x1, centerY - y1);
  ctx.lineTo(centerX + x2, centerY - y2);
  ctx.strokeStyle = '#A0153E';
  ctx.stroke();

  //find slope
  let m = (y2 - y1) / (x2 - x1);
  document.getElementById('slope').innerHTML = `Slope: <i>${m.toFixed(3)}</i>`;

  //Quadrant for x1 and y1
  if ((x1 > 0 && y1 > 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 Quadrant 1`;
  }

  else if ((x1 < 0 && y1 > 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 Quadrant 2`;
  }

  else if ((x1 < 0 && y1 < 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 Quadrant 3`;
  }

  else if ((x1 > 0 && y1 < 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 Quadrant 4`;
  }

  else if ((x1 == 0 && y1 == 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 Origin`;
  }

  else if ((x1 == 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 Y-axis`;
  }
  else if ((y1 == 0)) {
    document.getElementById('x1y1').innerHTML = `(${x1},${y1}) &#x2192 X-axis`;
  }

  console.log('hello')

  //Quadrant for x2 and y2

  if (x2 > 0 && y2 > 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 Quadrant 1`;
  }

  else if (x2 < 0 && y2 > 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 Quadrant 2`;
  }

  else if (x2 < 0 && y2 < 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 Quadrant 3`;
  }

  else if (x2 > 0 && y2 < 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 Quadrant 4`;
  }

  else if (x2 == 0 && y2 == 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 Origin`;
  }

  else if (x2 == 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 Y-axis`;
  }

  else if (y2 == 0) {
    document.getElementById('x2y2').innerHTML = `(${x2},${y2}) &#x2192 X-axis`
  }
}