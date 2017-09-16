var game = new Phaser.Game(500, 500, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.atlasJSONHash('matrix', 'assets/_IMG0001.png', 'assets/_IMG0001.json');
}

function create() {

    game.device.desktop;
    game.scale.pageAlignHorizontally = !0;
    game.scale.pageAlignVertically = !0;

    //  This sprite is using a texture atlas for all of its animation data
    var bot = game.add.sprite(200, 200, 'matrix');

    //  Here we add a new animation called 'run'
    //  We haven't specified any frames because it's using every frame in the texture atlas
    bot.animations.add('run');

    //  And this starts the animation playing by using its key ("run")
    //  15 is the frame rate (15fps)
    //  true means it will loop when it finishes
    bot.animations.play('run', 15, true);
}
