import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  onSubmit(registerdata: {name: string, email: string, password: string}) {
    console.log('You submitted: ', registerdata);
  }
}
