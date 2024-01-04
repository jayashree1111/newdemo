import { Component } from '@angular/core';
import { Login } from '../model/login';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  login:Login={
    username:"",
    password:""
  }
  onlogin()
  {
    console.log(this.login);
  }
}
