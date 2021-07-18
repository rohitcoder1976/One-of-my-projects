var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a40d23b0-93f6-46f0-857c-e4ed01086366","aaa1df14-6e12-4787-8e1c-0ac02f630a72","ec815f40-7b4e-4e84-b294-6b208102c130","9aa8bfe5-9103-45de-924d-efede704e01a","141e5223-780b-4f33-8b66-52ab9e018a52","16f7815f-fbeb-4365-91e7-7d0ae73f60ae","0bc14605-e450-4805-ae0b-84564a01493d","176909a7-4b3b-4978-bace-190267cee4ce","30d81b8a-6c0c-46b0-85dc-d300aac0dd7e","ce8e94be-6c8a-4fb2-9101-7b31c239db7d","c8210144-65d3-4717-b62e-90121ecd9b77","e71fa7be-7ed5-4a4c-a5f9-1fc285a31a99"],"propsByKey":{"a40d23b0-93f6-46f0-857c-e4ed01086366":{"name":"brown_sweater_hands_in_pockets_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC/category_people/brown_sweater_hands_in_pockets.png","frameSize":{"x":123,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":123,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC/category_people/brown_sweater_hands_in_pockets.png"},"aaa1df14-6e12-4787-8e1c-0ac02f630a72":{"name":"alienBeige_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MZhVSafRZ0zTo.guoIWvBvcVN2sJteV_/category_fantasy/alienBeige_walk.png"},"ec815f40-7b4e-4e84-b294-6b208102c130":{"name":"alienBlue_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"dc4vui4_pmHrM.rep9aLGndzWtuC_cqp","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dc4vui4_pmHrM.rep9aLGndzWtuC_cqp/category_fantasy/alienBlue_walk.png"},"9aa8bfe5-9103-45de-924d-efede704e01a":{"name":"alienGreen_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj/category_fantasy/alienGreen_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KhGCMOy_GmSGbNF7hrN3JLopGwt9Bzuj/category_fantasy/alienGreen_walk.png"},"141e5223-780b-4f33-8b66-52ab9e018a52":{"name":"alienPink_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc/category_fantasy/alienPink_walk.png","frameSize":{"x":72,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":144,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Af7NpLfOWHlazTmrOp5NbuJO_oHxQPBc/category_fantasy/alienPink_walk.png"},"16f7815f-fbeb-4365-91e7-7d0ae73f60ae":{"name":"blue_shirt_hand_up2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs/category_people/blue_shirt_hand_up2.png","frameSize":{"x":175,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs/category_people/blue_shirt_hand_up2.png"},"0bc14605-e450-4805-ae0b-84564a01493d":{"name":"yellow_dress_one_hand_on_hip_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gSVujmcO00m7SohqfD0brOti5buGzgdI/category_people/yellow_dress_one_hand_on_hip.png","frameSize":{"x":117,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"gSVujmcO00m7SohqfD0brOti5buGzgdI","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gSVujmcO00m7SohqfD0brOti5buGzgdI/category_people/yellow_dress_one_hand_on_hip.png"},"176909a7-4b3b-4978-bace-190267cee4ce":{"name":"blue_hoodie_backpack_1","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"30d81b8a-6c0c-46b0-85dc-d300aac0dd7e":{"name":"blue_hoodie_hands_in_hoodie_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oHutRKHvMqtbkZzU3Q93li3zFkemFiPq/category_people/blue_hoodie_hands_in_hoodie.png","frameSize":{"x":137,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oHutRKHvMqtbkZzU3Q93li3zFkemFiPq","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":137,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oHutRKHvMqtbkZzU3Q93li3zFkemFiPq/category_people/blue_hoodie_hands_in_hoodie.png"},"ce8e94be-6c8a-4fb2-9101-7b31c239db7d":{"name":"blue_dress_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KUnlL6hGJRFxIL.OpIiREaXPfuGn6ufz/category_people/blue_dress.png","frameSize":{"x":132,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"KUnlL6hGJRFxIL.OpIiREaXPfuGn6ufz","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KUnlL6hGJRFxIL.OpIiREaXPfuGn6ufz/category_people/blue_dress.png"},"c8210144-65d3-4717-b62e-90121ecd9b77":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"e71fa7be-7ed5-4a4c-a5f9-1fc285a31a99":{"name":"texture_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.OqUx8AL2A1AczqKW0GhLkq127WNAu8C/category_backgrounds/texture_02.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".OqUx8AL2A1AczqKW0GhLkq127WNAu8C","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.OqUx8AL2A1AczqKW0GhLkq127WNAu8C/category_backgrounds/texture_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


//Creating the main character, James
var James = createSprite(200,350,20,20);
James.shapeColor="red";
James.setAnimation("brown_sweater_hands_in_pockets_1");
James.scale=0.14;

//Creating the boundaries
var boundary1 = createSprite(50,200,10,400);
boundary1.shapeColor="grey";
var boundary2 = createSprite(350,200,10,400);
boundary2.shapeColor="grey";

//Creating the aliens
var alien1 = createSprite(100,275,20,20);
alien1.shapeColor="blue";
alien1.setAnimation("alienBeige_walk_1");
alien1.scale=0.5;
var alien2 = createSprite(300,200,20,20);
alien2.shapeColor="blue";
alien2.setAnimation("alienBlue_walk_1");
alien2.scale=0.5;
var alien3 = createSprite(100,125,20,20);
alien3.shapeColor="blue";
alien3.setAnimation("alienGreen_walk_1");
alien3.scale=0.5;

//Creating the family
var ball = createSprite(200,40,290,80);
ball.shapeColor="yellow";
var family1 = createSprite(182,45,20,20);
family1.shapeColor="red";
family1.setAnimation("blue_hoodie_hands_in_hoodie_1");
family1.scale=0.1;
var family2 = createSprite(200,40,20,20);
family2.shapeColor="red";
family2.setAnimation("yellow_dress_one_hand_on_hip_1");
family2.scale=0.15;
var family3 = createSprite(218,45,20,20);  
family3.shapeColor="red";
family3.setAnimation("blue_dress_1");
family3.scale=0.1;

//Creating a gameState
var gameState="start";

//Creating Score
var score=0;




function draw() {
background("white");

//Game states
if (gameState=="start") {
 //Creating text
  textSize(17);
  fill("red");
  stroke("blue");
 text("The place is surrounded by aliens!",60,240); 
 
    textSize(17);
  fill("red");
  stroke("blue");
 text("Get to your family safely",135,265); 
 
   textSize(17);
  fill("red");
  stroke("blue");
 text("Press Space bar to start",135,290);
 
//Trigger point
if (keyDown("space")) {
 alien1.velocityX=+7;
 alien2.velocityX=-7;
 alien3.velocityX=+7;
gameState="play";
}
}

//GameState=play
if (gameState=="play") {
  
//Count of the lives of James lost 
textSize(20);
fill("red");
stroke("blue");
text("Lives lost:"+score,80,375);  
 
//Making James move with arrow keys
 if (keyDown("RIGHT_ARROW")) {
  James.x=James.x+3; 
 }
 if (keyDown("LEFT_ARROW")) {
   James.x=James.x-3;
 }
 if (keyDown("UP_ARROW")) {
  James.y=James.y-5;
 }
  if (keyDown("DOWN_ARROW")) {
  James.y=James.y+5;
 }
 
 //Increasing lives lost score if James is touching any of the aliens
 if (James.isTouching(alien1)||James.isTouching(alien2)||James.isTouching(alien3)) {
  James.x=200; 
  James.y=350;
   score=score+1;
   playSound("assets/category_collect/retro_game_health_pickup_2.mp3",false);
 }
 
 //If James reaches his family then he wins
 if (James.isTouching(ball)) {
playSound("assets/category_music/island_level_complete_4.mp3",false);
 gameState="end";
}
}

//GameState=end
if (gameState=="end") {
//Reseting the aliens position
  alien1.x=100;
  alien1.y=275;
  alien2.x=300;
  alien2.y=200;
  alien3.x=100;
  alien3.y=125;
  
//Displaying the text
  textSize(20);
fill("red");
stroke("blue");
text("You Win!",165,250);

//Making the aliens disappear when you reach your family
alien1.destroy();
alien2.destroy();
alien3.destroy();

  //Changing the position of the family
 family1.x=182;
 family1.y=165;
 family2.x=200;
 family2.y=160;
 family3.x=238;
 family3.y=165;
 James.x=220;
 James.y=160;
}

//Making the aliens bounce off of the boundaries 
alien1.bounceOff(boundary1);
alien1.bounceOff(boundary2);
alien2.bounceOff(boundary1);
alien2.bounceOff(boundary2);
alien3.bounceOff(boundary1);
alien3.bounceOff(boundary2);
James.bounce(boundary1);
James.bounce(boundary2);

//Creating edges
createEdgeSprites();
James.bounce(edges);
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
