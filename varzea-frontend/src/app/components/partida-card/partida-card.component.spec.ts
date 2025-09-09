import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaCardComponent } from './partida-card.component';

describe('PartidaCardComponent', () => {
  let component: PartidaCardComponent;
  let fixture: ComponentFixture<PartidaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidaCardComponent]
    });
    fixture = TestBed.createComponent(PartidaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
