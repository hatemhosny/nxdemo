"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// nativescript
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
// app
var core_module_1 = require("./modules/core/core.module");
var shared_module_1 = require("./modules/shared/shared.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                core_module_1.CoreModule,
                shared_module_1.SharedModule,
                app_routing_1.AppRoutingModule
            ],
            providers: [
                // this allows standard Angular route lazy load syntax across whole project
                {
                    provide: core_1.NgModuleFactoryLoader,
                    useClass: router_1.NSModuleFactoryLoader
                }
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxVQUFVO0FBQ1Ysc0NBQWtGO0FBRWxGLGVBQWU7QUFDZixnRkFBOEU7QUFDOUUsa0RBQW1FO0FBQ25FLHNEQUFvRTtBQUVwRSxNQUFNO0FBQ04sMERBQXdEO0FBQ3hELGdFQUE4RDtBQUM5RCw2Q0FBaUQ7QUFDakQsaURBQStDO0FBd0IvQztJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUF0QnJCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDZCQUFzQjtnQkFDdEIsd0JBQVU7Z0JBQ1YsNEJBQVk7Z0JBQ1osOEJBQWdCO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJFQUEyRTtnQkFDM0U7b0JBQ0UsT0FBTyxFQUFFLDRCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLDhCQUFxQjtpQkFDaEM7YUFDRjtZQUNELFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIG5hdGl2ZXNjcmlwdFxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLy8gYXBwXHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL21vZHVsZXMvY29yZS9jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgIENvcmVNb2R1bGUsXHJcbiAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICBBcHBSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8vIHRoaXMgYWxsb3dzIHN0YW5kYXJkIEFuZ3VsYXIgcm91dGUgbGF6eSBsb2FkIHN5bnRheCBhY3Jvc3Mgd2hvbGUgcHJvamVjdFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsXHJcbiAgICAgIHVzZUNsYXNzOiBOU01vZHVsZUZhY3RvcnlMb2FkZXJcclxuICAgIH1cclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XHJcbiJdfQ==