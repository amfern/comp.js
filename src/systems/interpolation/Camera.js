'use strict';

// 3D position system
// -----------------------------------------
new COMP.System.Interpolate({
    name: 'Camera',

    dependencies: ['Interpolate', 'InterpolateHierarchy'],

    requiredDependencies: ['TransformWorldInterpolation', 'RendererCamera'],

    component: function () { },

    process: function (entities) {
        var entity = _.first(entities);

        if (!entity) {
            return;
        }

        var RendererCamera = entity.RendererCamera;

        RendererCamera.matrix = new THREE.Matrix4();
        RendererCamera.applyMatrix(entity.TransformWorldInterpolation.matrix);
    }
});