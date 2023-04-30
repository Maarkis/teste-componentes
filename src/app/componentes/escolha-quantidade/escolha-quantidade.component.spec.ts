import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaQuantidadeComponent } from './escolha-quantidade.component';

describe('EscolhaQuantidadeComponent', () => {
  let component: EscolhaQuantidadeComponent;
  let fixture: ComponentFixture<EscolhaQuantidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaQuantidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolhaQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
