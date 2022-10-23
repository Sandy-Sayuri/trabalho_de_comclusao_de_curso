import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhasComponent } from './senhas.component';

describe('SenhasComponent', () => {
  let component: SenhasComponent;
  let fixture: ComponentFixture<SenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
