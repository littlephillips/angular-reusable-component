import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReusableComponentComponent } from './my-reusable-component.component';

describe('MyReusableComponentComponent', () => {
  let component: MyReusableComponentComponent;
  let fixture: ComponentFixture<MyReusableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReusableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyReusableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
