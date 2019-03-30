AFRAME.registerComponent('clipping-plane', {
    init: function () {
        // this.el.sceneEl.renderer.localClippingEnabled = true;
        let clipPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
            new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0));
        // var box = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 1, 1),
        //     new THREE.MeshStandardMaterial({
        //         color: 0xffffff,
        //         clippingPlanes: [clipPlane]
        //     })
        // );
        // document.querySelector('#box').setObject3D('mesh', box)
        this.el.sceneEl.renderer.clippingPlanes = [clipPlane];
        this.position = new THREE.Vector3();
        this.rotation = new THREE.Euler();
    },
    update: function () {
		// align clipping plane to scene.
		this.el.sceneEl.renderer.clippingPlanes[0].setFromNormalAndCoplanarPoint(
			new THREE.Vector3(0,1,0).applyQuaternion(document.querySelector('#camera').object3D.getWorldQuaternion(this.rotation)),
			document.querySelector('#camera').object3D.getWorldPosition(this.position)
		);
    }
})