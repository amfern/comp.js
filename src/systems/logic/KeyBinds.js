'use strict';

// 3D position system
// -----------------------------------------
(function () {
    var component = {
            moveForward: {
                keys: ['k87'],
                handler: null
            },
            moveBack: {
                keys: ['k83'],
                handler: null
            },
            moveRight: {
                keys: ['k68'],
                handler: null
            },
            moveLeft: {
                keys: ['k65'],
                handler: null
            },
            moveUp: {
                keys: ['k32'],
                handler: null
            },
            moveDown: {
                keys: ['k67'],
                handler: null
            },

            pitchUp: {
                keys: ['mmovedUp'],
                handler: null
            },
            pitchDown: {
                keys: ['mmovedDown'],
                handler: null
            },
            yawRight: {
                keys: ['mmovedRight'],
                handler: null
            },
            yawLeft: {
                keys: ['mmovedLeft'],
                handler: null
            },
            rollRight: {
                keys: ['mwheelMovedRight'],
                handler: null
            },
            rollLeft: {
                keys: ['mwheelMovedLeft'],
                handler: null
            }
        };

    function updateKeyBind(HIDComboState, keyBind) {
        var fullKeyBind = {
            keys: keyBind.keys,
            trigger: 'down',
            isOnce: false,
            isOrdered: false,
            isExclusive: false,
            isSolitary: false
        };
        
        // find the keybind exacly
        var registeredKeyBind = _.findWhere(HIDComboState, fullKeyBind);

        var handler;

        // if keybind not registered then register
        if (!registeredKeyBind) {
            handler = HIDComboState.push(fullKeyBind);
        } else {
            handler = HIDComboState.indexOf(registeredKeyBind);
        }
        
        keyBind.handler = handler;
    }

    new COMP.System.Logic({
        name: 'KeyBinds',

        isStatic: true,

        dependencies: [],

        requiredDependencies: [],

        component: function () {
            return component;
        },

        process: function (staticEntity) {
            // calculate current contols hash
            var HIDComboState = staticEntity.HIDComboState,
                keyBinds = staticEntity.KeyBinds;

            _.each(keyBinds, function (keyBind) {
                updateKeyBind(HIDComboState, keyBind);
            });
        }
    });
})();