import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnimalComponent } from './new-animal.component';

describe('NewAnimalComponent', () => {
  let component: NewAnimalComponent;
  let fixture: ComponentFixture<NewAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAnimalComponent]
    });
    fixture = TestBed.createComponent(NewAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
