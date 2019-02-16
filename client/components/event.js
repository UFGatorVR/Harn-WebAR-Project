AFRAME.registerComponent('markerhandler', {

  init: function () {
    const marker = document.querySelector("#marker");
    const vitali = document.querySelector("#vitali-img");
    const kusama = document.querySelector("#kusama-img");
    const robbin = document.querySelector("#robbin-img");
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    var SIZE = ['3', '2', '1'];
    var timesClicked = [0,0,0];
    
    vitali.addEventListener('click', function (ev) {
      timesClicked[0]++;   

      if (marker.object3D.visible == true && ev.detail.cursorEl && timesClicked[0] % 2 != 0) {
        vitali.emit('up');
      } 
      else if (marker.object3D.visible == true && ev.detail.cursorEl && timesClicked[0] % 2 == 0) {
          vitali.emit('down');

      }

    });
    kusama.addEventListener('click', function (ev) {
      timesClicked[1]++;   

      if (marker.object3D.visible == true && ev.detail.cursorEl && timesClicked[1] % 2 != 0) {
        kusama.emit('up');
      } 
      else if (marker.object3D.visible == true && ev.detail.cursorEl && timesClicked[1] % 2 == 0) {
          kusama.emit('down');

      }

    });
    robbin.addEventListener('click', function (ev) {
      timesClicked[2]++;   

      if (marker.object3D.visible == true && ev.detail.cursorEl && timesClicked[2] % 2 != 0) {
        robbin.emit('up');
      } 
      else if (marker.object3D.visible == true && ev.detail.cursorEl && timesClicked[2] % 2 == 0) {
          robbin.emit('down');

      }

    });


  }
});

