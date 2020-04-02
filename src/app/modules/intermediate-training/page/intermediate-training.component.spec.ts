import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IntermediateTrainingComponent } from "./intermediate-training.component";

describe("IntermediateTrainingComponent", () => {
  let component: IntermediateTrainingComponent;
  let fixture: ComponentFixture<IntermediateTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntermediateTrainingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
