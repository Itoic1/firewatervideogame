export class InputHandler {
    constructor(){
        this.keys = [];
        this.mouseX;
        this.mouseY;
        window.addEventListener("mousedown", e => {
            this.mouseX = e.screenX;
            this.mouseY = e.screenY;
            this.keys.unshift(this.mouseY);
            this.keys.unshift(this.mouseX);
        }, false);
        window.addEventListener("mouseup", e => {
            this.keys.splice(this.keys.indexOf(this.mouseY), 1);
            this.keys.splice(this.keys.indexOf(this.mouseX), 1);
        }, false);
        window.addEventListener('keydown', e => {
            if ((   e.key.toLowerCase() === 'w' ||
                    e.key.toLowerCase() === 'd' ||
                    e.key.toLowerCase() === 'a' ||
                    e.key.toLowerCase() === 'r'
                ) && this.keys.indexOf(e.key.toLowerCase()) === -1){
                this.keys.push(e.key.toLowerCase());
            }
            if ((   e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter' ||
                    e.key === '1' ||
                    e.key === '2' ||
                    e.key === '4' ||
                    e.key === '6' ||
                    e.key === '5'
                ) && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            }
            console.log(e.key, this.keys);
        });
        window.addEventListener('keyup', e => {
            if (    e.key.toLowerCase() === 'w' ||
                    e.key.toLowerCase() === 'd' ||
                    e.key.toLowerCase() === 'a' ||
                    e.key.toLowerCase() === 'r'
                ){
                this.keys.splice(this.keys.indexOf(e.key.toLowerCase()), 1);
            }
            if (   e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight' ||
                    e.key === 'Enter' ||
                    e.key === '1' ||
                    e.key === '2' ||
                    e.key === '4' ||
                    e.key === '6' ||
                    e.key === '5'
                ){
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
            console.log(e.key, this.keys);
        });
    }
}