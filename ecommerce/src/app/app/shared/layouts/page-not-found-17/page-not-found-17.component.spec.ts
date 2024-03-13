import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFound17Component } from './page-not-found-17.component';

describe('PageNotFound17Component', () => {
  let component: PageNotFound17Component;
  let fixture: ComponentFixture<PageNotFound17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFound17Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotFound17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
