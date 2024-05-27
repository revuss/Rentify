import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesMainPageComponent } from './properties-main-page.component';

describe('PropertiesMainPageComponent', () => {
  let component: PropertiesMainPageComponent;
  let fixture: ComponentFixture<PropertiesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertiesMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertiesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
