import * as Phaser from 'phaser-ce';

class App {
    

    doSomething(){
        let game: Phaser.Game;
        
        var div = document.createElement("div");
        div.textContent = "Hello World";
        document.body.appendChild(div);
    }

}

var app = new App();
app.doSomething();

    
