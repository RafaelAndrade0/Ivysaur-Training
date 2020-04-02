import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BasicTrainingComponent } from "./page/basic-training.component";

const routes: Routes = [{ path: "", component: BasicTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicTrainingRoutingModule {}
