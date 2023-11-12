import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StructuralComponent } from "./components/structural/structural.component";
import { AttributeComponent } from "./components/attribute/attribute.component";
import { CustomComponent } from "./components/custom/custom.component";
import { HoverDirective } from "./components/custom/directives/hover.directive";

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    AttributeComponent,
    CustomComponent,
    HoverDirective
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
