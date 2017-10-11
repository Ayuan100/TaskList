webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n\t<a class=\"navbar-brand\" href=\"#\">\n\t\t<!-- <img src=\"/assets/brand/bootstrap-solid.svg\" width=\"30\" height=\"30\" alt=\"\"> -->\n\t</a>\n\t<account class=\"row float-right\" (onChange)=\"changeStatus($event)\"></account>\n</nav>\n<br>\n<tasks [status]=\"status\"></tasks>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.status = 'temp';
    }
    AppComponent.prototype.changeStatus = function (newStatus) {
        this.status = newStatus;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_to_do_list_to_do_list_component__ = __webpack_require__("../../../../../src/app/components/to-do-list/to-do-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_done_list_done_list_component__ = __webpack_require__("../../../../../src/app/components/done-list/done-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_date_list_date_list_component__ = __webpack_require__("../../../../../src/app/components/date-list/date-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_account_account_component__ = __webpack_require__("../../../../../src/app/components/account/account.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_to_do_list_to_do_list_component__["a" /* ToDoListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_done_list_done_list_component__["a" /* DoneListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_date_list_date_list_component__["a" /* DateListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_account_account_component__["a" /* AccountComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_tasks_service__["a" /* TasksService */],
            __WEBPACK_IMPORTED_MODULE_11__services_account_service__["a" /* AccountService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-space {\n    margin-left: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(status=='login');then LOGOUT else LOGIN\">here is ignored</div>\n\n<ng-template #LOGIN>\n\t<form class=\"form-inline\" (ngSubmit)=\"login()\">\n\t\t<div class=\"input-group col\">\n\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"email\" name=\"name\">\n\t\t</div>\n\t\t<div class=\"input-group col\">\n\t\t  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"password\" name=\"pass\">\n\t\t</div>\n\t\t<button type=\"submit\" class=\"btn btn-sm btn-outline-primary d-block\">Login</button>\n\t\t<button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-space\" (click)=\"open(content)\">SignUp</button>\n\t</form>\n\n\n\t<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\t  <div class=\"modal-header\">\n\t    <h4 class=\"modal-title\">Sign Up</h4>\n\t    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d()\">\n\t      <span aria-hidden=\"true\">&times;</span>\n\t    </button>\n\t  </div>\n\n\t  <div class=\"modal-body\">\n\t    <form>\n\t\t\t<div class=\"form-group col-8 mx-auto\">\n\t\t\t  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"newEmail\" name=\"name\">\n\t\t\t</div>\n\t\t\t<br>\n\t\t\t<div class=\"form-group col-8 mx-auto\">\n\t\t\t  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"newPassword\" name=\"pass\">\n\t\t\t</div>\n\t\t</form>\n\t  </div>\n\n\t  <div class=\"modal-footer\" style=\"justify-content: center;\">\n\t    <button type=\"submit\" class=\"btn btn-outline-dark\" (click)=\"signup()\">SignUp</button>\n\t  </div>\n\t</ng-template>\n\n\t\n</ng-template>\n<ng-template #LOGOUT>\n\t<span class=\"text-muted\">Logged in as {{user}}</span>\n\t<button class=\"btn btn-outline-primary\" (click)=\"logout()\">Logout</button>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(accountService, modalService) {
        this.accountService = accountService;
        this.modalService = modalService;
        this.status = "temp";
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.user = '';
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getStatus()
            .subscribe(function (res) {
            console.log('status:', res);
            if (res.user) {
                _this.status = 'login';
                _this.user = 'res.user';
            }
            else
                _this.status = 'temp';
            _this.onChange.emit(_this.status);
        });
    };
    AccountComponent.prototype.open = function (content) {
        this.signUpWindow = this.modalService.open(content);
    };
    AccountComponent.prototype.login = function () {
        var _this = this;
        console.log('login:', this.email, ' pass:', this.password);
        this.accountService.login(this.email, this.password)
            .subscribe(function (res) {
            console.log('login result:', res);
            if (res.success == "success") {
                _this.status = "login";
                _this.onChange.emit('login');
                _this.user = _this.email;
                _this.email = '';
                _this.password = '';
            }
        });
    };
    AccountComponent.prototype.signup = function () {
        var _this = this;
        console.log('signup', this.newEmail, ' pass:', this.newPassword);
        this.accountService.signup(this.newEmail, this.newPassword)
            .subscribe(function (res) {
            console.log('signup result:', res);
            if (res.success == "success") {
                _this.status = "login";
                _this.modalService;
                _this.signUpWindow.close();
                _this.onChange.emit('login');
                _this.user = _this.newEmail;
                _this.newEmail = '';
                _this.newPassword = '';
            }
        });
    };
    AccountComponent.prototype.logout = function () {
        var _this = this;
        console.log('logout', this.user);
        this.accountService.logout()
            .subscribe(function (res) {
            console.log('logout result:', res);
            _this.status = "logout";
            _this.onChange.emit('logout');
        });
    };
    return AccountComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], AccountComponent.prototype, "onChange", void 0);
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'account',
        template: __webpack_require__("../../../../../src/app/components/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _b || Object])
], AccountComponent);

var _a, _b;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/date-list/date-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inline {\n\tdisplay: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/date-list/date-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ngb-datepicker #dp [(ngModel)]=\"model\" (ngModelChange)=\"switchDate($event)\"></ngb-datepicker>  -->\n<div class=\"mx-auto\">\n\t<button class=\"btn btn-sm btn-light\" (click)=\"lastDay()\">Prev Day</button>\n\t<form class=\"form-inline inline col col-4\">\n\t  <div class=\"form-group\">\n\t    <div class=\"input-group\">\n\t      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n\t             name=\"dp\" [(ngModel)]=\"model\" (ngModelChange)=\"switchDate($event)\" ngbDatepicker #d=\"ngbDatepicker\" >\n\t      <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n\t        <img src=\"assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n\t      </button>\n\t    </div>\n\t  </div>\n\t</form>\n\t<button class=\"btn btn-sm btn-light\" (click)=\"nextDay()\">Next Day</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/date-list/date-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateListComponent = (function () {
    function DateListComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DateListComponent.prototype.ngOnInit = function () {
        this.today();
    };
    DateListComponent.prototype.switchDate = function (date) {
        // console.log("date:", date);
        this.onChange.emit(new Date(date.year, date.month - 1, date.day + 1).toISOString().slice(0, 10));
    };
    DateListComponent.prototype.today = function () {
        var now = new Date();
        this.model = {
            year: now.getFullYear(),
            month: now.getMonth() + 1,
            day: now.getDate()
        };
        this.switchDate(this.model);
    };
    DateListComponent.prototype.nextDay = function () {
        var nextD = new Date(this.model.year, this.model.month - 1, this.model.day);
        // console.log('before-',nextD);
        nextD.setDate(nextD.getDate() + 1);
        // console.log('after-',nextD);
        this.model = {
            year: nextD.getFullYear(),
            month: nextD.getMonth() + 1,
            day: nextD.getDate()
        };
        this.switchDate(this.model);
    };
    DateListComponent.prototype.lastDay = function () {
        var nextD = new Date(this.model.year, this.model.month - 1, this.model.day);
        // console.log('before-',nextD);
        nextD.setDate(nextD.getDate() - 1);
        // console.log('after-',nextD);
        this.model = {
            year: nextD.getFullYear(),
            month: nextD.getMonth() + 1,
            day: nextD.getDate()
        };
        this.switchDate(this.model);
    };
    return DateListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], DateListComponent.prototype, "onChange", void 0);
DateListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'date-list',
        template: __webpack_require__("../../../../../src/app/components/date-list/date-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/date-list/date-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DateListComponent);

//# sourceMappingURL=date-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/done-list/done-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-mini {\n    padding: 2px 6px;\n    font-size: 11px;\n    line-height: 13px;\n}\n.list-group-item {\n\tborder-right: none;\n\tborder-left: none;\n}\n\n.btn-space {\n    margin-right: 5px;\n}\n\n.bottom {\n\tposition: absolute;\n\tbottom: 0px;\n}\n.transparent {\n\topacity: 0.8;\n}\n.gray {\n\tcolor: gray;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/done-list/done-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Done List\n\t<span class=\"badge badge-primary badge-pill\">{{tasksList.length}}</span>\n</h2>\n\n<div *ngIf=\"isLoaded;then content else loading\">here is ignored</div>\n    \n<ng-template #content>\n\t<ul class=\"list-group\" *ngIf=\"tasksList.length>0;else empty\"> \n\t\t<li class=\"list-group-item list-group-item-action\" *ngFor=\"let task of tasksList;let i=index; \">\n\t\t\t<span class=\"font-weight-bold\">{{i+1}}.</span>\n\t\t\t<span>{{task.name}}</span>\n\t\t\t<button type=\"button\" class=\"btn btn-warning btn-mini float-right\" (click) = \"delete(i,task)\">\n\t\t\t\t<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</li>\n\t</ul>\n</ng-template>\n\n<ng-template #empty>\n\t<div class=\"text-secondary text-center\" style=\"height: 20rem; line-height: 20rem;\">No Item Yet!</div>\n</ng-template>\n\n<ng-template #loading>\n\t<div class=\"text-secondary text-center\" style=\"height: 20rem; line-height: 20rem\">loading...</div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/done-list/done-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoneListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoneListComponent = (function () {
    function DoneListComponent(tasksService) {
        this.tasksService = tasksService;
    }
    DoneListComponent.prototype.ngOnInit = function () {
    };
    DoneListComponent.prototype.delete = function (index, task) {
        this.tasksList.splice(index, 1);
        if (task._id) {
            this.tasksService.deleteTask(task._id);
        }
    };
    return DoneListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], DoneListComponent.prototype, "tasksList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], DoneListComponent.prototype, "isLoaded", void 0);
DoneListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'done-list',
        template: __webpack_require__("../../../../../src/app/components/done-list/done-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/done-list/done-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tasks_service__["a" /* TasksService */]) === "function" && _a || Object])
], DoneListComponent);

