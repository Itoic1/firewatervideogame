export class Player {
    constructor (game){
        this.game = game;

        //watergirl then fireboy playerdata
        this.width = 100; //57.75 77  100
        this.height = 119; //89.25 //89.25 respectivly //this.height = 89.25; //89.25   119   91.3   before 156.75
        this.x = [1200, 200];
        this.y = [600, 600];//this.game.height - this.height;
        this.vy = [0, 0];
        this.speed = [0, 0];
        this.weight = 1;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 80.3; //80.3    51.69     2500px   83.3333333px to 81.7
        this.spriteHeight = 119;  //119   //705px
        this.maxSpeed = 10;

        //imgs
        this.pimage = player;
        this.pimage2 = document.getElementById('player2');
        this.titleimg = document.getElementById('title');
        this.wall = document.getElementById('wall');
        this.backwall = document.getElementById('backwall');
        this.waterimgs = document.getElementById('water');
        this.titletext = titletext;
        this.levelspage = levelspage; //btw it connects to the id created automatically so theres two options for connecting them
        this.backroomsimg = backrooms; //easter egg
        this.diedimg = died;
        this.exitsimg = exits;

        this.backrooms = false;
        this.blame;

        //objects
        this.rect = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.rectlevels = {
            x: [178, 415, 918, 1095, 40, 80, 1280],
            y: [540, 660, 495, 625, 305, 762, 262],
            width: [173, 540, 176, 25, 25, 1315, 25],
            height: [25, 25, 25, 130, 440, 25, 525]
        }
        this.rectroom1 = {
            x: [0, 1405, 0, 0, 0, 300, 500, 500, 1320, 990, 990, 1260, 0, 800, 570, 1000, 300, 1100],//[900, 300, 350, 100, 0, 1000, 300, 1500, 1700, 200, 800, 800],
            y: [0, 0, 0, 785, 650, 475, 0, 300, 370, 250, 0, 200, 620, 620, 620, 620, 450, 450],//650, 390, 250, 400, 500, 500, 700, 700, 400, 200, 80, 676],
            width: [35, 35, 1440, 1440, 1100, 1200, 35, 300, 120, 120, 20, 150, 400, 100, 90, 100, 600, 340],//110, 400, 50, 70, 400, 50, 150, 200, 100, 1300, 314, 20],
            height: [830, 830, 35, 35, 10, 10, 300, 35, 80, 20, 255, 35, 30, 30, 30, 30, 30, 30],//25, 80, 80, 60, 25, 100, 45, 55, 50, 23, 596, 30]
        }
        this.rectroom2 = {
            x: [0, 1405, 0, 0, 0, 1290, 0, 1290, 170, 1120, 0, 1290, 170, 1120, 170, 1070, 425, 280, 1100, 600, 425, 955, 620],
            y: [0, 0, 0, 805, 150, 150, 380, 380, 265, 265, 610, 610, 495, 495, 725, 725, 500, 0, 0, 775, 480, 480, 480],
            width: [35, 35, 1440, 1440, 150, 150, 150, 150, 115, 115, 150, 150, 115, 115, 185, 185, 580, 20, 20, 240, 50, 50, 200],
            height: [830, 830, 35, 35, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 10, 280, 280, 30, 20, 20, 20]
        }
        this.rectroom3 = {
            x: [0, 0, 1405, 0, 0, 0, 640, 740, 230, 230, 710, 200, 545, 765, 1225, 1165, 910, 1360, 1200, 1060],
            y: [0, 0, 0, 0, 785, 230, 230, 230, 415, 390, 390, 585, 760, 405, 350, 350, 690, 720, 690, 710],
            width: [15, 35, 35, 1440, 1440, 400, 220, 25, 510, 230, 50, 420, 25, 460, 30, 60, 20, 20, 20, 20],
            height: [830, 330, 830, 35, 35, 20, 20, 560, 10, 30, 30, 35, 25, 30, 85, 20, 100, 10, 10, 10]
        }
        this.rectroom4 = {
            x: [0, 1405, 0, 0, 200, 540, 370, 780, 1020, 1325, 1070, 855, 505, 1200],
            y: [0, 0, 0, 785, 240, 600, 670, 680, 665, 625, 425, 300, 251, 230],
            width: [35, 35, 1440, 1440, 35, 35, 170, 30, 30, 37, 32, 28, 56, 210],
            height: [830, 830, 35, 35, 600, 200, 20, 20, 20, 17, 22, 20, 22, 35]
        }
        this.rectroom5 = {
            x: [0, 1405, 0, 0, 650, 650, 1050, 430, 430, 1230, 250, 230, 250, 1300, 1050, 670, 430, 660, 880, 405, 0, 180, 0, 310, 480, 790],
            y: [0, 0, 0, 800, 195, 210, 0, 0, 370, 200, 590, 250, 430, 570, 570, 570, 350, 350, 350, 570, 350, 580, 780, 780, 780, 780],
            width: [35, 35, 1440, 1440, 180, 400, 20, 20, 800, 20, 1190, 20, 60, 105, 65, 150, 60, 60, 350, 80, 100, 50, 120, 80, 80, 700],
            height: [830, 830, 35, 20, 20, 10, 220, 380, 10, 180, 10, 350, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        }

        this.water = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.waterroom1 = {
            x: [400],
            y: [620],
            width: [400],
            height: [30]
        }
        this.waterroom2 = {
            x: [35],
            y: [780],
            width: [1370],
            height: [25]
        }
        this.waterroom3 = {
            x: [15, 15, 15, 930],
            y: [320, 320, 585, 755],
            width: [20, 20, 185, 475],
            height: [465, 105, 30, 30]
        }
        this.waterroom4 = {
            x: [235],
            y: [760],
            width: [305],
            height: [25]
        }
        this.waterroom5 = {
            x: [830, 720, 250, 390],
            y: [195, 350, 570, 780],
            width: [220, 160, 800, 90],
            height: [15, 20, 20, 20]
        }

        this.lava = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.lavaroom1 = {
            x: [900],
            y: [620],
            width: [100],
            height: [30]
        }
        this.lavaroom2 = {
            x: [475, 820],
            y: [480, 480],
            width: [145, 135],
            height: [20, 20]
        }
        this.lavaroom3 = {
            x: [570],
            y: [760],
            width: [170],
            height: [25]
        }
        this.lavaroom4 = {
            x: [575],
            y: [755],
            width: [830],
            height: [30]
        }
        this.lavaroom5 = {
            x: [490, 120, 560],
            y: [350, 780, 780],
            width: [170, 190, 230],
            height: [20, 20, 20]
        }
        
        this.toxicwaste = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.toxicwasteroom1 = {
            x: [900],
            y: [450],
            width: [200],
            height: [25]
        }
        this.toxicwasteroom2 = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.toxicwasteroom3 = {
            x: [460, 765],
            y: [390, 380],
            width: [250, 460],
            height: [25, 25]
        }
        this.toxicwasteroom4 = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.toxicwasteroom5 = {
            x: [1115],
            y: [570],
            width: [185],
            height: [20]
        }

        //wastergirl then fireboy
        this.exits = {
            x: [],
            y: [],
            width: [],
            height: []
        }
        this.exitsroom1 = {
            x: [535, 1280],
            y: [150, 50],
            width: [120, 120],
            height: [150, 150]
        }
        this.exitsroom2 = {
            x: [665, 665],
            y: [330, 625],
            width: [120, 120],
            height: [150, 150]
        }
        this.exitsroom3 = {
            x: [425, 780],
            y: [635, 635],
            width: [120, 120],
            height: [150, 150]
        }
        this.exitsroom4 = {
            x: [1260, 55],
            y: [80, 635],
            width: [120, 120],
            height: [150, 150]
        }
        this.exitsroom5 = {
            x: [980, 1250],
            y: [630, 630],
            width: [120, 120],
            height: [150, 150]
        }

        //swap between rooms tell if display
        this.titlescreen = true;
        this.levels = false;
        this.room1 = false;

        //is this.rect.etc empty?
        this.isEmpty = true;
        this.firstFrame = true;
        this.first5Frame = 0;

        this.startbutton = {
            x: 655,
            y: 590,
            width: 160,
            height: 65
        }
        this.input;
        this.titlehelp = 2048;
        this.died = false;
    }  
    update(input){
        //console.log(input);
        //here are the buttons
        if(this.titlescreen && input[0] > this.startbutton.x && input[0] < this.startbutton.x + this.startbutton.width && input[1] > this.startbutton.y + 81 && input[1] < this.startbutton.y + this.startbutton.height + 81){
            this.titlescreen = false;
            this.levels = true;
            this.firstFrame = true;
            //this.isEmpty = false;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }
        if(this.levels && input[0] > 160 && input[0] < 240 && input[1] > 190 + 81 && input[1] < 270 + 81){
            this.levels = false;
            this.room1 = true;
            this.isEmpty = true;
            this.clearReset();
            this.firstFrame = true;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }
        if(this.levels && input[0] > 420 && input[0] < 500 && input[1] > 190 + 81 && input[1] < 270 + 81){
            this.levels = false;
            this.room2 = true;
            this.isEmpty = true;
            this.clearReset();
            this.firstFrame = true;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }
        if(this.levels && input[0] > 680 && input[0] < 760 && input[1] > 190 + 81 && input[1] < 270 + 81){
            this.levels = false;
            this.room3 = true;
            this.isEmpty = true;
            this.clearReset();
            this.firstFrame = true;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }
        if(this.levels && input[0] > 940 && input[0] < 1020 && input[1] > 190 + 81 && input[1] < 270 + 81){
            this.levels = false;
            this.room4 = true;
            this.isEmpty = true;
            this.clearReset();
            this.firstFrame = true;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }
        if(this.levels && input[0] > 1200 && input[0] < 1280 && input[1] > 190 + 81 && input[1] < 270 + 81){
            this.levels = false;
            this.room5 = true;
            this.isEmpty = true;
            this.clearReset();
            this.firstFrame = true;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }

        //easter egg hold 12465 and it shows
        if(input.includes('1') && input.includes('2') && input.includes('4') && input.includes('6') && input.includes('5')) this.backrooms = true;
        else this.backrooms = false;

        if(input.includes('r')){
            this.clearReset();
            this.isEmpty = true;
            this.died = false;
        }

        //turn the other rooms data into this one "this.rect"
        if(this.levels && this.isEmpty){
            for(var g = 0; g < this.rectlevels.x.length; g++){
                this.rect.x.push(this.rectlevels.x[g]);
                this.rect.y.push(this.rectlevels.y[g]);
                this.rect.width.push(this.rectlevels.width[g]);
                this.rect.height.push(this.rectlevels.height[g]);
            }
            this.isEmpty = false;
            this.x[0] = 980;
            this.y[0] = 340;
            this.x[1] = 240;
            this.y[1] = 320;
            this.width = 67.75;
            this.height = 87;
            this.vy[0] = 0;
            this.vy[1] = 0;
        }
        if(this.room1 && this.isEmpty){
            for(var u = 0; u < this.rectroom1.x.length; u++){
                this.rect.x.push(this.rectroom1.x[u]);
                this.rect.y.push(this.rectroom1.y[u]);
                this.rect.width.push(this.rectroom1.width[u]);
                this.rect.height.push(this.rectroom1.height[u]);
            }
            for(var op = 0; op < this.waterroom1.x.length; op++){
                this.water.x.push(this.waterroom1.x[op]);
                this.water.y.push(this.waterroom1.y[op]);
                this.water.width.push(this.waterroom1.width[op]);
                this.water.height.push(this.waterroom1.height[op]);
            }
            for(var op = 0; op < this.lavaroom1.x.length; op++){
                this.lava.x.push(this.lavaroom1.x[op]);
                this.lava.y.push(this.lavaroom1.y[op]);
                this.lava.width.push(this.lavaroom1.width[op]);
                this.lava.height.push(this.lavaroom1.height[op]);
            }
            for(var op = 0; op < this.toxicwasteroom1.x.length; op++){
                this.toxicwaste.x.push(this.toxicwasteroom1.x[op]);
                this.toxicwaste.y.push(this.toxicwasteroom1.y[op]);
                this.toxicwaste.width.push(this.toxicwasteroom1.width[op]);
                this.toxicwaste.height.push(this.toxicwasteroom1.height[op]);
            }
            this.exits.x.push(this.exitsroom1.x[0]);
            this.exits.x.push(this.exitsroom1.x[1]);
            this.exits.y.push(this.exitsroom1.y[0]);
            this.exits.y.push(this.exitsroom1.y[1]);
            this.exits.width.push(this.exitsroom1.width[0]);
            this.exits.width.push(this.exitsroom1.width[1]);
            this.exits.height.push(this.exitsroom1.height[0]);
            this.exits.height.push(this.exitsroom1.height[1]);
            this.x[1] = 70;
            this.y[0] = 695;
            this.x[0] = 170;
            this.y[1] = 695;
            this.vy[0] = 0;
            this.vy[1] = 0;
            this.isEmpty = false;
        }
        if(this.room2 && this.isEmpty){
            console.log('oi2');
            for(var o = 0; o < this.rectroom2.x.length; o++){
                this.rect.x.push(this.rectroom2.x[o]);
                this.rect.y.push(this.rectroom2.y[o]);
                this.rect.width.push(this.rectroom2.width[o]);
                this.rect.height.push(this.rectroom2.height[o]);
            }
            for(var op = 0; op < this.waterroom2.x.length; op++){
                this.water.x.push(this.waterroom2.x[op]);
                this.water.y.push(this.waterroom2.y[op]);
                this.water.width.push(this.waterroom2.width[op]);
                this.water.height.push(this.waterroom2.height[op]);
            }
            for(var op = 0; op < this.lavaroom2.x.length; op++){
                this.lava.x.push(this.lavaroom2.x[op]);
                this.lava.y.push(this.lavaroom2.y[op]);
                this.lava.width.push(this.lavaroom2.width[op]);
                this.lava.height.push(this.lavaroom2.height[op]);
            }
            for(var op = 0; op < this.toxicwasteroom2.x.length; op++){
                this.toxicwaste.x.push(this.toxicwasteroom2.x[op]);
                this.toxicwaste.y.push(this.toxicwasteroom2.y[op]);
                this.toxicwaste.width.push(this.toxicwasteroom2.width[op]);
                this.toxicwaste.height.push(this.toxicwasteroom2.height[op]);
            }
            this.exits.x.push(this.exitsroom2.x[0]);
            this.exits.x.push(this.exitsroom2.x[1]);
            this.exits.y.push(this.exitsroom2.y[0]);
            this.exits.y.push(this.exitsroom2.y[1]);
            this.exits.width.push(this.exitsroom2.width[0]);
            this.exits.width.push(this.exitsroom2.width[1]);
            this.exits.height.push(this.exitsroom2.height[0]);
            this.exits.height.push(this.exitsroom2.height[1]);
            this.x[1] = 50;
            this.y[0] = 50;
            this.x[0] = 1320;
            this.y[1] = 50;
            this.vy[0] = 0;
            this.vy[1] = 0;
            this.isEmpty = false;
        }
        if(this.room3 && this.isEmpty){
            console.log('oi3');
            for(var q = 0; q < this.rectroom3.x.length; q++){
                this.rect.x.push(this.rectroom3.x[q]);
                this.rect.y.push(this.rectroom3.y[q]);
                this.rect.width.push(this.rectroom3.width[q]);
                this.rect.height.push(this.rectroom3.height[q]);
            }
            for(var op = 0; op < this.waterroom3.x.length; op++){
                this.water.x.push(this.waterroom3.x[op]);
                this.water.y.push(this.waterroom3.y[op]);
                this.water.width.push(this.waterroom3.width[op]);
                this.water.height.push(this.waterroom3.height[op]);
            }
            for(var op = 0; op < this.lavaroom3.x.length; op++){
                this.lava.x.push(this.lavaroom3.x[op]);
                this.lava.y.push(this.lavaroom3.y[op]);
                this.lava.width.push(this.lavaroom3.width[op]);
                this.lava.height.push(this.lavaroom3.height[op]);
            }
            for(var op = 0; op < this.toxicwasteroom3.x.length; op++){
                this.toxicwaste.x.push(this.toxicwasteroom3.x[op]);
                this.toxicwaste.y.push(this.toxicwasteroom3.y[op]);
                this.toxicwaste.width.push(this.toxicwasteroom3.width[op]);
                this.toxicwaste.height.push(this.toxicwasteroom3.height[op]);
            }
            this.exits.x.push(this.exitsroom3.x[0]);
            this.exits.x.push(this.exitsroom3.x[1]);
            this.exits.y.push(this.exitsroom3.y[0]);
            this.exits.y.push(this.exitsroom3.y[1]);
            this.exits.width.push(this.exitsroom3.width[0]);
            this.exits.width.push(this.exitsroom3.width[1]);
            this.exits.height.push(this.exitsroom3.height[0]);
            this.exits.height.push(this.exitsroom3.height[1]);
            this.x[1] = 70;
            this.y[0] = 40;
            this.x[0] = 160;
            this.y[1] = 40;
            this.vy[0] = 0;
            this.vy[1] = 0;
            this.isEmpty = false;
        }
        if(this.room4 && this.isEmpty){
            console.log("oi4");
            for(var s = 0; s < this.rectroom4.x.length; s++){
                this.rect.x.push(this.rectroom4.x[s]);
                this.rect.y.push(this.rectroom4.y[s]);
                this.rect.width.push(this.rectroom4.width[s]);
                this.rect.height.push(this.rectroom4.height[s]);
            }
            for(var op = 0; op < this.waterroom4.x.length; op++){
                this.water.x.push(this.waterroom4.x[op]);
                this.water.y.push(this.waterroom4.y[op]);
                this.water.width.push(this.waterroom4.width[op]);
                this.water.height.push(this.waterroom4.height[op]);
            }
            for(var op = 0; op < this.lavaroom4.x.length; op++){
                this.lava.x.push(this.lavaroom4.x[op]);
                this.lava.y.push(this.lavaroom4.y[op]);
                this.lava.width.push(this.lavaroom4.width[op]);
                this.lava.height.push(this.lavaroom4.height[op]);
            }
            for(var op = 0; op < this.toxicwasteroom4.x.length; op++){
                this.toxicwaste.x.push(this.toxicwasteroom4.x[op]);
                this.toxicwaste.y.push(this.toxicwasteroom4.y[op]);
                this.toxicwaste.width.push(this.toxicwasteroom4.width[op]);
                this.toxicwaste.height.push(this.toxicwasteroom4.height[op]);
            }
            this.exits.x.push(this.exitsroom4.x[0]);
            this.exits.x.push(this.exitsroom4.x[1]);
            this.exits.y.push(this.exitsroom4.y[0]);
            this.exits.y.push(this.exitsroom4.y[1]);
            this.exits.width.push(this.exitsroom4.width[0]);
            this.exits.width.push(this.exitsroom4.width[1]);
            this.exits.height.push(this.exitsroom4.height[0]);
            this.exits.height.push(this.exitsroom4.height[1]);
            this.x[1] = 380;
            this.y[0] = 550;
            this.x[0] = 470;
            this.y[1] = 550;
            this.vy[0] = 0;
            this.vy[1] = 0;
            this.isEmpty = false;
        }
        if(this.room5 && this.isEmpty){
            for(var z = 0; z < this.rectroom5.x.length; z++){
                this.rect.x.push(this.rectroom5.x[z]);
                this.rect.y.push(this.rectroom5.y[z]);
                this.rect.width.push(this.rectroom5.width[z]);
                this.rect.height.push(this.rectroom5.height[z]);
            }
            for(var op = 0; op < this.waterroom5.x.length; op++){
                this.water.x.push(this.waterroom5.x[op]);
                this.water.y.push(this.waterroom5.y[op]);
                this.water.width.push(this.waterroom5.width[op]);
                this.water.height.push(this.waterroom5.height[op]);
            }
            for(var op = 0; op < this.lavaroom5.x.length; op++){
                this.lava.x.push(this.lavaroom5.x[op]);
                this.lava.y.push(this.lavaroom5.y[op]);
                this.lava.width.push(this.lavaroom5.width[op]);
                this.lava.height.push(this.lavaroom5.height[op]);
            }
            for(var op = 0; op < this.toxicwasteroom5.x.length; op++){
                this.toxicwaste.x.push(this.toxicwasteroom5.x[op]);
                this.toxicwaste.y.push(this.toxicwasteroom5.y[op]);
                this.toxicwaste.width.push(this.toxicwasteroom5.width[op]);
                this.toxicwaste.height.push(this.toxicwasteroom5.height[op]);
            }
            this.exits.x.push(this.exitsroom5.x[0]);
            this.exits.x.push(this.exitsroom5.x[1]);
            this.exits.y.push(this.exitsroom5.y[0]);
            this.exits.y.push(this.exitsroom5.y[1]);
            this.exits.width.push(this.exitsroom5.width[0]);
            this.exits.width.push(this.exitsroom5.width[1]);
            this.exits.height.push(this.exitsroom5.height[0]);
            this.exits.height.push(this.exitsroom5.height[1]);
            this.x[1] = 710;
            this.y[0] = 70;
            this.x[0] = 970;
            this.y[1] = 70;
            this.vy[0] = 0;
            this.vy[1] = 0;
            this.isEmpty = false;
        }

        //this.input = input[0] + " " + input[1];
        this.speed[0] = 0;

        // horizontal movement
        if (input.includes('d')) this.speed[0] = this.maxSpeed;
        else if (input.includes('a')) this.speed[0] = -this.maxSpeed;
        else this.speed[0] = 0;
        if (input.includes('ArrowRight')) this.speed[1] = this.maxSpeed;
        else if (input.includes('ArrowLeft')) this.speed[1] = -this.maxSpeed;
        else this.speed[1] = 0;
        this.y[0] += this.vy[0];
        this.y[1] += this.vy[1];
        this.vy[0] += this.weight;
        this.vy[1] += this.weight;

        for(var both = 0; both < 2; both++){
            for(var j = 0; j < this.rect.x.length; j++){
                if(this.x[both] + this.speed[both] < this.rect.x[j] + this.rect.width[j] && this.x[both] + this.speed[both] + this.width > this.rect.x[j] && this.y[both] < this.rect.y[j] + this.rect.height[j] && this.y[both] + this.height > this.rect.y[j]){
                    if(input.includes("a") && both === 0 || input.includes('ArrowLeft') && both === 1){
                        //this.speed = 0;
                        this.speed[both] = this.rect.x[j] + this.rect.width[j] - this.x[both];
                    }
                    if(input.includes("d") && both === 0 || input.includes('ArrowRight') && both === 1){
                        //this.speed = 0;
                        this.speed[both] = this.rect.x[j] - this.x[both] - this.width;
                    }
                }
            }
            this.x[both] += this.speed[both];
            for(var j = 0; j < this.rect.x.length; j++){
                if(this.x[both] < this.rect.x[j] + this.rect.width[j] && this.x[both] + this.width > this.rect.x[j] && this.y[both] + this.vy[both] < this.rect.y[j] + this.rect.height[j] && this.y[both] + this.vy[both] + this.height > this.rect.y[j]){
                    //this.vy = 0;
                    if(this.vy[both] > 0){
                        this.vy[both] = this.rect.y[j] - this.y[both] - this.height;
                    }
                    if(this.vy[both] < 0){
                        this.vy[both] = this.rect.y[j] + this.rect.height[j] - this.y[both];
                    }
                }
            

                //if(this.x[both] + this.speed[both] < this.rect.x[j] + this.rect.width[j]

                /*if(this.x[both] + this.speed[both] < this.rect.x[j] + this.rect.width[j] && this.x[both] + this.speed[both] + this.width > this.rect.x[j] && this.y[both] + this.vy[both] < this.rect.y[j] + this.rect.height[j] && this.y[both] + this.vy[both] + this.height > this.rect.y[j]){
                    if(this.y[both] < this.rect.y[j] + this.rect.height[j] && this.y[both] + this.height > this.rect.y[j]){
                        if(input.includes("a") || input.includes('ArrowLeft')){
                            //this.speed = 0;
                            this.speed[both] = this.rect.x[j] + this.rect.width[j] - this.x[both];
                        }
                        if(input.includes("d") && both === 0 || input.includes('ArrowRight') && both === 1){
                            //this.speed = 0;
                            this.speed[both] = this.rect.x[j] - this.x[both] - this.width;
                        }
                    }
                    if(this.x[both] < this.rect.x[j] + this.rect.width[j] && this.x[both] + this.width > this.rect.x[j]){
                        //this.vy = 0;
                        if(this.vy[both] > 0){
                            this.vy[both] = this.rect.y[j] - this.y[both] - this.height;
                        }
                        if(this.vy[both] < 0){
                            this.vy[both] = this.rect.y[j] + this.rect.height[j] - this.y[both];
                        
                        }
                    }
                }*/



                if(((input.includes("w") && both === 0) || (input.includes('ArrowUp') && both === 1)) && this.rect.y[j] === this.y[both] + this.height && this.x[both] < this.rect.x[j] + this.rect.width[j] && this.x[both] + this.width > this.rect.x[j]){
                    this.vy[both] -= 20;
                }
            }
            for(var r = 0; r < this.toxicwaste.x.length; r++){
                if(this.x[both] < this.toxicwaste.x[r] + this.toxicwaste.width[r] && this.x[both] + this.width > this.toxicwaste.x[r] && this.y[both] < this.toxicwaste.y[r] + this.toxicwaste.height[r] && this.y[both] + this.height > this.toxicwaste.y[r]){
                    this.died = true;
                    if(both === 0){
                        this.blame = "watergirl";
                    }
                    if(both === 1){
                        this.blame = "fireboy";
                    }
                    console.log(this.died);
                }
            }
        }
        if(this.x[0] < this.exits.x[0] + this.exits.width[0] && this.x[0] + this.width > this.exits.x[0] && this.y[0] < this.exits.y[0] + this.exits.height[0] && this.y[0] + this.height > this.exits.y[0]
            && this.x[1] < this.exits.x[1] + this.exits.width[1] && this.x[1] + this.width > this.exits.x[1] && this.y[1] < this.exits.y[1] + this.exits.height[1] && this.y[1] + this.height > this.exits.y[1]){
            if(this.room5){
                this.room5 = false;
                this.levels = true;
            }
            if(this.room4){
                this.room4 = false;
                this.room5 = true;
            }
            if(this.room3){
                this.room3 = false;
                this.room4 = true;
            }
            if(this.room2){
                this.room2 = false;
                this.room3 = true;
            }
            if(this.room1){
                this.room1 = false;
                this.room2 = true;
            }
            this.isEmpty = true;
        }
        //water
        for(var d = 0; d < this.water.x.length; d++){
            if(this.x[1] < this.water.x[d] + this.water.width[d] && this.x[1] + this.width > this.water.x[d] && this.y[1] < this.water.y[d] + this.water.height[d] && this.y[1] + this.height > this.water.y[d]){
                this.died = true;
                this.blame = "fireboy";
                console.log(this.died);
            }
        }
        for(var e = 0; e < this.lava.x.length; e++){
            if(this.x[0] < this.lava.x[e] + this.lava.width[e] && this.x[0] + this.width > this.lava.x[e] && this.y[0] < this.lava.y[e] + this.lava.height[e] && this.y[0] + this.height > this.lava.y[e]){
                this.died = true;
                this.blame = "watergirl";
                console.log(this.died);
            }
        }
        if(this.room3) console.log("ashbghs");
        //this.died = true;
        if(this.titlescreen){
            this.x = [1200, 200];
            this.y = [600, 600];
        }
    }
    draw(context){
        context.drawImage(this.backwall, 0, 0, 1440, 820, 0, 0, 1440, 820);
        if(!this.levels){
            for(var i = 0; i < this.rect.x.length; i++){
                context.drawImage(this.wall, this.rect.x[i], this.rect.y[i], this.rect.width[i], this.rect.height[i], this.rect.x[i], this.rect.y[i], this.rect.width[i], this.rect.height[i]);
            }
        }
        for(var a = 0; a < this.water.x.length; a++){
            context.drawImage(this.waterimgs, 0, 0, 470, 55, this.water.x[a], this.water.y[a], this.water.width[a], this.water.height[a]);
        }
        for(var b = 0; b < this.lava.x.length; b++){
            context.drawImage(this.waterimgs, 480, 0, 470, 55, this.lava.x[b], this.lava.y[b], this.lava.width[b], this.lava.height[b]);
        }
        for(var c = 0; c < this.toxicwaste.x.length; c++){
            context.drawImage(this.waterimgs, 959, 0, 470, 55, this.toxicwaste.x[c], this.toxicwaste.y[c], this.toxicwaste.width[c], this.toxicwaste.height[c]);
        }
        //watergirl
        if(this.exits.x.length === 2){
            context.drawImage(this.exitsimg, 0, 0, 587, 704, this.exits.x[0], this.exits.y[0], this.exits.width[0], this.exits.height[0]);
            context.drawImage(this.exitsimg, 598, 0, 514, 706, this.exits.x[1], this.exits.y[1], this.exits.width[1], this.exits.height[1]);
        }
        if(this.titlescreen){
            context.drawImage(this.titleimg, 0, 0, 1.33 * this.titlehelp, this.titlehelp, 0, 0, 1440, 820);

            context.fillStyle = "gold";
            context.fillRect(this.startbutton.x, this.startbutton.y, this.startbutton.width, this.startbutton.height);

            context.fillStyle = "#FFFF99";
            context.font = "74px sans-serif";
            //context.fillText(this.input, 0, 50, 400);
            context.fillText("Start", 655, 650, 900);246
            //this.width = 77;
           // this.height = 119;
            context.globalAlpha = 0.07;
            context.fillStyle = "#00fcf0";
            context.fillRect(this.x[0], this.y[0], this.width, this.height);
            context.globalAlpha = 1;
            context.drawImage(this.pimage, this.frameX * this.spriteWidth+1, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x[0], this.y[0], this.width, this.height);
            context.drawImage(this.pimage2, 0, 0, 1005, 1745, this.x[1], this.y[1], this.width, this.height);
            context.drawImage(this.titletext, 0, 0, 1280, 200, 240, 20, 6.4 * 150, 150);
        
        }
        if(this.levels){
            context.drawImage(this.levelspage, 0, 0, 2500, 1537, 0, 0, 1440, 820);
            context.drawImage(this.pimage, this.frameX * this.spriteWidth+1, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x[0], this.y[0], this.width, this.height);
            context.drawImage(this.pimage2, 0, 0, 1005, 1745, this.x[1], this.y[1], this.width, this.height);
        }
        context.drawImage(this.pimage, this.frameX * this.spriteWidth+1, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x[0], this.y[0], this.width, this.height);
        context.drawImage(this.pimage2, 0, 0, 1005, 1745, this.x[1], this.y[1], this.width, this.height);
        if(this.room1){
            
            //context.fillRect(400, 620, 400, 30);
        }
        if(this.room2){
            //stuff
        }
        if(this.room3){
            //stuff
        }
        if(this.room4){
            //stuff
        }
        if(this.room5){
            //stuff
        }
        if(this.waterframeX < 4) this.waterframeX++;
        else this.waterframeX = 0;
        if (this.frameX < 30) this.frameX++;
        else this.frameX = 0;
        if(this.died){
            context.drawImage(this.diedimg, 0, 0, 1920, 1080, 0, 0, 1440, 820);
            context.fillStyle = "orange";
            context.font = "30px monospace";
            context.fillText("click r to reset level. Blame " + this.blame, 550, 560, 350);
        }
        if(this.backrooms){
            context.drawImage(this.backroomsimg, 0, 0, 2880, 1800, 0, 0, 1440, 820);
        }
        if(this.isEmpty){
            this.clearReset();
        }
    }
    clearReset(){
        for(var w = 0; w < this.rect.x.length;){
            this.rect.x.shift();
            this.rect.y.shift();
            this.rect.width.shift();
            this.rect.height.shift();
        }
        for(var w = 0; w < this.water.x.length;){
            this.water.x.shift();
            this.water.y.shift();
            this.water.width.shift();
            this.water.height.shift();
        }
        for(var w = 0; w < this.lava.x.length;){
            this.lava.x.shift();
            this.lava.y.shift();
            this.lava.width.shift();
            this.lava.height.shift();
        }
        for(var w = 0; w < this.toxicwaste.x.length;){
            this.toxicwaste.x.shift();
            this.toxicwaste.y.shift();
            this.toxicwaste.width.shift();
            this.toxicwaste.height.shift();
        }
        for(var w = 0; w < this.exits.x.length;){
            this.exits.x.shift();
            this.exits.y.shift();
            this.exits.width.shift();
            this.exits.height.shift();
        }
    }
}