// 3D position system
// -----------------------------------------
new COMP.System.Logic({
  name: '3DObject',
  
  dependencies: ['3DObjectBefore'],

  component: function() { 
    return new THREE.Object3D();
  },

  proccess: function(entities) {
    _.each(entities, function(e) {
      e['3DObjectBefore'] = e['3DObject'].clone();
    });

    this.yield();
  }
});
