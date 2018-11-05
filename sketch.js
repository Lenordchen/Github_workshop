var gene; 
var res; 
var wave;
var playing = false;
var species;
var input, asking; 


function setup() {
  createCanvas(400, 400);
  var button = select('#submit');
  button.mousePressed(musicPlay);
  
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.amp(0);
  wave.start();   
}

function musicPlay() {
  //The method is asynchronous, so the json will be loaded in the call back function. 
  loadJSON("gene.json", gotData); 
  
  if (!playing) {
    playing = true; 
  } else {
    palying = false;
  }
}

function gotData(data) {
  // console.log(`gotData: ${data}`);
  console.log(data);
  gene = data[document.getElementById("input").value].genome
  console.log(" new gene " + gene)

  // console.log('gene');
  //indexToPlaynow replaces the "for loop" function below: 
  // for (i = 0; i < gene.genome.length; i++) {
  //   res = gene.genome.charAt(i);
  //   console.log(res);
  //   playNext(i);
  // }
  if (playing) {
    wave.start();
    playNext();
  } else {
    wave.stop();
  } 
  playNext();
}

function draw() {
 
  //toggle();
  background(220);
}

var indexToPlayNow = 0;


function playNext() {
  //console.log(indexToPlayNow);

  // console.log(gene.genome)
  res = gene.charAt(indexToPlayNow % gene.length);
  
  if (res == "C") {
    wave.freq(261.63);
    wave.amp(0.5, 0.3);
  } else if (res == "A") {
    wave.freq(440);
    wave.amp(0.5, 0.3);
  } else if (res == "T") {
    wave.freq(293.66);
    wave.amp(0.5, 0.3);
  } else if (res == "G") {
    wave.freq(392)
    wave.amp(0.5, 0.3);
  }
  indexToPlayNow++;
  setTimeout(playNext, 200)
}
