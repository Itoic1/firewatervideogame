
import { Player } from './player.js';
import { InputHandler } from './input.js';




window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    //canvas.
    canvas.width = window.innerWidth; //1440
    canvas.height = window.innerHeight; //813
    
    console.log(window.innerWidth + " " + window.innerHeight)

    class Game {
        constructor (width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            //console.log(this.player);
            this.input = new InputHandler();
        }
        update(){
            this.player.update(this.input.keys);
        }
        draw(context){
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);


    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});