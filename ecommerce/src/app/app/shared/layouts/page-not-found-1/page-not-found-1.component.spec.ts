import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFound1Component } from './page-not-found-1.component';

describe('PageNotFound1Component', () => {
  let component: PageNotFound1Component;
  let fixture: ComponentFixture<PageNotFound1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFound1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotFound1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
