import { TestBed } from '@angular/core/testing';

import { DependinjectionService } from './dependinjection.service';

describe('DependinjectionService', () => {
  let service: DependinjectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependinjectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
