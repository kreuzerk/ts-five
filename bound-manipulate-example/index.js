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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var OnePieceCharacter = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _greet_decorators;
    return _a = /** @class */ (function () {
            function OnePieceCharacter(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
            }
            OnePieceCharacter.prototype.greet = function () {
                console.log("".concat(this.name, " is saying hello"));
            };
            return OnePieceCharacter;
        }()),
        (function () {
            _greet_decorators = [bound, logMethod];
            __esDecorate(_a, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var luffy = new OnePieceCharacter('Luffy');
luffy.greet();
var myFunc = luffy.greet;
myFunc();
// DECORATORS
function logMethod(originalMethod, context) {
    function replaceMethod() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Start the method');
        var result = originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        console.log('End the method');
        return result;
    }
    return replaceMethod;
}
function bound(originalMethod, context) {
    var methodName = context.name;
    if (context.private) {
        throw new Error('bound can not be used on private methods');
    }
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind({
            name: 'Geko Morena'
        });
    });
}
