import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutenticidadeCnhComponent } from './autenticidade-cnh.component';

describe('AutenticidadeCnhComponent', () => {
  let component: AutenticidadeCnhComponent;
  let fixture: ComponentFixture<AutenticidadeCnhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticidadeCnhComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutenticidadeCnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
