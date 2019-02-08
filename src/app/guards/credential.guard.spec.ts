import { TestBed, async, inject } from '@angular/core/testing';

import { CredentialGuard } from './credential.guard';

describe('CredentialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CredentialGuard]
    });
  });

  it('should ...', inject([CredentialGuard], (guard: CredentialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
