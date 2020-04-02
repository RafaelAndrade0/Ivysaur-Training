import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./page/home.component";

import { ButtonsModule } from "ngx-bootstrap/buttons";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ButtonsModule]
})
export class HomeModule {}
