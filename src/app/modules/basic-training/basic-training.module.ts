import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BasicTrainingRoutingModule } from "./basic-training-routing.module";
import { BasicTrainingComponent } from "./page/basic-training.component";

@NgModule({
  declarations: [BasicTrainingComponent],
  imports: [CommonModule, BasicTrainingRoutingModule]
})
export class BasicTrainingModule {}