var _a;
//# sourceMappingURL=done-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/progress-bar/progress-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gray {\n\tcolor: gray;\n}\n.small {\n\tfont-size: 0.5em;\n}\nprogress {\n\tvertical-align: middle;\n\tdisplay: inline;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"gray small\">Progress: </span>\n<progress [value]=\"progress\" max=\"100\" style=\"height: 3em; width: 10em\" ></progress>\n<span class=\"align-middle gray small\">{{progress}}%</span>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.undone = 0;
        this.done = 0;
        this.progress = 0;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    ProgressBarComponent.prototype.ngOnChanges = function (changes) {
        // console.log('change!');
        this.undone = this.undone || 0;
        this.done = this.done || 0;
        if (this.undone + this.done == 0)
            this.progress = 0;
        else
            this.progress = Math.floor(this.done / (this.undone + this.done) * 100);
    };
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "undone", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "done", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'progress-bar',
        template: __webpack_require__("../../../../../src/app/components/progress-bar/progress-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/progress-bar/progress-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "date-list {\n\t\n}\n\nprogress-bar {\n\n}\n\nto-do-list, done-list {\n\n}\n.inline {\n\tdisplay: inline-block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<date-list class='mx-auto col' (onChange)=\"switchDate($event)\"></date-list>\n\t\t<progress-bar class='col float-right' [undone]=\"toDoList.length\" [done]=\"doneList.length\"></progress-bar>\n\t</div>\n\t<br>\n\n\t<div class=\"row\">\n\t\t<to-do-list class='col-12 col-lg-6' [tasksList]=\"toDoList\" [isLoaded]=\"isLoaded_todo\" (onDone)=\"onDone($event)\"></to-do-list>\n\n\t\t<done-list class='col-12 col-lg-6' [tasksList]=\"doneList\" [isLoaded]=\"isLoaded_done\"></done-list>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_list_date_list_component__ = __webpack_require__("../../../../../src/app/components/date-list/date-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TasksComponent = (function () {
    function TasksComponent(tasksService) {
        this.tasksService = tasksService;
        this.status = 'temp';
        this.toDoList = [];
        this.doneList = [];
        this.isLoaded_todo = true;
        this.isLoaded_done = true;
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent.prototype.ngOnChanges = function (changes) {
        console.log('change:', changes);
        this.tasksService.setStatus(this.status);
        this.dateList.today();
    };
    TasksComponent.prototype.freshTodo = function () { this.isLoaded_todo = false; this.toDoList = []; };
    TasksComponent.prototype.freshDone = function () { this.isLoaded_done = false; this.toDoList = []; };
    TasksComponent.prototype.finishTodo = function (tasks) {
        if (this.isLoaded_todo == false) {
            this.isLoaded_todo = true;
            this.toDoList = tasks;
        }
    };
    TasksComponent.prototype.finishDone = function (tasks) {
        if (this.isLoaded_done == false) {
            this.isLoaded_done = true;
            this.doneList = tasks;
        }
    };
    TasksComponent.prototype.switchDate = function (newDate) {
        var _this = this;
        console.log('switch date to ', newDate);
        if (this.status != 'login') {
            this.toDoList = [];
            this.doneList = [];
            return;
        }
        this.tasksService.switchDate(newDate);
        // update to do list
        this.freshTodo();
        this.tasksService.getTasksByDate(newDate, false).subscribe(function (tasks) {
            _this.finishTodo(tasks);
            console.log('to do list:', _this.toDoList);
        }, function (error) {
            _this.finishTodo([]);
            console.log('error get to-do list');
        });
        // update done list
        this.freshDone();
        this.tasksService.getTasksByDate(newDate, true).subscribe(function (tasks) {
            _this.finishDone(tasks);
            console.log('done list:', _this.doneList);
        }, function (error) {
            _this.finishDone([]);
            console.log('error get done list');
        });
    };
    TasksComponent.prototype.onDone = function (task) {
        this.doneList.push(task);
    };
    return TasksComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], TasksComponent.prototype, "status", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__date_list_date_list_component__["a" /* DateListComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__date_list_date_list_component__["a" /* DateListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__date_list_date_list_component__["a" /* DateListComponent */]) === "function" && _a || Object)
], TasksComponent.prototype, "dateList", void 0);
TasksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tasks',
        template: __webpack_require__("../../../../../src/app/components/tasks/tasks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tasks/tasks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */]) === "function" && _b || Object])
], TasksComponent);

