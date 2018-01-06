const observer = {
    observer: null,
    setObserver: function(observer){
        this.observer = observer;
        this.observer();
    },
    update: function(){
        if (observer != null){
            this.observer();
        }
    }
};

export {observer};