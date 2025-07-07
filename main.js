var contrast = 1;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const size = canvas.width;
var tickLength = 1/32;

var antennaActive = true;
var amp = 10
let mode = "antenna"; // or "wall"
let isDrawing = false;
let freq = 1;
let phase = 0;
var selector = "freq"; //or "phase"

var dataLength = 1000
var dps = []; // dataPoints
var chart = new CanvasJS.Chart("chartContainer", {
	title :{
		text: "Dynamic Data"
	},
	data: [{
		type: "line",
		dataPoints: dps
	}]
});

var updateChart = function (value) {

    xVal = t;
    yVal = value;

	dps.push({
			x: xVal,
			y: yVal
	});

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart.render();
};

// Simulation grids
var u = [], u_prev = [], u_next = [], antenna = [], wall = [], sensor = [];
var c = 0.5, damping = 0.99;

for (let y = 0; y < size; y++) {
  u[y] = [], u_prev[y] = [], u_next[y] = [], antenna[y] = [], wall[y] = [], sensor[y] = [];
  for (let x = 0; x < size; x++) {
    u[y][x] = 0;
    u_prev[y][x] = 0;
    u_next[y][x] = 0;
    antenna[y][x] = [0, freq, phase]
    wall[y][x] = 0;
  }
}

// Handle drawing
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  drawAt(e);
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) drawAt(e);
});
canvas.addEventListener("mouseup", () => isDrawing = false);
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === 'w') mode = "wall";
  if (e.key.toLowerCase() === 'a') mode = "antenna";
  if (e.key.toLowerCase() === 's') mode = "sensor";
  if (e.key.toLowerCase() === 'x') mode = "remove";
  document.getElementById("mode").innerText = mode;
  if (mode === "antenna")document.getElementById("mode").innerText += ` f = ${freq} | phase = ${phase}`
});
canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    console.log(-e.deltaY/50)
    if(mode === "antenna"){
        if(selector==="freq")freq -= e.deltaY/50
        if(selector==="phase")phase -= e.deltaY/500
        document.getElementById("mode").innerText = `antenna freq = ${freq} | phase = ${phase}`
    }
});


function drawAt(e) {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);

        if (mode === "antenna") {
            antenna[y][x][0] = 1;
            antenna[y][x][1] = freq;
            antenna[y][x][2] = phase
        }
        if (mode === "sensor") sensor[y][x] = 1;

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const xx = x + dx, yy = y + dy;
      if (xx >= 0 && xx < size && yy >= 0 && yy < size) {
        if (mode === "wall") wall[yy][xx] = 1;
        if (mode === "remove"){
            wall[yy][xx] = 0;
            antenna[yy][xx][0] = 0;
            sensor[yy][xx] = 0;            
        }
      }
    }
  }

}

// Simulation step
let t = 0;
function step() {
  for (let y = 1; y < size - 1; y++) {
    for (let x = 1; x < size - 1; x++) {
      if (wall[y][x]) {
        u_next[y][x] = 0;
        continue;
      }
      if (sensor[y][x]){
        document.getElementById("sensorval").innerText = u_prev[y][x];
        updateChart(u_prev[y][x]);
      }

      const laplacian = (
        u[y - 1][x] + u[y + 1][x] +
        u[y][x - 1] + u[y][x + 1] -
        4 * u[y][x]
      );

      u_next[y][x] =
        2 * u[y][x] - u_prev[y][x] +
        c * c * laplacian;

      u_next[y][x] *= damping;

      if (antenna[y][x][0] && antennaActive) {
        u_next[y][x] += Math.sin(t * 0.2 * antenna[y][x][1] + antenna[y][x][2]) * amp;
      }
    }
  }


  [u_prev, u, u_next] = [u, u_next, u_prev];

    //placePhasedArray(200, 398, 100, 1, 3, (t/50)%100 - 50); // x=128, y=200, 21 antennas, spacing=3 px, freq=1, 30° beam

  t++;
}

// Render heatmap
function render() {
  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const val = u[y][x];
      let r = (Math.abs(val) + val)/2 * 255;
      let b = (Math.abs(val) - val)/2 * 255;
      let g = 0


        for (let dy = -1; dy <= 1; dy++)
            {
            for (let dx = -1; dx <= 1; dx++)
                {
                const xx = x + dx, yy = y + dy;
                if (xx >= 0 && xx < size && yy >= 0 && yy < size)
                    {
                    if (sensor[yy][xx])
                        {
                        r = 255
                        g = 165
                        b = 0
                        }
                    if(antenna[yy][xx][0])
                        {
                        r = 0
                        g = 255
                        b = 0
                        }
                    }
                }
            }
    if (wall[y][x]) r = b = 100;
  
    r *= contrast;
    g *= contrast;
    b *= contrast

    if(r>255) r = 255;
    if(g>255) g = 255;
    if(b>255) b = 255;

      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

// Main loop
function loop() {
  step();
  render();
}

let interval = setInterval(function(){
    loop();
}, 1)

function updateContrast(){
    contrast = document.getElementById("contrastSlider").value/10
}
function selectorclick(){
    selector = (selector==="freq")? "phase":"freq";
}
function antennatoggle(){
    antennaActive = !antennaActive;
}

function placePhasedArray(centerX, centerY, count, spacing, freq, steerAngleDeg) {
  const steerAngleRad = steerAngleDeg * Math.PI / 180;

  const lambda = 2 * Math.PI / (0.5 * freq); // wavelength from ω = 0.5 * freq
  const k = 2 * Math.PI / lambda;           // wave number

  const d = spacing;                        // element spacing (pixels)
  const phaseIncrement = -k * d * Math.sin(steerAngleRad); // progressive phase shift

  const startX = centerX - Math.floor(count / 2) * d;

  for (let i = 0; i < count; i++) {
    const x = Math.floor(startX + i * d);
    const y = centerY;

    if (x >= 0 && x < size && y >= 0 && y < size) {
      antenna[y][x][0] = 1;
      antenna[y][x][1] = freq;
      antenna[y][x][2] = i * phaseIncrement;  // steer by phase!
    }
  }

  //document.getElementById("mode").innerText = `Phased array: ${count} elements @ ${steerAngleDeg}°`;
}