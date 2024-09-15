const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

// Set initial canvas size
setCanvasSize();

// Handle resizing
window.addEventListener('resize', setCanvasSize);

// Set initial styles
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
	if (!isDrawing) return;

	// Change stroke color based on hue
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	// Start drawing
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	// Update last X and Y
	[lastX, lastY] = [e.offsetX, e.offsetY];

	// Update hue, resetting if necessary
	hue = (hue + 1) % 360;

	// Update lineWidth and direction
	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	ctx.lineWidth += direction ? 1 : -1;
}

// Event handlers for mouse events
function startDrawing(e) {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
	isDrawing = false;
}

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
