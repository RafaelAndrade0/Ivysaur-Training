import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IntermediateTrainingRoutingModule } from "./intermediate-training-routing.module";
import { IntermediateTrainingComponent } from "./page/intermediate-training.component";

@NgModule({
  declarations: [IntermediateTrainingComponent],
  imports: [CommonModule, IntermediateTrainingRoutingModule]
})
export class IntermediateTrainingModule {}
