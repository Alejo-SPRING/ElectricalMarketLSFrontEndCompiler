(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6JcC":function(e,t,i){"use strict";i.r(t),i.d(t,"AdminModule",(function(){return ce}));var a=i("G0yt"),n=i("SVse"),c=i("iInd"),r=i("qQYQ"),o=i("wa57"),s=i("s7LF"),b=i("PSD3"),l=i.n(b);class d{constructor(e,t,i){this.images=[1,2],this.code=e.code,this.name=e.name,this.description=e.description,this.colours=t,this.minimumSale=e.minimumSale,this.packBy=e.packBy,this.brands=i,this.typeId=e.typeId}}var u=i("8Y7J"),p=i("Gdn9");const g=["carousel"];function m(e,t){if(1&e){const e=u.Pb();u.Ob(0,"div",7),u.Ob(1,"div",14),u.Ob(2,"button",15),u.Zb("click",(function(){u.pc(e);const t=u.bc().$implicit;return u.bc(2).deleteImage(t.id)})),u.Kb(3,"i",16),u.yc(4," Eliminar"),u.Nb(),u.Kb(5,"img",17),u.Nb(),u.Nb()}if(2&e){const e=u.bc(),t=e.index,i=e.$implicit;u.xb(5),u.ic("alt","My image ",t+1," description"),u.gc("src",i.url,u.qc)}}function f(e,t){1&e&&u.wc(0,m,6,2,"ng-template",13)}function h(e,t){if(1&e){const e=u.Pb();u.Ob(0,"ngb-carousel",10,11),u.Zb("slide",(function(t){return u.pc(e),u.bc().onSlide(t)})),u.wc(2,f,1,0,void 0,12),u.Nb()}if(2&e){const e=u.bc();u.gc("interval",1e3)("pauseOnHover",e.pauseOnHover)("pauseOnFocus",e.pauseOnFocus),u.xb(2),u.gc("ngForOf",e.imagesResponse)}}function y(e,t){if(1&e&&(u.Ob(0,"div",52),u.Ob(1,"small",53),u.yc(2),u.Nb(),u.Nb()),2&e){const e=t.$implicit;u.xb(2),u.zc(e.name)}}function O(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Selecciona una imagen!"),u.Nb())}function v(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa un codigo!"),u.Nb())}function N(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa un nombre!"),u.Nb())}function x(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa maximo 50 caracteres!"),u.Nb())}function w(e,t){if(1&e&&(u.Ob(0,"option",56),u.yc(1),u.Nb()),2&e){const e=t.$implicit;u.hc("value",e.id),u.xb(1),u.zc(e.name)}}function I(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Selecciona un tipo!"),u.Nb())}function C(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa una descripci\xf3n!"),u.Nb())}function P(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa maximo 200 caracteres!"),u.Nb())}function k(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Selecciona un color!"),u.Nb())}function K(e,t){if(1&e){const e=u.Pb();u.Ob(0,"span",57),u.yc(1),u.Ob(2,"a",58),u.Zb("click",(function(){u.pc(e);const i=t.$implicit;return u.bc(2).deleteColour(i)})),u.Kb(3,"i",59),u.Nb(),u.Nb()}if(2&e){const e=t.$implicit;u.uc("background-color: ",e.name,";"),u.xb(1),u.Ac("",e.name," ")}}function S(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa una unidad!"),u.Nb())}function T(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa maximo 100 caracteres!"),u.Nb())}function F(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa un tipo de unidad!"),u.Nb())}function B(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa maximo 100 caracteres!"),u.Nb())}function A(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa una marca!"),u.Nb())}function q(e,t){1&e&&(u.Ob(0,"p",54),u.Kb(1,"i",55),u.yc(2," Ingresa maximo 50 caracteres!"),u.Nb())}function z(e,t){if(1&e){const e=u.Pb();u.Ob(0,"span",60),u.yc(1),u.Ob(2,"a",58),u.Zb("click",(function(){u.pc(e);const i=t.$implicit;return u.bc(2).deleteBrand(i)})),u.Kb(3,"i",59),u.Nb(),u.Nb()}if(2&e){const e=t.$implicit;u.xb(1),u.Ac("",e.name," ")}}const E=function(e,t){return{"is-valid":e,"is-invalid":t}};function R(e,t){if(1&e){const e=u.Pb();u.Ob(0,"form",18),u.Ob(1,"div",19),u.Ob(2,"div",20),u.Ob(3,"div",21),u.wc(4,y,3,1,"div",22),u.Nb(),u.Ob(5,"label",23),u.yc(6,"Seleccionar imagenes"),u.Nb(),u.Ob(7,"input",24),u.Zb("change",(function(t){return u.pc(e),u.bc().selectImages(t)})),u.Nb(),u.wc(8,O,3,0,"p",25),u.Nb(),u.Ob(9,"div",20),u.Ob(10,"label",26),u.yc(11,"Codigo"),u.Nb(),u.Kb(12,"input",27),u.wc(13,v,3,0,"p",25),u.Nb(),u.Ob(14,"div",20),u.Ob(15,"label",28),u.yc(16,"Nombre"),u.Nb(),u.Kb(17,"input",29),u.wc(18,N,3,0,"p",25),u.wc(19,x,3,0,"p",25),u.Nb(),u.Ob(20,"div",20),u.Ob(21,"label",30),u.yc(22,"Tipo"),u.Nb(),u.Ob(23,"select",31),u.Ob(24,"option",32),u.yc(25,"Tipos"),u.Nb(),u.wc(26,w,2,2,"option",33),u.Nb(),u.wc(27,I,3,0,"p",25),u.Nb(),u.Ob(28,"div",20),u.Ob(29,"label",34),u.yc(30,"Descripci\xf3n"),u.Nb(),u.Kb(31,"textarea",35),u.wc(32,C,3,0,"p",25),u.wc(33,P,3,0,"p",25),u.Nb(),u.Ob(34,"div",20),u.Ob(35,"label",36),u.yc(36,"Color"),u.Nb(),u.Ob(37,"div",37),u.Kb(38,"input",38),u.Ob(39,"div",39),u.Ob(40,"button",40),u.Zb("click",(function(){return u.pc(e),u.bc().addColour()})),u.Kb(41,"i",41),u.Nb(),u.Nb(),u.Nb(),u.wc(42,k,3,0,"p",25),u.wc(43,K,4,4,"span",42),u.Nb(),u.Ob(44,"div",20),u.Ob(45,"label",43),u.yc(46,"Venta minima"),u.Nb(),u.Kb(47,"input",44),u.wc(48,S,3,0,"p",25),u.wc(49,T,3,0,"p",25),u.Nb(),u.Ob(50,"div",20),u.Ob(51,"label",45),u.yc(52,"Empaque por"),u.Nb(),u.Kb(53,"input",46),u.wc(54,F,3,0,"p",25),u.wc(55,B,3,0,"p",25),u.Nb(),u.Ob(56,"div",20),u.Ob(57,"label",47),u.yc(58,"Marcas"),u.Nb(),u.Ob(59,"div",37),u.Kb(60,"input",48),u.Ob(61,"div",39),u.Ob(62,"button",49),u.Zb("click",(function(){return u.pc(e),u.bc().addBrand()})),u.Kb(63,"i",41),u.Nb(),u.Nb(),u.Nb(),u.wc(64,A,3,0,"p",25),u.wc(65,q,3,0,"p",25),u.wc(66,z,4,1,"span",50),u.Nb(),u.Ob(67,"div",20),u.Ob(68,"button",51),u.Zb("click",(function(){return u.pc(e),u.bc().create()})),u.Kb(69,"i",41),u.yc(70," Guardar"),u.Nb(),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=u.bc();u.gc("formGroup",e.formProduct),u.xb(4),u.gc("ngForOf",e.images),u.xb(4),u.gc("ngIf",e.images.length<=0&&"create"===e.typeForm),u.xb(4),u.gc("ngClass",u.lc(29,E,e.formProduct.get("code").valid,e.formProduct.get("code").invalid)),u.xb(1),u.gc("ngIf",e.formProduct.get("code").hasError("required")),u.xb(4),u.gc("ngClass",u.lc(32,E,e.formProduct.get("name").valid,e.formProduct.get("name").invalid)),u.xb(1),u.gc("ngIf",e.formProduct.get("name").hasError("required")),u.xb(1),u.gc("ngIf",e.formProduct.get("name").hasError("maxlength")),u.xb(4),u.gc("ngClass",u.lc(35,E,e.formProduct.get("typeId").valid,e.formProduct.get("typeId").invalid)),u.xb(3),u.gc("ngForOf",e.types),u.xb(1),u.gc("ngIf",e.formProduct.get("typeId").hasError("required")),u.xb(4),u.gc("ngClass",u.lc(38,E,e.formProduct.get("description").valid,e.formProduct.get("description").invalid)),u.xb(1),u.gc("ngIf",e.formProduct.get("description").hasError("required")),u.xb(1),u.gc("ngIf",e.formProduct.get("description").hasError("maxlength")),u.xb(5),u.gc("ngClass",u.lc(41,E,e.colours.length>0,e.colours.length<=0)),u.xb(4),u.gc("ngIf",e.colours.length<=0),u.xb(1),u.gc("ngForOf",e.colours),u.xb(4),u.gc("ngClass",u.lc(44,E,e.formProduct.get("minimumSale").valid,e.formProduct.get("minimumSale").invalid)),u.xb(1),u.gc("ngIf",e.formProduct.get("minimumSale").hasError("required")),u.xb(1),u.gc("ngIf",e.formProduct.get("minimumSale").hasError("maxlength")),u.xb(4),u.gc("ngClass",u.lc(47,E,e.formProduct.get("packBy").valid,e.formProduct.get("packBy").invalid)),u.xb(1),u.gc("ngIf",e.formProduct.get("packBy").hasError("required")),u.xb(1),u.gc("ngIf",e.formProduct.get("packBy").hasError("maxlength")),u.xb(5),u.gc("ngClass",u.lc(50,E,e.formProduct.get("brand").valid&&e.brands.length>0,e.formProduct.get("brand").invalid||e.brands.length<=0)),u.xb(2),u.gc("disabled",e.formProduct.get("brand").invalid),u.xb(2),u.gc("ngIf",e.brands.length<=0),u.xb(1),u.gc("ngIf",e.formProduct.get("brand").hasError("maxlength")),u.xb(1),u.gc("ngForOf",e.brands),u.xb(2),u.gc("disabled",e.formProduct.invalid||e.colours.length<=0||e.brands.length<=0||e.formProduct.pristine||e.images.length<=0&&"create"===e.typeForm)}}var D=function(e){return e[e.COLOUR=0]="COLOUR",e[e.BRAND=1]="BRAND",e}({});let L=(()=>{class e{constructor(e,t,i){this.productService=e,this.router=t,this.activatedRoute=i,this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!1,this.pauseOnHover=!0,this.pauseOnFocus=!0}ngOnInit(){if(this.imagesResponse=[],this.images=[],this.getTypes(),this.colours=[],this.brands=[],this.typeForm=this.activatedRoute.snapshot.paramMap.get("type"),"create"===this.typeForm)this.title="Crear producto",this.formProduct=new s.e({name:new s.b("",[s.o.required,s.o.maxLength(50)]),description:new s.b("",[s.o.required,s.o.maxLength(200)]),minimumSale:new s.b(null,[s.o.required,s.o.maxLength(100)]),packBy:new s.b("",[s.o.required,s.o.maxLength(100)]),code:new s.b("",s.o.required),colour:new s.b(""),brand:new s.b("",s.o.maxLength(50)),typeId:new s.b(null,s.o.required)});else if("update"===this.typeForm){let e=Number.parseInt(this.activatedRoute.snapshot.queryParamMap.get("productId"));e&&(this.title="Editar producto",r.a.isActive=!0,this.productService.findById(e).subscribe(e=>{this.productId=e.product.id,this.imagesResponse=e.images;for(let t of e.colours)this.colours.push({id:t.id,name:t.name,isCreate:!1});for(let t of e.brands)this.brands.push({id:t.id,name:t.name,isCreate:!1});this.formProduct=new s.e({images:new s.b,name:new s.b(e.product.name,[s.o.required,s.o.maxLength(50)]),description:new s.b(e.product.description,[s.o.required,s.o.maxLength(200)]),minimumSale:new s.b(e.product.minimumSale,[s.o.required,s.o.max(999999999)]),packBy:new s.b(e.product.packBy,[s.o.required,s.o.maxLength(20)]),code:new s.b(e.product.code,s.o.required),colour:new s.b(""),brand:new s.b("",s.o.maxLength(50)),typeId:new s.b(e.productType.id,s.o.required)}),r.a.isActive=!1},e=>{o.a.errorMessage(e)}))}}deleteImage(e){l.a.fire({title:"\xbfEstas seguro de eliminar esta imagen?",icon:"warning",showCancelButton:!0,showConfirmButton:!0,cancelButtonText:"No!",confirmButtonText:"Si!"}).then(t=>{t.isConfirmed&&(r.a.isActive=!0,this.productService.deleteImage(e).subscribe(e=>{this.ngOnInit(),l.a.fire("\xa1Imagen eliminada!","","success"),r.a.isActive=!1},e=>{o.a.errorMessage(e)}))})}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(e){this.unpauseOnArrow&&e.paused&&(e.source===a.h.ARROW_LEFT||e.source===a.h.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!e.paused&&e.source===a.h.INDICATOR&&this.togglePaused()}selectImages(e){e.target.files.length>0&&(this.images=e.target.files)}getTypes(){r.a.isActive=!0,this.productService.getAllTypes().subscribe(e=>{this.types=e,r.a.isActive=!1},e=>{o.a.errorMessage(e)})}create(){r.a.isActive=!0,"create"===this.typeForm?this.productService.create(new d(this.formProduct.getRawValue(),this.colours,this.brands)).subscribe(e=>{let t=new FormData;for(let i=0;i<this.images.length;i++)t.append("files",this.images[i]);this.productService.uploadImagesByProduct(t,e.productId).subscribe(e=>{this.ngOnInit(),l.a.fire("\xa1Producto guardado!","","success"),this.router.navigate(["/admin/products"]),r.a.isActive=!1},e=>{o.a.errorMessage(e)})},e=>{o.a.errorMessage(e)}):"update"===this.typeForm&&this.productId&&this.productService.update(new d(this.formProduct.getRawValue(),this.colours,this.brands),this.productId).subscribe(e=>{if(this.images.length>0){let e=new FormData;for(let t=0;t<this.images.length;t++)e.append("files",this.images[t]);this.productService.uploadImagesByProduct(e,this.productId).subscribe(e=>{this.ngOnInit(),l.a.fire("\xa1Producto actualizado!","","success"),this.router.navigate(["/admin/products"]),r.a.isActive=!1},e=>{o.a.errorMessage(e)})}else this.ngOnInit(),l.a.fire("\xa1Producto actualizado!","","success"),this.router.navigate(["/admin/products"]),r.a.isActive=!1},e=>{o.a.errorMessage(e)})}deleteGenericData(e,t){r.a.isActive=!0,this.productService.deleteGenericData(e.id).subscribe(i=>{if(l.a.fire("\xa1Eliminado!","","success"),t===D.BRAND)for(let t=0;t<this.brands.length;t++)this.brands[t].name===e.name&&this.brands.splice(t,1);else if(t===D.COLOUR)for(let t=0;t<this.colours.length;t++)this.colours[t].name===e.name&&this.colours.splice(t,1);r.a.isActive=!1},e=>{o.a.errorMessage(e)})}deleteColour(e){if("update"===this.typeForm&&null!=e.id)l.a.fire({title:"\xbfEstas seguro de eliminar este color?",icon:"warning",showCancelButton:!0,showConfirmButton:!0,confirmButtonText:"Si!",cancelButtonText:"No!"}).then(t=>{t.isConfirmed&&this.deleteGenericData(e,D.COLOUR)});else if("create"===this.typeForm||e.isCreate)for(let t=0;t<this.colours.length;t++)this.colours[t].name===e.name&&this.colours.splice(t,1)}addColour(){""!=this.formProduct.get("colour").value&&(0===this.colours.filter(e=>e.name===this.formProduct.get("colour").value).length?(this.colours.push({id:null,name:this.formProduct.get("colour").value,isCreate:!0}),this.formProduct.get("colour").setValue(null)):l.a.fire("\xa1Ya seleccionaste este color!","","info"))}addBrand(){""!=this.formProduct.get("brand").value&&(0===this.brands.filter(e=>e.name===this.formProduct.get("brand").value).length?(this.brands.push({id:null,name:this.formProduct.get("brand").value,isCreate:!0}),this.formProduct.get("brand").setValue("")):l.a.fire("\xa1Esta marca ya esta agregada!","","info"))}deleteBrand(e){if("update"===this.typeForm&&null!=e.id)l.a.fire({title:"\xbfEstas seguro de eliminar esta marca?",icon:"warning",showCancelButton:!0,showConfirmButton:!0,confirmButtonText:"Si!",cancelButtonText:"No!"}).then(t=>{t.isConfirmed&&this.deleteGenericData(e,D.BRAND)});else if("create"===this.typeForm||e.isCreate)for(let t=0;t<this.brands.length;t++)this.brands[t].name===e.name&&this.brands.splice(t,1)}}return e.\u0275fac=function(t){return new(t||e)(u.Jb(p.a),u.Jb(c.b),u.Jb(c.a))},e.\u0275cmp=u.Db({type:e,selectors:[["app-form-product"]],viewQuery:function(e,t){var i;1&e&&u.tc(g,!0),2&e&&u.nc(i=u.ac())&&(t.carousel=i.first)},decls:14,vars:3,consts:[[1,"container"],["routerLink","/admin/products",1,"btn","btn-outline-success"],[1,"fa-solid","fa-arrow-left"],[1,"row","align-items-center"],[1,"col-12","col-md-6"],["src","assets/ilustrations/save.svg","alt","",1,"img-fluid"],[3,"interval","pauseOnHover","pauseOnFocus","slide",4,"ngIf"],[1,"card","card-body"],[1,"fa-solid","fa-box"],[3,"formGroup",4,"ngIf"],[3,"interval","pauseOnHover","pauseOnFocus","slide"],["carousel",""],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"card-body"],["type","button",1,"btn","btn-block","btn-outline-danger",3,"click"],[1,"fa-solid","fa-trash"],["width","500","height","500",1,"img-fluid",3,"src","alt"],[3,"formGroup"],[1,"row"],[1,"col-12"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],["for","image"],["type","file","formControlName","images","accept","image/*","multiple","","id","image",1,"form-control",3,"change"],["class","text-danger",4,"ngIf"],["for","code"],["type","text","formControlName","code","placeholder","#","id","code",1,"form-control",3,"ngClass"],["for","name"],["type","text","formControlName","name","placeholder","Nombre","id","name",1,"form-control",3,"ngClass"],["for","type"],["formControlName","typeId","id","type",1,"custom-select",3,"ngClass"],["value","null","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["for","description"],["id","description","formControlName","description","cols","5","rows","3","placeholder","Descripci\xf3n",1,"form-control",3,"ngClass"],["for","colour"],[1,"input-group"],["type","color","formControlName","colour","id","colour",1,"form-control",3,"ngClass"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-success",3,"click"],[1,"fa-solid","fa-floppy-disk"],["class","badge mr-1",3,"style",4,"ngFor","ngForOf"],["for","minimumSale"],["type","text","id","minimumSale","formControlName","minimumSale","placeholder","Venta minima",1,"form-control",3,"ngClass"],["for","packBy"],["type","text","id","packBy","formControlName","packBy","placeholder","Empaque por:",1,"form-control",3,"ngClass"],["for","brands"],["type","text","formControlName","brand","id","brands","placeholder","Marcas",1,"form-control",3,"ngClass"],["type","button",1,"btn","btn-outline-success",3,"disabled","click"],["class","badge badge-primary mr-1",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-outline-success","mt-3",3,"disabled","click"],[1,"list-group-item"],[1,"text-muted"],[1,"text-danger"],[1,"fa-solid","fa-circle-exclamation"],[3,"value"],[1,"badge","mr-1"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-xmark"],[1,"badge","badge-primary","mr-1"]],template:function(e,t){1&e&&(u.Ob(0,"div",0),u.Ob(1,"a",1),u.Kb(2,"i",2),u.yc(3," Regresar"),u.Nb(),u.Ob(4,"div",3),u.Ob(5,"div",4),u.Kb(6,"img",5),u.wc(7,h,3,4,"ngb-carousel",6),u.Nb(),u.Ob(8,"div",4),u.Ob(9,"div",7),u.Ob(10,"h3"),u.Kb(11,"i",8),u.yc(12),u.Nb(),u.wc(13,R,71,53,"form",9),u.Nb(),u.Nb(),u.Nb(),u.Nb()),2&e&&(u.xb(7),u.gc("ngIf","update"===t.typeForm&&t.imagesResponse.length>0),u.xb(5),u.Ac(" ",t.title,""),u.xb(1),u.gc("ngIf",t.formProduct))},directives:[c.d,n.k,a.a,n.j,a.g,s.q,s.k,s.f,s.a,s.j,s.d,n.i,s.n,s.l,s.p],styles:[""]}),e})();var M=i("IVvN");function Z(e,t){1&e&&(u.Ob(0,"p",25),u.Kb(1,"i",26),u.yc(2," Ingresa maximo 100 caracteres!"),u.Nb())}function U(e,t){if(1&e){const e=u.Pb();u.Ob(0,"a",27),u.Zb("click",(function(){return u.pc(e),u.bc().ngOnInit()})),u.Kb(1,"i",28),u.yc(2),u.Nb()}if(2&e){const e=u.bc();u.xb(2),u.Ac(" Limpiar busqueda: ",e.name.value,"")}}const G=function(){return["/admin/formProduct/","update"]},j=function(e){return{productId:e}};function $(e,t){if(1&e&&(u.Ob(0,"tr"),u.Ob(1,"td"),u.Kb(2,"img",29),u.Nb(),u.Ob(3,"td"),u.yc(4),u.Nb(),u.Ob(5,"td"),u.yc(6),u.Nb(),u.Ob(7,"td"),u.Ob(8,"textarea",30),u.yc(9),u.Nb(),u.Nb(),u.Ob(10,"td"),u.yc(11),u.Nb(),u.Ob(12,"td"),u.yc(13),u.Nb(),u.Ob(14,"td"),u.Ob(15,"a",31),u.Kb(16,"i",32),u.Nb(),u.Nb(),u.Nb()),2&e){const e=t.$implicit;u.xb(2),u.hc("src",e.imgUrl,u.qc),u.xb(2),u.zc(e.code),u.xb(2),u.zc(e.name),u.xb(2),u.gc("disabled",!0),u.xb(1),u.Ac("                    ",e.description,""),u.xb(2),u.zc(e.minimumSale),u.xb(2),u.zc(e.packBy),u.xb(2),u.gc("routerLink",u.jc(9,G))("queryParams",u.kc(10,j,e.id))}}function J(e,t){1&e&&(u.Ob(0,"h3",33),u.yc(1,"\xa1No se encontro ningun producto!"),u.Nb())}function V(e,t){if(1&e){const e=u.Pb();u.Ob(0,"ngb-pagination",34),u.Zb("pageChange",(function(t){return u.pc(e),u.bc().pageChange(t)}))("pageChange",(function(t){return u.pc(e),u.bc().pageable.page=t})),u.Nb()}if(2&e){const e=u.bc();u.gc("pageSize",e.pageable.size)("collectionSize",e.pageable.totalElements)("page",e.pageable.page)}}const H=function(e,t){return{"is-valid":e,"is-invalid":t}};function Q(e,t){1&e&&(u.Ob(0,"a",25),u.Kb(1,"i",26),u.yc(2," \xa1Ingresa maximo 20 caracteres!"),u.Nb())}function Y(e,t){if(1&e){const e=u.Pb();u.Ob(0,"a",27),u.Zb("click",(function(){return u.pc(e),u.bc().ngOnInit()})),u.Kb(1,"i",28),u.yc(2),u.Nb()}if(2&e){const e=u.bc();u.xb(2),u.Ac(" Limpiar busqueda: ",e.nameType.value,"")}}function W(e,t){if(1&e){const e=u.Pb();u.Ob(0,"tr"),u.Ob(1,"td"),u.yc(2),u.Nb(),u.Ob(3,"td"),u.Ob(4,"button",29),u.Zb("click",(function(){u.pc(e);const i=t.$implicit,a=u.bc(),n=u.oc(39);return a.openFormType(n,i)})),u.Kb(5,"i",30),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=t.$implicit;u.xb(2),u.zc(e.name)}}function _(e,t){1&e&&(u.Ob(0,"h3",31),u.yc(1,"\xa1No se encontro ningun tipo!"),u.Nb())}function X(e,t){if(1&e){const e=u.Pb();u.Ob(0,"ngb-pagination",32),u.Zb("pageChange",(function(t){return u.pc(e),u.bc().pageChange(t)}))("pageChange",(function(t){return u.pc(e),u.bc().pageable.page=t})),u.Nb()}if(2&e){const e=u.bc();u.gc("pageSize",e.pageable.size)("collectionSize",e.pageable.totalElements)("page",e.pageable.page)}}function ee(e,t){1&e&&(u.Ob(0,"a",25),u.Kb(1,"i",26),u.yc(2," \xa1Ingresa un nombre!"),u.Nb())}function te(e,t){1&e&&(u.Ob(0,"a",25),u.Kb(1,"i",26),u.yc(2," \xa1Ingresa maximo 20 caracteres!"),u.Nb())}const ie=function(e,t){return{"is-valid":e,"is-invalid":t}};function ae(e,t){if(1&e){const e=u.Pb();u.Ob(0,"div",33),u.Ob(1,"button",34),u.Zb("click",(function(){return t.$implicit.close()})),u.Kb(2,"i",35),u.Nb(),u.Ob(3,"h3"),u.Kb(4,"i",36),u.yc(5),u.Nb(),u.Ob(6,"div",37),u.Ob(7,"div",7),u.Kb(8,"img",38),u.Nb(),u.Ob(9,"div",7),u.Ob(10,"label",39),u.yc(11,"Nombre"),u.Nb(),u.Kb(12,"input",40),u.wc(13,ee,3,0,"a",13),u.wc(14,te,3,0,"a",13),u.Ob(15,"button",41),u.Zb("click",(function(){return u.pc(e),u.bc().save()})),u.Kb(16,"i",42),u.yc(17," Guardar"),u.Nb(),u.Nb(),u.Nb(),u.Nb()}if(2&e){const e=u.bc();u.xb(5),u.Ac(" ",e.titleFormType,""),u.xb(7),u.gc("formControl",e.nameTypeUpdate)("ngClass",u.lc(6,ie,e.nameTypeUpdate.valid,e.nameTypeUpdate.invalid)),u.xb(1),u.gc("ngIf",e.nameTypeUpdate.hasError("required")),u.xb(1),u.gc("ngIf",e.nameTypeUpdate.hasError("maxlength")),u.xb(1),u.gc("disabled",e.nameTypeUpdate.invalid||e.nameTypeUpdate.pristine)}}const ne=[{path:"formProduct/:type",component:L},{path:"products",component:(()=>{class e{constructor(e){this.productService=e}ngOnInit(){this.products=[],this.isCleanSearch=!1,this.pageable=new M.a,this.name=new s.b("",s.o.maxLength(100)),this.findProduct("all")}pageChange(e){this.pageable.page=e,this.findProduct("all")}search(){let e=""!=this.name.value?this.name.value:"all";this.isCleanSearch=""!=this.name.value,this.findProduct(e)}findProduct(e){r.a.isActive=!0,this.productService.find(e,this.pageable.page,this.pageable.size).subscribe(t=>{"all"!=e&&(this.pageable.page=1),this.pageable.uploadPageable(t),this.products=t.content,r.a.isActive=!1},e=>{o.a.errorMessage(e)})}}return e.\u0275fac=function(t){return new(t||e)(u.Jb(p.a))},e.\u0275cmp=u.Db({type:e,selectors:[["app-products"]],decls:48,vars:11,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"card","card-body"],[1,"fa-solid","fa-filter"],[1,"row","mt-3"],[1,"col-12","col-md-6"],[1,"input-group"],["type","search","placeholder","Buscar por nombre o referencia",1,"form-control",3,"ngClass","formControl"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-success",3,"disabled","click"],[1,"fa-solid","fa-magnifying-glass"],["class","text-danger",4,"ngIf"],["class","text-danger",3,"click",4,"ngIf"],[1,"w-100"],[1,"btn-group","mt-3"],["routerLink","/admin/formProduct/create",1,"btn","btn-outline-success"],[1,"fa-solid","fa-plus"],["routerLink","/admin/types",1,"btn","btn-outline-primary"],[1,"card","card-body","mt-3"],[1,"table-responsive"],[1,"table","table-striped","table-hover","text-center"],[4,"ngFor","ngForOf"],["class","text-muted text-center",4,"ngIf"],["size","md","class","d-flex justify-content-center mt-3","aria-label","Default pagination",3,"pageSize","collectionSize","page","pageChange",4,"ngIf"],[1,"text-danger"],[1,"fa-solid","fa-circle-exclamation"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-trash"],["width","200","height","200","alt","",1,"img-fluid",3,"src"],["cols","1","rows","2",1,"form-control",3,"disabled"],["title","Editar producto",1,"btn","btn-outline-primary","rounded-circle",3,"routerLink","queryParams"],[1,"fa-solid","fa-pencil"],[1,"text-muted","text-center"],["size","md","aria-label","Default pagination",1,"d-flex","justify-content-center","mt-3",3,"pageSize","collectionSize","page","pageChange"]],template:function(e,t){1&e&&(u.Ob(0,"div",0),u.Ob(1,"div",1),u.Ob(2,"div",2),u.Ob(3,"div",3),u.Ob(4,"h3"),u.Kb(5,"i",4),u.yc(6," Filtros"),u.Nb(),u.Ob(7,"div",5),u.Ob(8,"div",6),u.Ob(9,"div",7),u.Kb(10,"input",8),u.Ob(11,"div",9),u.Ob(12,"button",10),u.Zb("click",(function(){return t.search()})),u.Kb(13,"i",11),u.Nb(),u.Nb(),u.Nb(),u.wc(14,Z,3,0,"p",12),u.wc(15,U,3,1,"a",13),u.Kb(16,"div",14),u.Ob(17,"div",15),u.Ob(18,"a",16),u.Kb(19,"i",17),u.yc(20," Crear producto"),u.Nb(),u.Ob(21,"a",18),u.Kb(22,"i",17),u.yc(23," Crear tipo"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(24,"div",2),u.Ob(25,"div",19),u.Ob(26,"div",20),u.Ob(27,"table",21),u.Ob(28,"thead"),u.Ob(29,"tr"),u.Ob(30,"th"),u.yc(31,"Imagen"),u.Nb(),u.Ob(32,"th"),u.yc(33,"No referencia"),u.Nb(),u.Ob(34,"th"),u.yc(35,"Nombre"),u.Nb(),u.Ob(36,"th"),u.yc(37,"Descripci\xf3n"),u.Nb(),u.Ob(38,"th"),u.yc(39,"Venta minima"),u.Nb(),u.Ob(40,"th"),u.yc(41,"Empaque por"),u.Nb(),u.Ob(42,"th"),u.yc(43,"Opciones"),u.Nb(),u.Nb(),u.Nb(),u.Ob(44,"tbody"),u.wc(45,$,17,12,"tr",22),u.Nb(),u.Nb(),u.wc(46,J,2,0,"h3",23),u.Nb(),u.wc(47,V,1,3,"ngb-pagination",24),u.Nb(),u.Nb(),u.Nb(),u.Nb()),2&e&&(u.xb(10),u.gc("ngClass",u.lc(8,H,t.name.valid,t.name.invalid))("formControl",t.name),u.xb(2),u.gc("disabled",t.name.invalid),u.xb(2),u.gc("ngIf",t.name.hasError("maxlength")),u.xb(1),u.gc("ngIf",t.isCleanSearch),u.xb(30),u.gc("ngForOf",t.products),u.xb(1),u.gc("ngIf",t.products.length<=0),u.xb(1),u.gc("ngIf",t.products.length>0))},directives:[s.a,n.i,s.j,s.c,n.k,c.d,n.j,a.f],styles:[""]}),e})()},{path:"types",component:(()=>{class e{constructor(e,t){this.ngbModal=e,this.productService=t}ngOnInit(){this.types=[],this.nameType=new s.b("",s.o.maxLength(20)),this.pageable=new M.a,this.findTypes()}save(){r.a.isActive=!0,this.typeData?this.productService.updateType(this.nameTypeUpdate.value,this.typeData.id).subscribe(e=>{this.ngOnInit(),this.modalRef.close(),l.a.fire("\xa1Tipo actualizado!","","success"),r.a.isActive=!1},e=>{o.a.errorMessage(e)}):this.productService.createType(this.nameTypeUpdate.value).subscribe(e=>{this.ngOnInit(),this.modalRef.close(),l.a.fire("\xa1Tipo creado!","","success"),r.a.isActive=!1},e=>{o.a.errorMessage(e)})}pageChange(e){this.pageable.page=e,this.findTypes()}openFormType(e,t){this.titleFormType=t?"Editar tipo":"Crear tipo",this.typeData=t,this.nameTypeUpdate=new s.b(t?t.name:"",[s.o.required,s.o.maxLength(20)]),this.modalRef=this.ngbModal.open(e,{size:"lg"})}findTypes(){r.a.isActive=!0,this.productService.findTypes(""===this.nameType.value?"all":this.nameType.value,this.pageable.page,this.pageable.size).subscribe(e=>{""!=this.nameType.value&&(this.pageable.page=1),this.pageable.uploadPageable(e),this.types=e.content,r.a.isActive=!1},e=>{o.a.errorMessage(e)})}}return e.\u0275fac=function(t){return new(t||e)(u.Jb(a.c),u.Jb(p.a))},e.\u0275cmp=u.Db({type:e,selectors:[["app-types"]],decls:40,vars:11,consts:[[1,"container"],["routerLink","/admin/products",1,"btn","btn-outline-success"],[1,"fa-solid","fa-arrow-left"],[1,"row","mt-3"],[1,"col-12"],[1,"card","card-body"],[1,"fa-solid","fa-filter"],[1,"col-12","col-md-6"],[1,"input-group"],["type","search","placeholder","Buscar por nombre",1,"form-control",3,"formControl"],[1,"input-group-append"],["type","button",1,"btn","btn-outline-success",3,"disabled","click"],[1,"fa-solid","fa-magnifying-glass"],["class","text-danger",4,"ngIf"],[1,"w-100"],["class","text-danger",3,"click",4,"ngIf"],["type","button",1,"btn","btn-outline-success","mt-3",3,"click"],[1,"fa-solid","fa-plus"],[1,"card","card-body","mt-3"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],["class","text-muted text-center",4,"ngIf"],["size","md","class","d-flex justify-content-center mt-3","aria-label","Default pagination",3,"pageSize","collectionSize","page","pageChange",4,"ngIf"],["formTypeMD",""],[1,"text-danger"],[1,"fa-solid","fa-circle-exclamation"],[1,"text-danger",3,"click"],[1,"fa-solid","fa-trash"],["type","button",1,"btn","btn-outline-success","rounded-circle",3,"click"],[1,"fa-solid","fa-pencil"],[1,"text-muted","text-center"],["size","md","aria-label","Default pagination",1,"d-flex","justify-content-center","mt-3",3,"pageSize","collectionSize","page","pageChange"],[1,"modal-body"],["type","button",1,"close",3,"click"],[1,"fa-solid","fa-circle-xmark","text-danger"],[1,"fa-solid","fa-dolly"],[1,"row","mt-4"],["src","assets/ilustrations/save.svg","alt","",1,"img-fluid"],["for","name"],["type","text","id","name","placeholder","Nombre",1,"form-control",3,"formControl","ngClass"],["type","button",1,"btn","btn-outline-success","btn-block","mt-3",3,"disabled","click"],[1,"fa-solid","fa-floppy-disk"]],template:function(e,t){if(1&e){const e=u.Pb();u.Ob(0,"div",0),u.Ob(1,"a",1),u.Kb(2,"i",2),u.yc(3," Regresar"),u.Nb(),u.Ob(4,"div",3),u.Ob(5,"div",4),u.Ob(6,"div",5),u.Ob(7,"h3"),u.Kb(8,"i",6),u.yc(9," Filtros"),u.Nb(),u.Ob(10,"div",3),u.Ob(11,"div",7),u.Ob(12,"div",8),u.Kb(13,"input",9),u.Ob(14,"div",10),u.Ob(15,"button",11),u.Zb("click",(function(){return t.findTypes()})),u.Kb(16,"i",12),u.Nb(),u.Nb(),u.Nb(),u.wc(17,Q,3,0,"a",13),u.Kb(18,"div",14),u.wc(19,Y,3,1,"a",15),u.Kb(20,"div",14),u.Ob(21,"button",16),u.Zb("click",(function(){u.pc(e);const i=u.oc(39);return t.openFormType(i,null)})),u.Kb(22,"i",17),u.yc(23," Crear tipo "),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(24,"div",4),u.Ob(25,"div",18),u.Ob(26,"div",19),u.Ob(27,"table",20),u.Ob(28,"thead"),u.Ob(29,"tr"),u.Ob(30,"th"),u.yc(31,"Nombre"),u.Nb(),u.Ob(32,"th"),u.yc(33,"Opciones"),u.Nb(),u.Nb(),u.Nb(),u.Ob(34,"tbody"),u.wc(35,W,6,1,"tr",21),u.Nb(),u.Nb(),u.wc(36,_,2,0,"h3",22),u.wc(37,X,1,3,"ngb-pagination",23),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.wc(38,ae,18,9,"ng-template",null,24,u.xc)}2&e&&(u.xb(13),u.Bb("is-invalid",t.nameType.invalid)("is-valid",t.nameType.valid&&""!=t.nameType.value),u.gc("formControl",t.nameType),u.xb(2),u.gc("disabled",t.nameType.invalid),u.xb(2),u.gc("ngIf",t.nameType.invalid),u.xb(2),u.gc("ngIf",""!=t.nameType.value),u.xb(16),u.gc("ngForOf",t.types),u.xb(1),u.gc("ngIf",0==t.types.length),u.xb(1),u.gc("ngIf",t.types.length>0))},directives:[c.d,s.a,s.j,s.c,n.k,n.j,a.f,n.i],styles:[""]}),e})()}];let ce=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(t){return new(t||e)},imports:[[n.b,a.d,c.e.forChild(ne),s.m]]}),e})()}}]);