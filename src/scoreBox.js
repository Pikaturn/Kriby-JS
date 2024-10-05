import { goToGame } from './utils';

export const makeScorebox = (k, pos, score) => {
  // Create the container for the scorebox
  const container = k.add([
    k.rect(600, 500),
    k.pos(pos),
    k.color(k.Color.fromHex('#d7f2f7')),
    k.area(),
    k.anchor('center'),
    k.outline(4, k.Color.fromHex('#14638e')),
    k.fixed(),
  ]);

  // Add the previous best score text (adjust position to be higher)
  container.add([
    k.text(`Previous best score: ${78}`), // Assuming best score is 78
    k.color(k.Color.fromHex('#14638e')),
    k.area(),
    k.pos(-240, 100), // Adjusted position (higher up)
  ]);

  // Add the current score text (adjust position to avoid overlap)
  container.add([
    k.text(`Current score: ${score}`),
    k.color(k.Color.fromHex('#14638e')),
    k.area(),
    k.pos(-240, 50), // Adjusted position (higher up)
  ]);

  // Create the "Play Again" button
  const restartBtn = container.add([
    k.rect(200, 50, { radius: 3 }),
    k.color(k.Color.fromHex('#14638e')),
    k.area(),
    k.anchor('center'),
    k.pos(0, 200), // Position the button appropriately below the text
  ]);

  // Add the button label
  restartBtn.add([
    k.text('Play Again', { size: 24 }),
    k.color(k.Color.fromHex('#d7f2f7')),
    k.anchor('center'),
  ]);

  // Properly assign the onClick event handler
  restartBtn.onClick(() => {
    k.destroyAll();
    goToGame(k);
  });

  // Assign key press handlers for restarting
  k.onKeyPress('space', () => goToGame(k)); // Call the function on space key press
  k.onGamepadButtonPress('south', () => goToGame(k)); // Call the function on gamepad button press

  return container;
};
