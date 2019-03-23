AFRAME.registerComponent('vidhandler', { 
    // ... 
    init: function () { 
        this.video = document.querySelector("#kusama-video");
        this.playing = true;
        this.video.play();
        document.querySelector("#Kusama").play()
    }, 

}); 