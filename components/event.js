AFRAME.registerComponent('markerhandler', {

    init: function() {
        const marker = document.querySelector("#marker");
        const color = document.querySelector('#arColor');
        const scale = document.querySelector("#arScale");
        const morph = document.querySelector("#arMorph");
        const light = document.querySelector("#arLight");
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];
        var SIZE = ['3', '2', '1'];
        var TYPE = ['sphere', 'cone', 'box'];
        var OPAC = ['0.2', '0.7', '1']
          color.addEventListener('click', function(ev){
            if (marker.object3D.visible == true && ev.detail.cursorEl) {
              lastIndex = (lastIndex +1) % COLORS.length;

              color.setAttribute('material', 'color: '+COLORS[lastIndex]);
            }

          });

          scale.addEventListener('click', function(ev){
            if (marker.object3D.visible == true && ev.detail.cursorEl) {
              lastIndex = (lastIndex +1) % COLORS.length;

              scale.setAttribute('geometry', 'width: '+SIZE[lastIndex]);
              scale.setAttribute('geometry', 'height: '+SIZE[lastIndex]);
              scale.setAttribute('geometry', 'depth: '+SIZE[lastIndex]);

            }

          });
          morph.addEventListener('click', function(ev){
            if (marker.object3D.visible == true && ev.detail.cursorEl) {
              lastIndex = (lastIndex +1) % COLORS.length;

              morph.setAttribute('geometry', 'primitive: '+TYPE[lastIndex]);
            }

          });
          light.addEventListener('click', function(ev){
            if (marker.object3D.visible == true && ev.detail.cursorEl) {
              lastIndex = (lastIndex +1) % COLORS.length;

              light.setAttribute('material', 'opacity: '+OPAC[lastIndex]);
            }

          });


}});
