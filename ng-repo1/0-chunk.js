webpackJsonp([2],{

/***/ "app/heroes2/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "{{heroes}}"

/***/ }),

/***/ "app/heroes2/heroes.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core/@angular/core.es5.js");
var HeroesComponent = (function () {
    function HeroesComponent() {
        this.heroes = "HeroesComponent 2 bundle";
    }
    HeroesComponent.prototype.ngOnInit = function () { };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'app-heroes',
        template: __webpack_require__("app/heroes2/heroes.component.html")
    }),
    __metadata("design:paramtypes", [])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;


/***/ }),

/***/ "app/heroes2/heroes.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("@angular/router/@angular/router.es5.js");
// containers
var heroes_component_1 = __webpack_require__("app/heroes2/heroes.component.ts");
// routes
exports.ROUTES = [
    { path: '', component: heroes_component_1.HeroesComponent }
];
var HeroesModule = (function () {
    function HeroesModule() {
    }
    return HeroesModule;
}());
HeroesModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(exports.ROUTES)
        ],
        declarations: [
            heroes_component_1.HeroesComponent
        ]
    })
], HeroesModule);
exports.HeroesModule = HeroesModule;

/***/ })
}, ["app/heroes2/heroes.module.ts"]);