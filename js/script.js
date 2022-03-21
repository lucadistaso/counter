// counter box
let counterBoxDiv = document.createElement('div');
let counterBoxId = document.createAttribute('id');
counterBoxId.value = 'counter-box';
counterBoxDiv.setAttributeNode(counterBoxId);
document.body.appendChild(counterBoxDiv);

// value
let valueDiv = document.createElement('div');
let valueId = document.createAttribute('id');
valueId.value = 'value';
valueDiv.setAttributeNode(valueId);
counterBoxDiv.appendChild(valueDiv);
valueDiv.innerHTML = 0;

// buttons
let pushButtonDiv = document.createElement('div');
let pushButtonId = document.createAttribute('id');
pushButtonId.value = 'pushButton';
pushButtonDiv.setAttributeNode(pushButtonId);
counterBoxDiv.appendChild(pushButtonDiv);


// minus
let minusDiv = document.createElement('div');
let minusId = document.createAttribute('id');
minusId.value = 'minus';
minusDiv.setAttributeNode(minusId);
pushButtonDiv.appendChild(minusDiv);
minusDiv.innerHTML = '-';

//reset
let resetDiv = document.createElement('div');
let resetId = document.createAttribute('id');
resetId.value = 'reset';
resetDiv.setAttributeNode(resetId);
pushButtonDiv.appendChild(resetDiv);

//image
let images = document.createElement("img");
let imagesId = document.createAttribute("id");
imagesId.value = 'resetImg';
images.src = "images/reset.svg";
resetDiv.appendChild(images);

//  plus
let plusDiv = document.createElement('div');
let plusId = document.createAttribute('id');
plusId.value = 'plus';
plusDiv.setAttributeNode(plusId);
pushButtonDiv.appendChild(plusDiv);
plusDiv.innerHTML = '+';


// Functions
let increase = function() {  valueDiv.innerHTML++;  }
plusDiv.addEventListener('click', increase);

let decrease = function() {
      if(valueDiv.innerHTML != 0){
          valueDiv.innerHTML--;}}
minusDiv.addEventListener('click', decrease);

let reset = function() {valueDiv.innerHTML = 0;}
resetDiv.addEventListener('click', reset);
