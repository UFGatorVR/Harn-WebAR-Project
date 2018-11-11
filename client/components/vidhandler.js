AFRAME.registerComponent('vidhandler', { 
    // ... 
    init: function () { 
        this.playing = true;
        this.video = document.querySelector("#video-src");
        document.querySelector("#video-src").play()
            .catch(function(error){
                window.addEventListener('touchstart',function(){
                    document.querySelector("#video-src").play();
                });
            }).then(function(){
            });
    }, 
    tick:function(){ 
        // runs every tick, does nothing
        if(!document.querySelector('#marker').object3D.visible && this.playing) {
            this.video.pause();
            this.playing=false;
        }
        else if (document.querySelector('#marker').object3D.visible && !this.playing) {
            this.video.play();
            this.playing = true;
        }

    },

}); 