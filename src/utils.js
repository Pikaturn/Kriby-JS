export const makeBackground = (k) => {
  k.add([k.rect(k.width(), k.height()), k.color(k.Color.fromHex('#d7f2f7'))]);
};

export const goToGame = (k) => {
  k.play('confirm');
  k.go('main');
};
