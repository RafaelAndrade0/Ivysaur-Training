import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTrainingComponent } from './basic-training.component';

describe('BasicTrainingComponent', () => {
  let component: BasicTrainingComponent;
  let fixture: ComponentFixture<BasicTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
