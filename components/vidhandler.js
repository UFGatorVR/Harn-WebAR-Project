AFRAME.registerComponent('vidhandler',{

    init: function() {
        this.playing = true;
        console.log("Debug: Init");
        this.video = document.querySelector("#video-src");
        document.querySelector("#video-src").play()
            .catch(function(error){
                window.addEventListener('touchstart',function(){
                    document.querySelector("#video-src").play();
                });
            });
    },
    tick: function() {
        if(!document.querySelector('#marker').object3D.visible && this.playing) {
            this.video.pause();
            this.playing=false;
        }
        else if (document.querySelector('#marker').object3D.visible && !this.playing) {
            this.video.play();
            this.playing = true;
        }
    }


});