var _a, _b;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/to-do-list/to-do-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gray {\n\tcolor: gray;\n}\n.btn-mini {\n    padding: 2px 6px;\n    font-size: 11px;\n    line-height: 13px;\n}\n.list-group-item {\n\tborder-right: none;\n\tborder-left: none;\n}\n\n.btn-space {\n    margin-right: 5px;\n}\n\n.bottom {\n\tposition: absolute;\n\tbottom: 0px;\n}\n.transparent {\n\topacity: 0.8;\n}\n.min-height {\n\tmin-height: 25em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/to-do-list/to-do-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">To Do List\n\t<span class=\"badge badge-primary badge-pill\">{{tasksList.length}}</span>\n</h2>\n<div *ngIf=\"isLoaded;then content else loading\">here is ignored</div>\n    \n<ng-template #content>\n\t<ul class=\"list-group min-height\" *ngIf=\"tasksList.length>0;else empty\">\n\t\t<li class=\"list-group-item list-group-item-action\" *ngFor=\"let task of tasksList;let i=index; \">\n\t\t\t<span class=\"font-weight-bold\">{{i+1}}.</span>\n\t\t\t<span>{{task.name}}</span>\n\t\t\t<span class=\"float-right transparent\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-mini\" (click)=\"prior(i,task)\">\n\t\t\t\t  <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-info btn-mini\" (click)=\"unprior(i,task)\">\n\t\t\t\t  <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\n\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-mini\" (click) = \"done(i,task)\">\n\t\t\t\t\t<i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-mini\" (click) = \"delete(i,task)\">\n\t\t\t\t\t<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</span>\n\t\t</li>\n\t</ul>\n</ng-template>\n\n<ng-template #empty>\n\t<div class=\"text-secondary text-center min-height\" style=\"height: 20rem; line-height: 20rem;\">No Item Yet!</div>\n</ng-template>\n\n<ng-template #loading>\n\t<div class=\"text-secondary text-center min-height\" style=\"height: 20rem; line-height: 20rem\">loading...</div>\n</ng-template>\n\n<br>\n<div class=\"input-group\">\n\t<input type=\"text\" class=\"form-control\" placeholder=\"Add To Do Item...\" #input (keyup.enter)=\"add(input.value);input.value=null;\"/>\n\t<span class=\"input-group-btn\">\n\t\t<button class=\"btn btn-primary\" (click) = \"add(input.value);input.value=null;\">Add</button>\n\t</span>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/to-do-list/to-do-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_Task__ = __webpack_require__("../../../../../src/app/data/Task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__ = __webpack_require__("../../../../../src/app/services/tasks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToDoListComponent = (function () {
    function ToDoListComponent(tasksService) {
        this.tasksService = tasksService;
        this.onDone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ToDoListComponent.prototype.ngOnInit = function () {
    };
    ToDoListComponent.prototype.add = function (name) {
        if (name.trim('')) {
            var newTask = this.tasksService.createNewTask(name);
            if (this.tasksList.length > 0) {
                newTask.priority = this.tasksList[this.tasksList.length - 1].priority + 1;
            }
            this.tasksList.push(newTask);
            this.tasksService.addTask(newTask);
        }
    };
    ToDoListComponent.prototype.prior = function (index, task) {
        if (index > 0) {
            var temp = this.tasksList[index];
            var tempP = temp.priority;
            // swap priority
            temp.priority = this.tasksList[index - 1].priority;
            this.tasksList[index - 1].priority = tempP;
            // swap position in array
            this.tasksList[index] = this.tasksList[index - 1];
            this.tasksList[index - 1] = temp;
            this.tasksService.updatePriority(this.tasksList[index]);
            this.tasksService.updatePriority(this.tasksList[index - 1]);
        }
    };
    ToDoListComponent.prototype.unprior = function (index, task) {
        if (index < this.tasksList.length - 1) {
            var temp = this.tasksList[index];
            var tempP = temp.priority;
            // swap priority
            temp.priority = this.tasksList[index + 1].priority;
            this.tasksList[index + 1].priority = tempP;
            // swap position in array
            this.tasksList[index] = this.tasksList[index + 1];
            this.tasksList[index + 1] = temp;
            this.tasksService.updatePriority(this.tasksList[index]);
            this.tasksService.updatePriority(this.tasksList[index + 1]);
        }
    };
    ToDoListComponent.prototype.delete = function (index, task) {
        this.tasksList.splice(index, 1);
        if (task._id) {
            this.tasksService.deleteTask(task._id);
        }
    };
    ToDoListComponent.prototype.done = function (index, task) {
        this.tasksList.splice(index, 1);
        // Object.assign(new Task, task);
        Object.setPrototypeOf(task, __WEBPACK_IMPORTED_MODULE_1__data_Task__["a" /* Task */].prototype);
        task.done();
        this.onDone.emit(task);
        console.log('to-do-list component: done task');
        this.tasksService.doneTask(task);
    };
    return ToDoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ToDoListComponent.prototype, "tasksList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ToDoListComponent.prototype, "onDone", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], ToDoListComponent.prototype, "isLoaded", void 0);
ToDoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'to-do-list',
        template: __webpack_require__("../../../../../src/app/components/to-do-list/to-do-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/to-do-list/to-do-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tasks_service__["a" /* TasksService */]) === "function" && _a || Object])
], ToDoListComponent);

var _a;
//# sourceMappingURL=to-do-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/data/Task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(name, myDate) {
        this.priority = -1;
        var now = new Date();
        var month = now.getMonth();
        var date = now.getDate();
        this.date = myDate;
        this.name = name;
        this.priority = 0;
        this.createdTime = now.getTime();
        this.isDone = false;
        this.doneTime = null;
        this.timeCost = -1;
        // console.log(this.date);
    }
    Task.prototype.done = function () {
        this.isDone = true;
        this.doneTime = new Date().getTime();
        this.timeCost = Math.floor((this.doneTime - this.createdTime) / 1000 / 60);
    };
    return Task;
}());

