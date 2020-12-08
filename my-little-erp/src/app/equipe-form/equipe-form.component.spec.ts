import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeFormComponent } from './equipe-form.component';

describe('EquipeFormComponent', () => {
  let component: EquipeFormComponent;
  let fixture: ComponentFixture<EquipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
