class Event {
    constructor(name, callback){
        this.name = name;
        this.callback = callback;
    }
}

class Observable extends Event{
    constructor(){
        this.arrayEvent = [];
    }

    on(eventName, callback){
        let newEvent = Event(eventName, callback);
        this.arrayEvent.push(newEvent);
    }

    off(eventName, callback){

    }

    trigger(eventName, name, ){

    }
}