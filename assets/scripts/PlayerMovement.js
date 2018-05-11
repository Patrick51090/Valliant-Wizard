
class PlayerMovement {
    constructor(scene) {
        this.scene = scene;
    }

    update() {
        this.scene.player.body.setVelocity(0);

        if (this.scene.controls.up.isDown || this.scene.controls.down.isDown || this.scene.controls.left.isDown || this.scene.controls.right.isDown) {
            if (this.scene.player.config.footstep_time >= this.scene.player.config.footstep_delay) {
                this.scene.player.config.footstep = true;
            }else {
                this.scene.player.config.footstep_time += 1;
            }
        }


        if (this.scene.controls.up.isDown && this.scene.controls.down.isUp && this.scene.controls.left.isDown && this.scene.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.left', true);
            this.scene.player.body.y -= 2;
            this.scene.player.body.x -= 2;
        }

        if (this.scene.controls.up.isDown && this.scene.controls.down.isUp && this.scene.controls.left.isUp && this.scene.controls.right.isDown) {
            this.scene.player.anims.play('player.walk.right', true);
            this.scene.player.body.y -= 2;
            this.scene.player.body.x += 2;
        }

        if (this.scene.controls.up.isUp && this.scene.controls.down.isDown && this.scene.controls.left.isDown && this.scene.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.left', true);
            this.scene.player.body.x -= 2;
            this.scene.player.body.y += 2;
        }

        if (this.scene.controls.up.isUp && this.scene.controls.down.isDown && this.scene.controls.left.isUp && this.scene.controls.right.isDown) {
            this.scene.player.anims.play('player.walk.right', true);
            this.scene.player.body.x += 2;
            this.scene.player.body.y += 2;
        }

        if (this.scene.controls.up.isDown && this.scene.controls.down.isUp && this.scene.controls.left.isUp && this.scene.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.up', true);
            this.scene.player.body.y -= 2;
        }

        if (this.scene.controls.up.isUp && this.scene.controls.down.isDown && this.scene.controls.left.isUp && this.scene.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.down', true);
            this.scene.player.body.y += 2;
        }

        if (this.scene.controls.up.isUp && this.scene.controls.down.isUp && this.scene.controls.left.isDown && this.scene.controls.right.isUp) {
            this.scene.player.anims.play('player.walk.left', true);
            this.scene.player.body.x -= 2;
        }

        if (this.scene.controls.up.isUp && this.scene.controls.down.isUp && this.scene.controls.left.isUp && this.scene.controls.right.isDown) {
            this.scene.player.anims.play('player.walk.right', true);
            this.scene.player.body.x += 2;
        }



        if (this.scene.controls.up.isUp && this.scene.controls.down.isUp && this.scene.controls.left.isUp && this.scene.controls.right.isUp) {
            this.scene.player.anims.stop();
        }
    }

}
