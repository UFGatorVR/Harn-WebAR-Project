angular.module('harnApp').controller('ArController', function ($scope) {
    const center_button = document.querySelector("#center");
    const light_marker = document.querySelector('#light-marker');
    const kusama_marker = document.querySelector('#kusama-marker');
    const joyce_marker = document.querySelector('#joyce-marker');

    const light_content = document.querySelector('#light-marker');
    const kusama_content = document.querySelector('#kusama-content');
    const joyce_content = document.querySelector('#joyce-content');


    center_button.addEventListener('click',function (){ 
    
        if (light_marker.object3D.visible == true) {
            console.log('light')
        } 
        else if (kusama_marker.object3D.visible == true) {
            console.log('kusama')

        }
        else if(joyce_marker.object3D.visible == true) {
            console.log('joyce')
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