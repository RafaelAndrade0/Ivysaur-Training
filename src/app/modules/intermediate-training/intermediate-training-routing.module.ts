import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IntermediateTrainingComponent } from "./page/intermediate-training.component";

const routes: Routes = [{ path: "", component: IntermediateTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediateTrainingRoutingModule {}
