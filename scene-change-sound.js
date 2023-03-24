Hooks.once('init', () => {
    console.log('scene-change-sound | Initialized Scene Change Sound module');
  });
  
  Hooks.on('preUpdateScene', (scene, data, options, userId) => {
    if (!game.user.isGM) return;
    if (data.active === undefined) return;
  
    if (data.active) {
      AudioHelper.play({ src: './soundfiles/scenechange.m4a', volume: 0.8, autoplay: true, loop: false }, true);
    }
  });