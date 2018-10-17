import ExpoPixi, { PIXI } from 'expo-pixi';

export default async context => {
  //http://pixijs.io/examples/#/basics/basic.js
  const app = ExpoPixi.application({
    context,
  });
  app.stop();
  //await ExpoPixi.spriteAsync(require('../../assets/pixi/bunny.png'));

  // Scale mode for all textures, will retain pixelation
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

  //const sprite = PIXI.Sprite.fromImage('../../assets/pixi/bunny.png');
   const sprite = await ExpoPixi.spriteAsync(require('../../assets/pixi/bunny.png'));

  // Set the initial position
  sprite.anchor.set(0.5);
  sprite.x = app.renderer.width / 2;
  sprite.y = app.renderer.height / 2;


sprite.interactive = true;
  sprite.on('tap', (event) => {
    //handle event
    console.log(event)
 });

  // Opt-in to interactivity
  //sprite.interactive = true;
  app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);
    app.stage.on('pointerdown', onClick);

    var dragging = false;

    function pointerMove(event) {
    console.log('click')
      if (dragging) {
        brush.position.copy(event.data.global);
        app.renderer.render(brush, renderTexture, false, null, false);
      }
    }

    function pointerDown(event) {
    console.log('click')
      dragging = true;
      pointerMove(event);
    }

    function pointerUp(event) {
    console.log('click')
      dragging = false;
    }
   
  app.stage.addChild(sprite);
  app.ticker.add(delta => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent tranformation
    sprite.rotation += 0.4 * delta;
  });

  function onClick() {
    console.log('click')
    sprite.scale.x *= 2.25;
    sprite.scale.y *= 2.25;
  } 
  app.start();
};
