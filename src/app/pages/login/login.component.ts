import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submit() {
    let data = this.loginForm.value;
    console.log(data);
    this.loginService.login(data).subscribe(res => {
      const userLogin = res.user;

      localStorage.setItem('userLogin',JSON.stringify(userLogin));
      this.router.navigate(['home']);
    })
  }
}
