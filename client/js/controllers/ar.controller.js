angular.module('harnApp').controller('ArController', function ($scope) {

    console.log("DEBUG 1")

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