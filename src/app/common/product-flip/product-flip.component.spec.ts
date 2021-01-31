import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFlipComponent } from './product-flip.component';

describe('ProductFlipComponent', () => {
  let component: ProductFlipComponent;
  let fixture: ComponentFixture<ProductFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
