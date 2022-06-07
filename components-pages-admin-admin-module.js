(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pages-admin-admin-module"],{

/***/ "6JcC":
/*!********************************************************!*\
  !*** ./src/app/components/pages/admin/admin.module.ts ***!
  \********************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-product/form-product.component */ "OqBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.component */ "Hka1");
/* harmony import */ var _types_types_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/types.component */ "CslX");










const routes = [
    {
        path: "formProduct/:type", component: _form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__["FormProductComponent"]
    },
    {
        path: "products", component: _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
    },
    {
        path: "types", component: _types_types_component__WEBPACK_IMPORTED_MODULE_7__["TypesComponent"]
    }
];
class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__["FormProductComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
        _types_types_component__WEBPACK_IMPORTED_MODULE_7__["TypesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _form_product_form_product_component__WEBPACK_IMPORTED_MODULE_4__["FormProductComponent"],
                    _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
                    _types_types_component__WEBPACK_IMPORTED_MODULE_7__["TypesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CslX":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/admin/types/types.component.ts ***!
  \*****************************************************************/
/*! exports provided: TypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesComponent", function() { return TypesComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function TypesComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypesComponent_ng_template_37_Template_button_click_1_listener() { const modal_r2 = ctx.$implicit; return modal_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.titleFormType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.nameType)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r1.nameType.valid, ctx_r1.nameType.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r1.nameType.invalid);
} }
class TypesComponent {
    constructor(ngbModal) {
        this.ngbModal = ngbModal;
    }
    ngOnInit() {
    }
    openFormType(content, typeData) {
        this.titleFormType = typeData ? "Editar tipo" : "Crear tipo";
        this.nameType = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20)]);
        this.ngbModal.open(content, { size: "lg" });
    }
}
TypesComponent.ɵfac = function TypesComponent_Factory(t) { return new (t || TypesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"])); };
TypesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TypesComponent, selectors: [["app-types"]], decls: 39, vars: 0, consts: [[1, "container"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-arrow-left"], [1, "row", "mt-3"], [1, "col-12"], [1, "card", "card-body"], [1, "fa-solid", "fa-filter"], [1, "col-12", "col-md-6"], [1, "input-group"], ["type", "search", "placeholder", "Buscar por nombre", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-magnifying-glass"], ["type", "button", 1, "btn", "btn-outline-success", "mt-3", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "card", "card-body", "mt-3"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover"], ["type", "button", 1, "btn", "btn-outline-success", "rounded-circle", 3, "click"], [1, "fa-solid", "fa-pencil"], ["formTypeMD", ""], [1, "modal-body"], ["type", "button", 1, "close", 3, "click"], [1, "fa-solid", "fa-circle-xmark", "text-danger"], [1, "fa-solid", "fa-dolly"], [1, "row", "mt-4"], ["src", "assets/ilustrations/save.svg", "alt", "", 1, "img-fluid"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Nombre", 1, "form-control", 3, "formControl", "ngClass"], ["type", "button", 1, "btn", "btn-outline-success", "btn-block", "mt-3", 3, "disabled"], [1, "fa-solid", "fa-floppy-disk"]], template: function TypesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypesComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38); return ctx.openFormType(_r0, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Crear tipo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Tornilleria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TypesComponent_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38); return ctx.openFormType(_r0, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TypesComponent_ng_template_37_Template, 16, 7, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vdHlwZXMvdHlwZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TypesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-types',
                templateUrl: './types.component.html',
                styleUrls: ['./types.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






class ProductService {
    constructor(http) {
        this.http = http;
        this.endPointBase = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].backEndPoint + "/api/product";
        this.endPointBaseType = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].backEndPoint + "/api/type";
    }
    findById(productId) {
        return this.http.get(this.endPointBase + "/getById/" + productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    getAllTypes() {
        return this.http.get(this.endPointBaseType + "/getAll").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    find(name, page, size) {
        return this.http.get(this.endPointBase + "/find/" + name + "/" + page + "/" + size).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    create(product) {
        return this.http.post(this.endPointBase + "/create", product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Hka1":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/admin/products/products.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../loading/loading.component */ "qQYQ");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../messages/messages.component */ "wa57");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










function ProductsComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Ingresa maximo 100 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductsComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.ngOnInit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Limpiar busqueda: ", ctx_r1.name.value, "");
} }
const _c0 = function () { return ["/admin/formProduct/", "update"]; };
const _c1 = function (a0) { return { productId: a0 }; };
function ProductsComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("                    ", product_r5.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r5.units + " " + product_r5.unitType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, product_r5.id));
} }
const _c2 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
class ProductsComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.isCleanSearch = false;
        this.initPageable();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100));
        this.findProduct("all");
    }
    pageChange() {
        this.findProduct("all");
    }
    search() {
        this.initPageable();
        let name = this.name.value != "" ? this.name.value : "all";
        this.isCleanSearch = this.name.value != "";
        this.findProduct(name);
    }
    initPageable() {
        this.pageable = {
            page: 1,
            size: 10,
            totalElements: 0,
            totalPages: 0
        };
    }
    findProduct(name) {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
        this.productService.find(name, this.pageable.page, this.pageable.size).subscribe(response => {
            this.products = response.content;
            this.pageable.totalElements = response.totalElements;
            this.pageable.totalPages = response.totalPages;
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
        }, error => {
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 43, vars: 12, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "card-body"], [1, "fa-solid", "fa-filter"], [1, "row", "mt-3"], [1, "col-12", "col-md-6"], [1, "input-group"], ["type", "search", "placeholder", "Buscar por nombre o referencia", 1, "form-control", 3, "ngClass", "formControl"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-success", 3, "disabled", "click"], [1, "fa-solid", "fa-magnifying-glass"], ["class", "text-danger", 4, "ngIf"], ["class", "text-danger", 3, "click", 4, "ngIf"], [1, "w-100"], [1, "btn-group", "mt-3"], ["routerLink", "/admin/formProduct/create", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-plus"], ["routerLink", "/admin/types", 1, "btn", "btn-outline-primary"], [1, "card", "card-body", "mt-3"], [1, "table-responsive"], [1, "table", "table-striped", "table-hover", "text-center"], [4, "ngFor", "ngForOf"], ["size", "md", "aria-label", "Default pagination", 1, "d-flex", "justify-content-center", "mt-3", 3, "pageSize", "collectionSize", "page", "pageChange"], [1, "text-danger"], [1, "fa-solid", "fa-circle-exclamation"], [1, "text-danger", 3, "click"], [1, "fa-solid", "fa-trash"], ["cols", "1", "rows", "2", 1, "form-control", 3, "disabled"], ["title", "Editar producto", 1, "btn", "btn-outline-primary", "rounded-circle", 3, "routerLink", "queryParams"], [1, "fa-solid", "fa-pencil"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Filtros");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_12_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ProductsComponent_p_14_Template, 3, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ProductsComponent_a_15_Template, 3, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Crear producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Crear tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "No referencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Descripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Opciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ProductsComponent_tr_41_Template, 13, 10, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "ngb-pagination", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function ProductsComponent_Template_ngb_pagination_pageChange_42_listener() { return ctx.pageChange(); })("pageChange", function ProductsComponent_Template_ngb_pagination_pageChange_42_listener($event) { return ctx.pageable.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c2, ctx.name.valid, ctx.name.invalid))("formControl", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.name.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCleanSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pageSize", ctx.pageable.size)("collectionSize", ctx.pageable.totalElements)("page", ctx.pageable.page);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPagination"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "OqBg":
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/admin/form-product/form-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductComponent", function() { return FormProductComponent; });
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../loading/loading.component */ "qQYQ");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../messages/messages.component */ "wa57");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_objects_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/objects/product */ "avki");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function FormProductComponent_form_12_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa un codigo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa un nombre!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 50 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", type_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r17.name);
} }
function FormProductComponent_form_12_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selecciona un tipo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa una descripci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 200 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Selecciona un color!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_span_40_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_12_span_40_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const colour_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.deleteColour(colour_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colour_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-color: ", colour_r18.name, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", colour_r18.name, " ");
} }
function FormProductComponent_form_12_p_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa una unidad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 9 numeros!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa un tipo de unidad!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 20 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa una marca!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_p_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ingresa maximo 50 caracteres!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormProductComponent_form_12_span_62_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_12_span_62_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const brand_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.deleteBrand(brand_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", brand_r21.name, " ");
} }
const _c0 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function FormProductComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Seleccionar imagenes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FormProductComponent_form_12_p_10_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FormProductComponent_form_12_p_15_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FormProductComponent_form_12_p_16_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Tipos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FormProductComponent_form_12_option_23_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, FormProductComponent_form_12_p_24_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, FormProductComponent_form_12_p_29_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, FormProductComponent_form_12_p_30_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_12_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.addColour(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, FormProductComponent_form_12_p_39_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, FormProductComponent_form_12_span_40_Template, 4, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Unidades");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, FormProductComponent_form_12_p_48_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, FormProductComponent_form_12_p_49_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, FormProductComponent_form_12_p_50_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, FormProductComponent_form_12_p_51_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Marcas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_12_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.addBrand(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, FormProductComponent_form_12_p_60_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, FormProductComponent_form_12_p_61_Template, 3, 0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, FormProductComponent_form_12_span_62_Template, 4, 1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormProductComponent_form_12_Template_button_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](27, _c0, ctx_r0.formProduct.get("code").valid, ctx_r0.formProduct.get("code").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("code").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](30, _c0, ctx_r0.formProduct.get("name").valid, ctx_r0.formProduct.get("name").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("name").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](33, _c0, ctx_r0.formProduct.get("typeId").valid, ctx_r0.formProduct.get("typeId").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("typeId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](36, _c0, ctx_r0.formProduct.get("description").valid, ctx_r0.formProduct.get("description").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("description").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("description").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](39, _c0, ctx_r0.colours.length > 0, ctx_r0.colours.length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.colours.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.colours);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](42, _c0, ctx_r0.formProduct.get("units").valid, ctx_r0.formProduct.get("units").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](45, _c0, ctx_r0.formProduct.get("unitType").valid, ctx_r0.formProduct.get("unitType").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("units").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("units").hasError("max"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("unitType").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("unitType").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](48, _c0, ctx_r0.formProduct.get("brand").valid && ctx_r0.brands.length > 0, ctx_r0.formProduct.get("brand").invalid || ctx_r0.brands.length <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.formProduct.get("brand").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.brands.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.formProduct.get("brand").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.brands);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.formProduct.invalid || ctx_r0.colours.length <= 0 || ctx_r0.brands.length <= 0 || ctx_r0.formProduct.pristine);
} }
class FormProductComponent {
    constructor(productService, router, activatedRoute) {
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.getTypes();
        this.typeForm = this.activatedRoute.snapshot.paramMap.get("type");
        if (this.typeForm === "create") {
            this.title = "Crear producto";
            this.colours = [];
            this.brands = [];
            this.formProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
                units: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(999999999)]),
                unitType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
                code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                colour: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
                brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)),
                typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
        }
        else if (this.typeForm === "update") {
            let productId = Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("productId"));
            if (productId) {
                this.title = "Editar producto";
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
                this.productService.findById(productId).subscribe(response => {
                    this.colours = response.colours;
                    this.brands = response.brands;
                    this.formProduct = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)]),
                        description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
                        units: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.units, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(999999999)]),
                        unitType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.unitType, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20)]),
                        code: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.product.code, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                        colour: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
                        brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50)),
                        typeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](response.productType.id, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
                    });
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
                }, error => {
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
                });
            }
        }
    }
    getTypes() {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
        this.productService.getAllTypes().subscribe(response => {
            this.types = response;
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
        }, error => {
            _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
        });
    }
    create() {
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = true;
        if (this.typeForm === "create") {
            this.productService.create(new src_app_objects_product__WEBPACK_IMPORTED_MODULE_5__["Product"](this.formProduct.getRawValue(), this.colours, this.brands)).subscribe(response => {
                this.ngOnInit();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Producto guardado!", "", "success");
                this.router.navigate(["/admin/products"]);
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
            }, error => {
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_1__["MessagesComponent"].errorMessage(error);
            });
        }
        else if (this.typeForm === "update") {
            _loading_loading_component__WEBPACK_IMPORTED_MODULE_0__["LoadingComponent"].isActive = false;
        }
    }
    deleteColour(colour) {
        for (let i = 0; i < this.colours.length; i++) {
            if (this.colours[i].name === colour.name) {
                this.colours.splice(i, 1);
            }
        }
    }
    addColour() {
        if (this.formProduct.get("colour").value != "") {
            let result = this.colours.filter(b => b.name === this.formProduct.get("colour").value);
            if (result.length === 0) {
                this.colours.push({ id: 1, name: this.formProduct.get("colour").value });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Ya seleccionaste este color!", "", "info");
            }
        }
    }
    addBrand() {
        if (this.formProduct.get("brand").value != "") {
            let result = this.brands.filter(b => b.name === this.formProduct.get("brand").value);
            if (result.length === 0) {
                this.brands.push({ id: 1, name: this.formProduct.get("brand").value });
                this.formProduct.get("brand").reset();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("¡Esta marca ya esta agregada!", "", "info");
            }
        }
    }
    deleteBrand(brand) {
        for (let i = 0; i < this.brands.length; i++) {
            if (this.brands[i].name === brand.name) {
                this.brands.splice(i, 1);
            }
        }
    }
}
FormProductComponent.ɵfac = function FormProductComponent_Factory(t) { return new (t || FormProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
FormProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormProductComponent, selectors: [["app-form-product"]], decls: 13, vars: 2, consts: [[1, "container"], ["routerLink", "/admin/products", 1, "btn", "btn-outline-success"], [1, "fa-solid", "fa-arrow-left"], [1, "row", "align-items-center"], [1, "col-12", "col-md-6"], ["src", "assets/ilustrations/save.svg", "alt", "", 1, "img-fluid"], [1, "card", "card-body"], [1, "fa-solid", "fa-box"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-12"], ["for", "image"], ["type", "file", "accept", "image/*", "multiple", "", "id", "image", 1, "form-control"], ["for", "code"], ["type", "text", "formControlName", "code", "placeholder", "#", "id", "code", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", "Nombre", "id", "name", 1, "form-control", 3, "ngClass"], ["for", "type"], ["formControlName", "typeId", "id", "type", 1, "custom-select", 3, "ngClass"], ["value", "null", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["id", "description", "formControlName", "description", "cols", "5", "rows", "3", "placeholder", "Descripci\u00F3n", 1, "form-control", 3, "ngClass"], ["for", "colour"], [1, "input-group"], ["type", "color", "formControlName", "colour", "id", "colour", 1, "form-control", 3, "ngClass"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-success", 3, "click"], [1, "fa-solid", "fa-floppy-disk"], ["class", "badge mr-1", 3, "style", 4, "ngFor", "ngForOf"], ["for", "units"], ["type", "number", "id", "units", "formControlName", "units", "placeholder", "Unidades", 1, "form-control", 3, "ngClass"], ["type", "text", "id", "unitType", "formControlName", "unitType", "placeholder", "Tipo de unidad", 1, "form-control", 3, "ngClass"], ["for", "brands"], ["type", "text", "formControlName", "brand", "id", "brands", "placeholder", "Marcas", 1, "form-control", 3, "ngClass"], ["type", "button", 1, "btn", "btn-outline-success", 3, "disabled", "click"], ["class", "badge badge-primary mr-1", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-success", "mt-3", 3, "disabled", "click"], [1, "text-danger"], [1, "fa-solid", "fa-circle-exclamation"], [3, "value"], [1, "badge", "mr-1"], [1, "text-danger", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "badge", "badge-primary", "mr-1"]], template: function FormProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Regresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FormProductComponent_form_12_Template, 67, 51, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formProduct);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4vZm9ybS1wcm9kdWN0L2Zvcm0tcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FormProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-form-product',
                templateUrl: './form-product.component.html',
                styleUrls: ['./form-product.component.css']
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "avki":
/*!************************************!*\
  !*** ./src/app/objects/product.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(productForm, colours, brands) {
        this.images = [1, 2];
        this.code = productForm.code;
        this.name = productForm.name;
        this.description = productForm.description;
        this.colours = colours;
        this.units = productForm.units;
        this.unitType = productForm.unitType;
        this.brands = brands;
        this.typeId = productForm.typeId;
    }
}


/***/ })

}]);
//# sourceMappingURL=components-pages-admin-admin-module.js.map