import { SCALE_FACTOR } from '../constants';

export const makePlayer = (k) => {
  return k.make([
    k.sprite('kriby'),
    k.area({ shape: new k.Rect(k.vec2(0, 1.5), 8, 5) }),
    k.anchor('center'),
    k.body({ jumpForce: 600 }),
    k.scale(SCALE_FACTOR),
    k.pos(),
    {
      isDead: false,
      speed: 600,
      inputControllers: [],
      setControls() {
        const jumpLogic = () => {
          k.play('jump');
          this.jump();
        };
        this.inputControllers.push(this.onKeyPress('space', () => jumpLogic()));
        this.inputControllers.push(this.onKeyPress(k.onClick(jumpLogic)));
        this.inputControllers.push(
          this.onGamepadButtonPress('south', () => jumpLogic())
        );
      },
      disableControlls() {
        this.inputControllers.forEach((keyController) => {
          keyController.cancel();
        });
      },
    },
  ]);
};
