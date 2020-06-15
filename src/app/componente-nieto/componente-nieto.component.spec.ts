import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteNietoComponent } from './componente-nieto.component';

describe('ComponenteNietoComponent', () => {
  let component: ComponenteNietoComponent;
  let fixture: ComponentFixture<ComponenteNietoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteNietoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteNietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
