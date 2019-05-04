/* global GMPixi, PIXI, Function */

var GMPixi = GMPixi || Object.defineProperty(window, 'GMPixi', {
    value: {}
}).GMPixi;


GMPixi.other = GMPixi.other || Object.defineProperty(GMPixi, 'other', {
    value: {}
}).other;


Object.defineProperty(GMPixi.other, 'Block', {
    value: function (o) {
        this.room = o.room;
        
        PIXI.Sprite.call(this);
        this.spikeSpineAnimation = new PIXI.spine.Spine(PIXI.loader.resources['assets/spine/spike/spike.json'].spineData);
        //array index reference
        this.m = o.m;
        this.n = o.n;
        
        this.w = 40;
        this.h = 40;
        
        this.level = o.level;
        
        Object.defineProperties(this, {
            /*
             * TYPES:
             * 0    -   none
             * -1    -   door entrance
             * 1     -   door exit
             * -2    -   spike downward
             * 2     -   spike upward
             * 3xy   -   terrain
             */
            _type: {
                writable: true,
                value: 0
            },
            type: {
                get: function() {
                    return this._type;
                },
                set: function(val) {
                    this._type = val;
                    var spr = GMPixi.sprite('empty');
                    var spike1 = GMPixi.sprite('spike0001');
                    var spike2 = GMPixi.sprite('spike0002');
                    switch(val) {
                        case 1:     spr = GMPixi.sprite('door0001'); break;
                        case -1:    spr = GMPixi.sprite('door0002'); break;
                        case 2:     spr = spike1; break;
                        case -2:    spr = spike2; break;
                        default: 
                            if(val >= 300 && val < 400) {
                                var num = Math.floor(val) % 300;
                                spr = GMPixi.Tile(Math.floor(num/10), num%10);
                                this._type = 3;
                            }
                            break;
                    }
                    this.setTexture(spr);
                    if (spr === spike1) {
                        this.spikeSpineAnimation.position.x = -2;
                        this.spikeSpineAnimation.scale.x = 1.1;
                        this.spikeSpineAnimation.state.setAnimation(0, "spike_01", true);
                        this.addChild(this.spikeSpineAnimation);
                    }
                    else if (spr === spike2) {
                        let rotatedAnimation = this.spikeSpineAnimation;
                        rotatedAnimation.rotation = 3.1;
                        rotatedAnimation.position.x = 43;
                        rotatedAnimation.scale.x = 1.1;
                        rotatedAnimation.position.y = 38;
                        rotatedAnimation.state.setAnimation(0, "spike_01", true);
                        this.addChild(rotatedAnimation);
                    }
                }
            }
        });
        
    }
}); 

Object.defineProperty(GMPixi.other.Block, 'prototype', {
    value: Object.create(PIXI.Sprite.prototype)
});

Object.defineProperties(GMPixi.other.Block.prototype, {
    reset: {
        value: function reset() {
        }
    },
    update: {
        value: function update() {

        }
    }
});

