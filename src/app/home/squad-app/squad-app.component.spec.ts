import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadAppComponent } from './squad-app.component';

describe('SquadAppComponent', () => {
  let component: SquadAppComponent;
  let fixture: ComponentFixture<SquadAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
