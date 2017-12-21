import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputTableComponent } from './user-input-table.component';
import { FormsModule } from '@angular/forms';
import { AddUserService } from '../../services/add-user.service';
import { Http, ConnectionBackend,RequestOptions,HttpModule } from '@angular/http';

describe('UserInputTableComponent', () => {
  let component: UserInputTableComponent;
  let fixture: ComponentFixture<UserInputTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[AddUserService,HttpModule],
      imports:[FormsModule,HttpModule],
      declarations: [
        UserInputTableComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
