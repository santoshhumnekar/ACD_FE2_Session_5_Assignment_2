let Eats = (function() { // Disposable Mixin
    function Eats() {}
    Eats.prototype.eat = function() {
        this.isEating = true;
    };
    return Eats;
}());
let Codes = (function() {
    function Codes() {}
    Codes.prototype.code = function() {
        this.isCoding = true;
    };
    return Codes;
}());

let Plays = (function() { // Activatable Mixin
    function Plays() {}
    Plays.prototype.playing = function() {
        this.isPlaying = true;
    };
    Plays.prototype.played = function() {
        this.isPlaying = false;
    };
    return Plays;
}());
let SmartObject = (function() {
    function SmartObject() {
        let _this = this;
        this.isEating = false;
        this.isPlaying = false;
        this.isCoding = false;
        setInterval(function() { return console.log(_this.isPlaying + " : " + _this.isEating); }, 1000);
    }
    SmartObject.prototype.interact = function() {
        this.playing();
    };
    return SmartObject;
}());
applyMixins(SmartObject, [Eats, Plays, Codes]);
let smartObj = new SmartObject();
setTimeout(function() { return smartObj.interact(); }, 2000);

function applyMixins(derivedCtor, baseCtors) { // In your runtime library somewhere
    baseCtors.forEach(function(baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function(name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}