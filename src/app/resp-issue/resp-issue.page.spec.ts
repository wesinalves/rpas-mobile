import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespIssuePage } from './resp-issue.page';

describe('RespIssuePage', () => {
  let component: RespIssuePage;
  let fixture: ComponentFixture<RespIssuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespIssuePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespIssuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
