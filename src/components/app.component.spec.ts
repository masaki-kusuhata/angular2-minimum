import { AppComponent } from './app.component';

import { async } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

// SPEC
describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  it('component test', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let element = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(element.innerText).toMatch(/Hello World!/i);
    });
  }));
});
