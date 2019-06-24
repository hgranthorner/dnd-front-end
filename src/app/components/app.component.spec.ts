import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Root } from './app.component';

describe('TodoList', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Root
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Root);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Client'`, () => {
    const fixture = TestBed.createComponent(Root);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Client');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Root);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Client!');
  });
});
