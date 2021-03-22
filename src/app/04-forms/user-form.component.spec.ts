import { FormBuilder } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  var component: UserFormComponent;

  beforeEach(() => {
    component = new UserFormComponent(new FormBuilder());
  });

  it('should have a form with 2 control', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should have name control with required validator', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
