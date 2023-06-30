controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Con esto conseguimos quitar el doble salto
    if (jugador.isHittingTile(CollisionDirection.Bottom)) {
        // Cambiamos la velocidad para hacer que suba el personaje
        jugador.vy += -180
    } else {
        // Cambiamos la velocidad para hacer que suba el personaje
        jugador.vy += 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 4 4 4 4 . . . . . 
        . . . 4 4 4 5 5 4 4 4 . . . 
        . . 3 3 3 3 4 4 4 4 4 4 . . 
        . 4 3 3 3 3 2 2 2 1 1 4 4 . 
        . 3 3 3 3 3 2 2 2 1 1 5 4 . 
        4 3 3 3 3 2 2 2 2 2 5 5 4 4 
        4 3 3 3 2 2 2 4 4 4 4 5 4 4 
        4 4 3 3 2 2 4 4 4 4 4 4 4 4 
        4 2 3 3 2 2 4 4 4 4 4 4 4 4 
        . 4 2 3 3 2 4 4 4 4 4 2 4 . 
        . 4 2 2 3 2 2 4 4 4 2 4 4 . 
        . . 4 2 2 2 2 2 2 2 2 4 . . 
        . . . 4 4 2 2 2 2 4 4 . . . 
        . . . . . 4 4 4 4 . . . . . 
        `, jugador, 120, 0)
})
let projectile: Sprite = null
let jugador: Sprite = null
story.printText("Hola, comienza la aventura", 50, 0, 15, 1)
story.printText("¡Tienes que salir del laberinto", 59, 0, 15, 1)
jugador = sprites.create(assets.image`Ojo`, SpriteKind.Player)
controller.moveSprite(jugador, 100, 0)
jugador.setPosition(20, 0)
scene.cameraFollowSprite(jugador)
tiles.setTilemap(tilemap`level1`)
// Creamos la gravedad del jugador
jugador.ay = 500
