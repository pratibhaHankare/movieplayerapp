import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViedoplayerComponent } from './viedoplayer.component';

describe('ViedoplayerComponent', () => {
  let component: ViedoplayerComponent;
  let fixture: ComponentFixture<ViedoplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViedoplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViedoplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
