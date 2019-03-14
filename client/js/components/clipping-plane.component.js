AFRAME.registerComponent('clipping-plane', {
    init: function () {
        var scene = document.querySelector('a-scene')
        this.marker = document.querySelector('#light-marker')
        let plane = this
        scene.addEventListener('render-target-loaded', function () {
            // sceneEl.renderer is now set.
            renderer = scene.renderer

            // default normal of a plane is 0,0,1. Apply mesh rotation to it.
            let clipPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
                new THREE.Vector3(0, 1, 0), plane.el.object3D.position);
            renderer.clippingPlanes = [clipPlane];
        });

    },
    tick: function () {
        if (this.marker.object3D.visible == true) {
            // align clipping plane to scene.
            this.renderer.clippingPlanes[0].setFromNormalAndCoplanarPoint(
                new THREE.Vector3(0, 1, 0).applyQuaternion(sceneGroup.getWorldQuaternion()),
                sceneGroup.getWorldPosition()
            );
        }
        else {

        }
    }
})