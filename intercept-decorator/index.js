var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
var OnePieceCharacter = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _fightOpponent_decorators;
    return _a = /** @class */ (function () {
            function OnePieceCharacter(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
            }
            OnePieceCharacter.prototype.fightOpponent = function (character) {
                console.log("".concat(this.name, " is fighting ").concat(character));
            };
            return OnePieceCharacter;
        }()),
        (function () {
            _fightOpponent_decorators = [logOpponent];
            __esDecorate(_a, null, _fightOpponent_decorators, { kind: "method", name: "fightOpponent", static: false, private: false }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var luffy = new OnePieceCharacter('Luffy');
luffy.fightOpponent('Luffy');
luffy.fightOpponent('Zorro');
// DECORATORS
function logOpponent(originalMethod, context) {
    function replaceMethod() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var name = args[0];
        var opponent;
        if (name === 'Luffy') {
            opponent = 'Arlong';
        }
        if (name === 'Zorro') {
            opponent = 'Mihawk';
        }
        console.log('Start the method');
        var result = originalMethod.call(this, opponent);
        console.log('End the method');
        return result;
    }
    return replaceMethod;
}
