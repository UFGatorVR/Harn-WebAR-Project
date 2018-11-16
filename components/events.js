AFRAME.registerComponent('markerhandler', {



init: function() {
  const marker = document.querySelector("#animated-marker");
  const object = document.querySelector("#animated-model");
  var lastIndex = -1;
  var COLORS = ['red', 'green', 'blue'];
  marker.addEventListener('click', function(evt){
    if (marker.object3D.visible == true && evt.detail.cursorE1){

        lastIndex = (lastIndex +1) % COLORS.length;
        box.setAttribute('color', COLORS[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);


  });
}
});
