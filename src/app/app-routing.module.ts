import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "basic-training",
    loadChildren: () =>
      import("./modules/basic-training/basic-training.module").then(
        m => m.BasicTrainingModule
      )
  },
  {
    path: "intermediate-training",
    loadChildren: () =>
      import(
        "./modules/intermediate-training/intermediate-training.module"
      ).then(m => m.IntermediateTrainingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
