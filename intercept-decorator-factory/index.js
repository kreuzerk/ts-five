"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var OnePiecCharacter = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _logFight_decorators;
    return _a = /** @class */ (function () {
            function OnePiecCharacter(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
            }
            OnePiecCharacter.prototype.logFight = function () {
                console.log("".concat(this.name, " is winning"));
            };
            return OnePiecCharacter;
        }()),
        (function () {
            _logFight_decorators = [findOpponent('Arlongpark')];
            __esDecorate(_a, null, _logFight_decorators, { kind: "method", name: "logFight", static: false, private: false }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
new OnePiecCharacter('Luffy').logFight();
function findOpponent(place) {
    return function actualDecorator(originalMethod, context) {
        function replaceMethod() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var name = this.name;
            var opponent = getOpponent(name, place);
            console.log("".concat(name, " is fighting ").concat(opponent, " on ").concat(place));
            originalMethod.call.apply(originalMethod, __spreadArray([this], args, false));
        }
        return replaceMethod;
    };
}
function getOpponent(name, place) {
    var _a;
    var fightMap = {
        luffy: [
            {
                place: 'Arlongpark',
                opponent: 'Arlong'
            },
            {
                place: 'Dresrosa',
                opponent: 'Do Flamingo'
            },
            {
                place: 'Alabasta',
                opponent: 'Sir Crocodile'
            }
        ],
        zorro: [
            {
                place: 'Waterseven',
                opponent: 'Kaku'
            },
            {
                place: 'Wanu Kuni',
                opponent: 'Killer'
            }
        ]
    };
    var opponent = (_a = fightMap[name.toLowerCase()].find(function (fight) { return fight.place === place; })) === null || _a === void 0 ? void 0 : _a.opponent;
    if (!opponent) {
        console.warn("".concat(name, " was not fighting on ").concat(place));
    }
    return opponent;
}
