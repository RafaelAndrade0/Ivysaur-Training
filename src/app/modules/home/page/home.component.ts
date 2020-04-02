import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  goToBasicTraining() {
    this.router.navigate(["/basic-training"], { relativeTo: this.route });
  }

  goToIntermediateTraining() {
    this.router.navigate(["/intermediate-training"], {
      relativeTo: this.route
    });
  }
}
