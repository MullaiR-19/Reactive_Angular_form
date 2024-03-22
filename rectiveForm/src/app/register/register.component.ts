import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  @Output() registerdata: EventEmitter<{ name: string, email: string, password: string }> = new EventEmitter();

  nameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.pattern('/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/')]),
  });

  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      
      console.log('Validated')
      const { username, email, password } = this.registerForm.value;
      this.registerdata.emit({ username, email, password });
      this.registerForm.registerControl
    } 
    
    else {
      this.nameError = this.registerForm.controls['username'].errors ? 'Valid User Name' : 'Invalid User Name';
      this.emailError = this.registerForm.controls['email'].errors ? 'Valid Email' : 'Invalid Email';
      this.passwordError = this.registerForm.controls['password'].errors ? 'Valid Password' : 'Password Should contain Upper case\nLower case number and special character';
    }
  }
}
