AFRAME.registerComponent('markerhandler', {

  init: function () {
    const marker = document.querySelector("#marker");
    const vitali = document.querySelector("#vitali-img");
    const kusama = document.querySelector("#kusama-img");
    const robbin = document.querySelector("#robbin-img");
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    var SIZE = ['3', '2', '1'];


    vitali.addEventListener('click', function (ev) {
      if (marker.object3D.visible == true && ev.detail.cursorEl) {
        lastIndex = (lastIndex + 1) % COLORS.length;

        vitali.setAttribute('geometry', 'width: ' + SIZE[lastIndex]);
        vitali.setAttribute('geometry', 'height: ' + SIZE[lastIndex]);
        vitali.setAttribute('geometry', 'depth: ' + SIZE[lastIndex]);

      }

    });
    kusama.addEventListener('click', function (ev) {
      if (marker.object3D.visible == true && ev.detail.cursorEl) {
        lastIndex = (lastIndex + 1) % COLORS.length;

        kusama.setAttribute('geometry', 'width: ' + SIZE[lastIndex]);
        kusama.setAttribute('geometry', 'height: ' + SIZE[lastIndex]);
        kusama.setAttribute('geometry', 'depth: ' + SIZE[lastIndex]);
      }

    });
    robbin.addEventListener('click', function (ev) {
      if (marker.object3D.visible == true && ev.detail.cursorEl) {
        lastIndex = (lastIndex + 1) % COLORS.length;

        robbin.setAttribute('geometry', 'width: ' + SIZE[lastIndex]);
        robbin.setAttribute('geometry', 'height: ' + SIZE[lastIndex]);
        robbin.setAttribute('geometry', 'depth: ' + SIZE[lastIndex]);
      }

    });


  }
});

