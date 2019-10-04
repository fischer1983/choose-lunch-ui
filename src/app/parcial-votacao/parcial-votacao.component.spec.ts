import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialVotacaoComponent } from './parcial-votacao.component';

describe('ParcialVotacaoComponent', () => {
  let component: ParcialVotacaoComponent;
  let fixture: ComponentFixture<ParcialVotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcialVotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcialVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
