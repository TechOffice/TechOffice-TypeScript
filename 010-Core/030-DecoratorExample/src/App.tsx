
class App {
    
    doSomething(){
        var div = document.createElement("div");
        div.textContent = "Hello World";
        document.body.appendChild(div);
    }

}

var app = new App();
app.doSomething();

    