//# sourceMappingURL=Task.js.map

/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getStatus = function () {
        return this.http.get('/account/check')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.login = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/account/login', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.signup = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/account/signup', JSON.stringify({ email: email, password: password }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.logout = function () {
        console.log('going to send logout request');
        return this.http.get('/account/logout')
            .map(function (res) { return res.json(); });
    };
    return AccountService;
}());
AccountService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AccountService);

var _a;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tasks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Task__ = __webpack_require__("../../../../../src/app/data/Task.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this.status = 'temp';
        this.toDoList = [];
        this.doneList = [];
        this.currentDate = new Date().toISOString().slice(0, 10);
    }
    TasksService.prototype.getCurrentDate = function () {
        return this.currentDate;
    };
    TasksService.prototype.switchDate = function (newDate) {
        this.currentDate = newDate;
    };
    TasksService.prototype.setStatus = function (newStatus) {
        this.status = newStatus;
    };
    TasksService.prototype.createNewTask = function (name) {
        return new __WEBPACK_IMPORTED_MODULE_4__data_Task__["a" /* Task */](name, this.currentDate);
    };
    TasksService.prototype.addTask = function (newTask) {
        if (this.status == 'login') {
            // Send post request
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            console.log('going to add task:', newTask.name);
            this.http.post('/api/task', JSON.stringify(newTask), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (id) {
                console.log('get result:', id);
                newTask._id = id;
            });
            ;
        }
    };
    TasksService.prototype.getTasksByDate = function (date, isDone) {
        console.log('get tasks by date');
        return this.http.get('/api/tasks?date=' + date + '&isDone=' + isDone)
            .map(function (res) { return res.json(); });
    };
    TasksService.prototype.deleteTask = function (id) {
        if (id && this.status == 'login') {
            return this.http.delete('/api/task/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                console.log('task deleted:', res);
            });
        }
    };
    TasksService.prototype.doneTask = function (task) {
        console.log('task service - doneTask:', task.name);
        if (this.status == 'login') {
            if (task.isDone) {
                var updateTask = {
                    isDone: task.isDone,
                    doneTime: task.doneTime,
                    timeCost: task.timeCost
                };
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                this.http.put('/api/task/' + task._id, JSON.stringify(updateTask), { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (res) {
                    console.log('update priority:', task.name);
                });
            }
        }
    };
    TasksService.prototype.updatePriority = function (task) {
        if (this.status == 'login') {
            var updateTask = {
                priority: task.priority
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            return this.http.put('/api/task/' + task._id, JSON.stringify(updateTask), { headers: headers })
                .map(function (res) { return res.json(); });
        }
    };
    return TasksService;
}());
TasksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TasksService);

var _a;
//# sourceMappingURL=tasks.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map