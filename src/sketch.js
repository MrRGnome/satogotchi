let bitcoinImg;
let satImg;
function preload() {
  bitcoinImg = loadImage("assets/menucandies/bitcoin.png");
  satImg = loadImage("assets/menucandies/satoshi.png");
}

const canvasWidth = 700;
const canvasHeight = 700;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	whiten(bitcoinImg);
	whiten(satImg);
	for (let i = 0; i < 50; i++) {
		addCandy();
		candies[i].y = random()*canvasHeight;
	}
}

const interval = 250; //milliseconds
let last = 0;

const candies = [];

function draw() {
	const frameTime = millis();
	
	background(248, 121, 191);
	
	if (last + interval < frameTime) {
		last = frameTime;
		addCandy();
	}
	
	for (let i = 0; i < candies.length; i++) {
		const candy = candies[i];
		push();
		tint(255, 255, 255, candy.alpha);
		image(candy.img, candy.x, candy.y, candy.width, candy.height);
		pop();
		candy.y += ((1/candy.width) * deltaTime)*5;
	}
}

function whiten(image) {
	image.loadPixels();
	for (let i = 0; i < image.pixels.length; i+=4) {
		if(image.pixels[i+3] > 0) {
			image.pixels[i] = 255;
			image.pixels[i+1] = 255;
			image.pixels[i+2] = 255;
		} 
	}
	image.updatePixels();
}

function addCandy() {
	const candyImg = random() > 0.5 ? bitcoinImg : satImg;
	const candyWidth = random()*75 + 25;
	const candyHeight = (candyImg.height/candyImg.width)*candyWidth;
	const candyOpacity = (1/candyWidth)*30*255;
	
	candies.push({
		x: random()*(canvasWidth - candyWidth),
		y: -candyHeight,
		width: candyWidth,
		height: candyHeight,
		alpha: candyOpacity,
		img: candyImg
	});
}