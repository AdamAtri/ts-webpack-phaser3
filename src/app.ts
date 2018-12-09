import Phaser from 'phaser';

import logo from './assets/logo.png';

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create
  }
});

function preload ()
{
  const scene:Phaser.Scene = game.scene.getAt(0) as Phaser.Scene;
  scene.load.image('logo', logo);

}

function create ()
{
  const scene:Phaser.Scene = game.scene.getAt(0) as Phaser.Scene;
  scene.add.image(400, 300, 'logo');

    scene.tweens.add({
        targets: 'logo',
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}


// import Phaser from 'phaser'; // eslint-disable-line
// import Sky from './assets/sky.png';
// import Ground from './assets/platform.png';
// import Star from './assets/star.png';
// import Bomb from './assets/bomb.png';
// import Dude from './assets/dude.png';


// const game = new Phaser.Game({
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   physics: {
//     default: 'arcade',
//     arcade: {
//       gravity: {y: 100},
//       debug: false
//     }
//   },
//   scene: {
//     preload: preload, 
//     create: create, 
//     update: update
//   }
// });

// let gameOver:boolean = false;
// let cursors:Phaser.Input.Keyboard.CursorKeys;
// let player:Phaser.Physics.Arcade.Sprite;
// let _score:number = 0;
// let _scoreText:Phaser.GameObjects.Text;
// function getScoreText():string {return `Score: ${_score}`;}
// function incrementScore():number { return _score += 25; }

// function preload() {
//   const scene:Phaser.Scene = game.scene.getAt(0) as Phaser.Scene;
//   scene.load.image('sky', Sky);
//   scene.load.image('ground', Ground);
//   scene.load.image('star', Star);
//   scene.load.image('bomb', Bomb);
//   scene.load.spritesheet('dude', Dude,
//     {frameWidth:32, frameHeight: 48});
//   cursors = scene.input.keyboard.createCursorKeys()
// }

// function create() {
//   const scene:Phaser.Scene = game.scene.getAt(0) as Phaser.Scene;
//   scene.add.image(400, 300, 'sky');

//   const platforms = scene.physics.add.staticGroup();
//   platforms.create(400, 568, 'ground').setScale(2).refreshBody();
//   platforms.create(600, 400, 'ground');
//   platforms.create(50, 250, 'ground');
//   platforms.create(750, 220, 'ground');

//   const stars = scene.physics.add.group({
//     key: 'star',
//     repeat: 11,
//     setXY: {x: 12, y: 0, stepX: 70 }
//   });
//   stars.children.iterate(child => { 
//     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
//   }, null);

//   const bombs = scene.physics.add.group({
//     key: 'bomb',
//     repeat: 6,
//     setXY: {x: 100, y: 0, stepX: 140}
//   });

//   player = makePlayer(scene.physics);
//   createAnimations(scene);

//   // set collision detection between player and platforms
//   scene.physics.add.collider(player, platforms);
//   scene.physics.add.collider(stars, platforms);
//   scene.physics.add.collider(bombs, platforms);

//   // check for overlap between stars and the player
//   scene.physics.add.overlap(player, stars, collectStar, undefined, scene);
//   scene.physics.add.overlap(player, bombs, hitBomb, undefined, scene);

//   _scoreText = (window as any)['score'] = scene.add.text(16, 16,  getScoreText(), 
//     {fontSize: '32px', fill: '#333'});
// }

// function makePlayer(physics:Phaser.Physics.Arcade.ArcadePhysics): Phaser.Physics.Arcade.Sprite {
//   const player:Phaser.Physics.Arcade.Sprite = physics.add.sprite(100, 450, 'dude');
//   const body = (player.body as Phaser.Physics.Arcade.Body);
//   body.setGravityY(300);
//   body.setBounceY(0.2);
//   body.setCollideWorldBounds(true);
//   return player;
// }
// function collectStar(ePlayer:Phaser.GameObjects.GameObject, eStar:Phaser.GameObjects.GameObject):void {
//   eStar.destroy();
//   incrementScore();
//   _scoreText.setText(getScoreText());
// }
// function hitBomb(ePlayer:Phaser.GameObjects.GameObject, bomb:Phaser.GameObjects.GameObject):void {
//   const scene:Phaser.Scene = game.scene.getAt(0) as Phaser.Scene;
//   scene.physics.pause();
//   const p = (ePlayer as Phaser.GameObjects.Sprite);
//   p.setTint(0xff0000);
//   p.anims.play('turn');
//   gameOver = true; 
// }

// function createAnimations(scene:Phaser.Scene) {
//   scene.anims.create({
//     key: 'left',
//     frames: scene.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
//     frameRate: 10,
//     repeat: -1
//   });
//   scene.anims.create({
//     key: 'right', 
//     frames: scene.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
//     frameRate: 10,
//     repeat: -1
//   });
//   scene.anims.create({
//     key: 'turn',
//     frames: [{key: 'dude', frame: 4}],
//     frameRate: 20
//   });
// }
// function checkKeyboard() {
//   if (gameOver) return;
//   (window as any).cursors = cursors;
//   if (cursors.left && cursors.left.isDown) {
//     player.setVelocityX(-160);
//     player.anims.play('left', true);
//   }
//   else if (cursors.right && cursors.right.isDown) {
//     player.setVelocityX(160);
//     player.anims.play('right', true);
//   }
//   else {
//     player.setVelocityX(0);
//     player.anims.play('turn');
//   }
//   if (cursors.up && cursors.up.isDown && player.body.touching.down) {
//     player.setVelocityY(-200);
//   }
// }
// function update() {
//   checkKeyboard();
// }


