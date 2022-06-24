import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartecuatroComponent } from './partecuatro.component';

describe('PartecuatroComponent', () => {
  let component: PartecuatroComponent;
  let fixture: ComponentFixture<PartecuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartecuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartecuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
