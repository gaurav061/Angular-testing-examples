import { FormBuilder } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  // declare the variable of type UserFormComponent.
  var component: UserFormComponent;

  /**
   * create the instance of UserFormComponent before each test to prevent side-effect.
   *
   */
  beforeEach(() => {
    component = new UserFormComponent(new FormBuilder());
  });

  /**
   * When a new insatnce is created it should have name and email formControl.
   */
  it('should have a form with 2 control', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  /**
   * We are testing if required validator is present in name control.
   *
   */
  it('should have name control with required validator', () => {
    const control = component.form.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
