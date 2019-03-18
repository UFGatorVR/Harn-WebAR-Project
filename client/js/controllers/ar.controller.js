angular.module('harnApp').controller('ArController', function ($scope) {
    const center_button = document.querySelector("#center");
    const light_marker = document.querySelector('#light-marker');
    const kusama_marker = document.querySelector('#kusama-marker');
    const joyce_marker = document.querySelector('#joyce-marker');

    const light_content = document.querySelector('#light-content');
    const kusama_content = document.querySelector('#kusama-content');
    const joyce_content = document.querySelector('#joyce-content');

    const light_text = document.querySelector('#light-text');
    const kusama_text = document.querySelector('#kusama-text');
    const joyce_text = document.querySelector('#joyce-text');

    center_button.addEventListener('click',function (){ 
    
        if (light_marker.object3D.visible == true) {
            console.log('light')
            light_text.emit('light-fadeout')
            light_content.emit('light-fadein')
        } 
        else if (kusama_marker.object3D.visible == true) {
            console.log('kusama')
            kusama_text.emit('kusama-fadeout')
            kusama_content.emit('kusama-fadein')
        }
        else if(joyce_marker.object3D.visible == true) {
            console.log('joyce')
            joyce_text.emit('joyce-fadeout')
            joyce_content.emit('joyce-fadein')
        }
    });

    $scope.hideAR = function() {
        var c = document.body.childNodes;
        c.forEach((node)=>{
            console.log(node.nodeName)
            if (node.nodeName == "VIDEO") {
                console.log('video')
                node.remove()
            }
        })
    }
})