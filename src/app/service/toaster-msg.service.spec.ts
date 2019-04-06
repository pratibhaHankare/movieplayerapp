import { TestBed } from '@angular/core/testing';

import { ToasterMsgService } from './toaster-msg.service';

describe('ToasterMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterMsgService = TestBed.get(ToasterMsgService);
    expect(service).toBeTruthy();
  });
});
