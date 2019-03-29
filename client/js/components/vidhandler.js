AFRAME.registerComponent('vidhandler', { 
        // ... 
        init: function () { 
            var video = document.querySelector("#kusama-video");
            window.addEventListener('kusama-fadein', function(){
                video.play()
            })
        }, 
    
    });