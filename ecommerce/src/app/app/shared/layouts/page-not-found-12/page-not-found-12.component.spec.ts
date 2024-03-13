import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFound12Component } from './page-not-found-12.component';

describe('PageNotFound12Component', () => {
  let component: PageNotFound12Component;
  let fixture: ComponentFixture<PageNotFound12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFound12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotFound12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
