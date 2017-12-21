import { TestBed, inject } from '@angular/core/testing';
import { Http, ConnectionBackend,RequestOptions,HttpModule } from '@angular/http';

import { AddUserService } from './add-user.service';

describe('AddUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AddUserService,HttpModule],
      imports:[HttpModule]

    });
  });

  it('should be created', inject([AddUserService], (service: AddUserService) => {
    expect(service).toBeTruthy();
  }));
});
