import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAccessComponent } from './code-access.component';

describe('CodeAccessComponent', () => {
  let component: CodeAccessComponent;
  let fixture: ComponentFixture<CodeAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
