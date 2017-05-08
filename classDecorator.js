let __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    let c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (let i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function MyClassDecorator(target) {
    console.log("MyClassDecorator called on:", target);
}

function MyClassDecoratorParams(param1, param2) {
    return function(target) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
let MyClassDecoratorExercise = (function() {
    function MyClassDecoratorExercise() {}
    return MyClassDecoratorExercise;
}());
MyClassDecoratorExercise = __decorate([
    MyClassDecorator
], MyClassDecoratorExercise);
let MyClassDecoratorParamsExercise = (function() {
    function MyClassDecoratorParamsExercise() {}
    return MyClassDecoratorParamsExercise;
}());
MyClassDecoratorParamsExercise = __decorate([
    MyClassDecoratorParams(1, "a")
], MyClassDecoratorParamsExercise);