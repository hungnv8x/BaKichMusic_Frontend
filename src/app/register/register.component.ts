import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formRegister = this.fb.group({
      name: [''],
      email: [''],
      password:[''],
      password_confirmation: [''],
      phone: ['']
    });
  }

}
