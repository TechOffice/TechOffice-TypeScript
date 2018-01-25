function TestAnnoation(param1: string){
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + param1 + ") called on: ", target);
    }

}

@TestAnnoation("testing")
class App {
    
    doSomething(){
        console.log("hello world");
    }

}

var app = new App();
app.doSomething();


