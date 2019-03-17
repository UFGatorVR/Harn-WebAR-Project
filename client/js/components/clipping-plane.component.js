// AFRAME.registerComponent('clipping-plane', {
//     init: function () {
//         this.scene = document.querySelector('a-scene')
//         this.marker = document.querySelector('#light-marker')
//         var plane = this
//         this.scene.isRendererLoaded = false
//         this.scene.addEventListener('render-target-loaded', function () {
//             // sceneEl.renderer is now set.
//             this.isRendererLoaded = true
//             console.log(this.isRendererLoaded)
//             // default normal of a plane is 0,0,1. Apply mesh rotation to it.
//             let clipPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(
//                 new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0));
//             this.renderer.clippingPlanes = [clipPlane];
//         });

//     },
//     tick: function () {
//         var fresh_scene = document.querySelector('a-scene'), Empty = Object.freeze( [] );
//         if (this.marker.object3D.visible == true && this.scene.isRendererLoaded == true) {
//             // align clipping plane to scene.
//             fresh_scene.renderer.clippingPlanes[0].setFromNormalAndCoplanarPoint(
//                 new THREE.Vector3(0, 1, 0).applyQuaternion(fresh_scene.getWorldQuaternion()),
//                 fresh_scene.getWorldPosition()
//             );
//         }
//         else if (this.marker.object3D.visible == false && this.scene.isRendererLoaded == true){
//             // fresh_scene.renderer.clippingPlanes[0] = Empty
//         }
//     }
// })