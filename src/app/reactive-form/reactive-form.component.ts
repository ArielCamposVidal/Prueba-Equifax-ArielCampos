import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response, IUserRespond } from '../interfaces/user';
import { UsersService } from '../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;
  disable = true;
  response: Response;
  objRegisterModel: IUserRespond = {} as IUserRespond;

  constructor(private formBuilder: FormBuilder,private userService:UsersService,private toastr: ToastrService) {
   }

  ngOnInit() {
    //creacion de formgroup y validaciones
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age:['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      isWorkNow: [{value: '', disabled: true}],
      nombreCompania: ['', Validators.maxLength(18)],
      aniosCompania: ['',[Validators.max(15),Validators.pattern("^[0-9]*$")]]
  });
  //validacion para habilitar/deshabilitar checkbox al cambiar valor de input edad
  this.registerForm.get("age").valueChanges.subscribe((age) => {
    this.registerForm.get("isWorkNow").disable();
    console.log(age)
    if(age > 17) {
         this.registerForm.get("isWorkNow").enable();
    } else if (age < 17) {
      this.registerForm.get("isWorkNow").disable();
    }
});
}


  
 // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.objRegisterModel = this.registerForm.value
this.userService.addUser(this.objRegisterModel).subscribe((res)=> {
 this.response = res,
 console.log(this.response),
 this.toastr.success('result: ' + this.response.result, 'Message: ' + this.response.message);
}, error =>{
  this.toastr.error('error, no se pudo procesar la solicitud');
})

}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

}
