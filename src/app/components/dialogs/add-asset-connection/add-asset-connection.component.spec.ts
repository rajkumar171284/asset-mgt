import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetConnectionComponent } from './add-asset-connection.component';

describe('AddAssetConnectionComponent', () => {
  let component: AddAssetConnectionComponent;
  let fixture: ComponentFixture<AddAssetConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssetConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
