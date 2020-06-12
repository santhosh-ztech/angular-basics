import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformationCardComponent } from './information-card.component';

describe('InformationCardComponent', () => {
  let component: InformationCardComponent;
  let fixture: ComponentFixture<InformationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});