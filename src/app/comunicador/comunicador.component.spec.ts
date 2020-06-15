import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicadorComponent } from './comunicador.component';

describe('ComunicadorComponent', () => {
  let component: ComunicadorComponent;
  let fixture: ComponentFixture<ComunicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
