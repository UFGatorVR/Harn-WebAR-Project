AFRAME.registerComponent('clipping-plane', {
    init: function () {

        this.el.sceneEl.renderer.sortObjects = false;

        //   var localPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
        //         new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,0) );
        // Geometry
        var material = new THREE.MeshBasicMaterial({
            colorWrite: false // only write to z-buf
        });

        var geometry = new THREE.PlaneGeometry(100, 100);
        var plane = new THREE.Mesh(geometry, material);
        plane.renderOrder = 1;

        plane.rotation.x = -90;
        plane.position.z = 0.0001;

        this.el.setObject3D('mesh', plane)
    }
})