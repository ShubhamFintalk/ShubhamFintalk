import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, Validation} from '@angular/from';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
form: FormGroup;


currentEvent: any ={fname: '',lname:'',cname:'',email:'', pass:'', add:'', dob:''};

  constructor(private fb: FormBuilder,
  private server: ManagerService) { }

  ngOnInit(){
  this.form = this.fb.group({
  fname:this.currentEvent.fname,
  lname:this.currentEvent.lname,
  cname:this.currentEvent.cname,
  email:this.currentEvent.email,
  pass:this.currentEvent.pass,
  add:this.currentEvent.add,
  dob:this.currentEvent.dob

  });
  this.getEvent();
  }

}
