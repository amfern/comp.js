// Wraps THREE.js as graphic output
// -----------------------------------------
(function() {
  var camera, scene, renderer;
  var material, mesh, geometry;

  function init() {
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.autoClear = false;

    document.addEventListener("DOMContentLoaded", function(event) {
      document.body.appendChild( renderer.domElement );
    });
  }

  init();

  new comp.IOSystem({
    name: '3DCubeRender',
    dependencies: [],

    component: function() {
      return {};
    }, 

    proccess: function(entities, interpolation) {
      renderer.clear();
      console.log(interpolation);

      _.each(entities, function(e) {
        var object3D = e['3DObject'];
        
        mesh.position    = object3D.position;
        mesh.rotation    = object3D.rotation;
        mesh.quaternion  = object3D.quaternion;
        mesh.scale       = object3D.scale;
        mesh.matrix      = object3D.matrix;
        mesh.matrixWorld = object3D.matrixWorld;
        mesh.matrix      = object3D.matrix;

        renderer.render( scene, camera );
      });
    }
  });
})();

