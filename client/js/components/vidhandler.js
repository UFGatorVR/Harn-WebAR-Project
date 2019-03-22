AFRAME.registerComponent('vidhandler', { 
    // ... 
    init: function () { 
        this.video = document.querySelector("#Kusama");
        this.playing = true;
        this.video.play();
        document.querySelector("#Kusama").play()
    }, 

}); 