import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependinjectionComponent } from './dependinjection.component';

describe('DependinjectionComponent', () => {
  let component: DependinjectionComponent;
  let fixture: ComponentFixture<DependinjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependinjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
