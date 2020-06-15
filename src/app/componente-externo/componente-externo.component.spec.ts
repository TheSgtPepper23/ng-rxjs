import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteExternoComponent } from './componente-externo.component';

describe('ComponenteExternoComponent', () => {
  let component: ComponenteExternoComponent;
  let fixture: ComponentFixture<ComponenteExternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteExternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteExternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
