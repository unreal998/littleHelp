/* global GMPixi, PIXI, Function */

var GMPixi = GMPixi || Object.defineProperty(window, 'GMPixi', {
    value: {}
}).GMPixi;


GMPixi.other = GMPixi.other || Object.defineProperty(GMPixi, 'other', {
    value: {}
}).other;


Object.defineProperty(GMPixi.other, 'Background', {
    value: function Background(o) {
        this.room = o.room;
        this.backgroundSpineAnimation = new PIXI.spine.Spine(PIXI.loader.resources['assets/spine/background/background.json'].spineData);
        this.backgroundSpineAnimation.scale.x = 2;
        this.backgroundSpineAnimation.scale.y = 2;
        this.backgroundSpineAnimation.position.y = 120;
        PIXI.Sprite.call(this, GMPixi.sprite('bg')).addChild(this.backgroundSpineAnimation);
        this.backgroundSpineAnimation.state.setAnimation(0, "animation", true);
        this.backgroundSpineAnimation.state.timeScale = 0.7;
        
    }
}); 

Object.defineProperty(GMPixi.other.Background, 'prototype', {
    value: Object.create(PIXI.Sprite.prototype)
});

Object.defineProperties(GMPixi.other.Background.prototype, {
    reset: {
        value: function reset() {
            this.width = this.room.width;
            this.height = this.room.height;
        }
    },
    update: {
        value: function update() {
            
        }
    }
});



