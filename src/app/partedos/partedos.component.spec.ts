import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartedosComponent } from './partedos.component';

describe('PartedosComponent', () => {
  let component: PartedosComponent;
  let fixture: ComponentFixture<PartedosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartedosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
