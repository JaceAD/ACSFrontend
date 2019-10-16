import { TestBed } from '@angular/core/testing';

import { QueryDataSourceService } from './query-data-source.service';

describe('QueryDataSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryDataSourceService = TestBed.get(QueryDataSourceService);
    expect(service).toBeTruthy();
  });
});
