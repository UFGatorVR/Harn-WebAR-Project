const vitali = document.querySelector("#vitali-img");
const kusama = document.querySelector("#kusama-img");
const robbin = document.querySelector("#robbin-img");

const marker = document.querySelector("#marker");

const left_button = document.querySelector("#left");
const center_button = document.querySelector("#center");
const right_button = document.querySelector("#right");

var timesClicked = [0,0,0];

right_button.addEventListener('click', function (){
    timesClicked[0]++;
    if (marker.object3D.visible == true && timesClicked[0] % 2 != 0) {
      vitali.emit('up');
      console.log("Liam sucks booty left");
    } 
    else if (marker.object3D.visible == true  && timesClicked[0] % 2 == 0) {
      vitali.emit('down');
    }
});
center_button.addEventListener('click',function (){ 
    timesClicked[1]++;   

    if (marker.object3D.visible == true && timesClicked[1] % 2 != 0) {
      kusama.emit('up');
      console.log("Liam sucks booty center");

    } 
    else if (marker.object3D.visible == true && timesClicked[1] % 2 == 0) {
        kusama.emit('down');
    }
});
left_button.addEventListener('click',function (){ 
    timesClicked[2]++;   

    if (marker.object3D.visible == true && timesClicked[2] % 2 != 0) {
      robbin.emit('up');
      console.log("Liam sucks booty right");
    } 
    else if (marker.object3D.visible == true && timesClicked[2] % 2 == 0) {
        robbin.emit('down');
    }
});