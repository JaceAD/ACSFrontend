import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletMapperComponent } from './leaflet-mapper.component';

describe('LeafletMapperComponent', () => {
  let component: LeafletMapperComponent;
  let fixture: ComponentFixture<LeafletMapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletMapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
