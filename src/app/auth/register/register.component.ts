import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';

import { AuthService } from '@app/shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class RegisterComponent implements OnInit {
  public isRegistered: boolean=false;
  constructor(private router: Router, private authService: AuthService) {
    
  }
  ngOnInit() {
    let ysel = document.getElementsByName("year")[0] as HTMLInputElement,
    msel = document.getElementsByName("month")[0] as HTMLInputElement,
    dsel = document.getElementsByName("day")[0] as HTMLInputElement;
    let dtnow = Number(new Date().getFullYear());
    var opty = new Option();
    opty.value = "";
    opty.text = "Year";
    ysel.appendChild(opty);
    for (var i = dtnow; i >= 1900; i--) {
        var opt = new Option();
        opt.value = opt.text = i.toString();
        ysel.appendChild(opt);
    }
    ysel.addEventListener("change", validate_date);
    msel.addEventListener("change", validate_date);
    
    function validate_date() {
        var y = +ysel.value, m = Number(msel.value), d = dsel.value;
        var mlength;
        if (m === 2){
            let a = (!(y & 3) && ((y % 100) !== 0 || !(y & 15)));
            mlength = 28 + Number(a);
        }
        else {
            mlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
        }
        dsel.innerHTML = "";
        var optd = new Option();
        optd.value = "";
        optd.text = "Date";
        dsel.appendChild(optd);
        for (var i = 1; i <= mlength; i++) {
            var opt = new Option();
            opt.value = opt.text = i.toString();
            if (i.toString() == d) opt.selected = true;
            dsel.appendChild(opt);
        }
    }
    validate_date();
  }

  validatePhone(control: FormControl): ValidationErrors | null {
    let regEx = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g;
    if(control.value && control.value.match(regEx)){
      return null;
    }
    else{
      return { validPhone: true};
    }
    //return control.value && control.value.minLength > 1?{ names: true}: null;
  }

  userForm = new FormGroup({
    mobilenumber: new FormControl('', [Validators.required, Validators.minLength(8), this.validatePhone]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    day: new FormControl('', []),
    month: new FormControl('', []),
    year: new FormControl('', []),
    gender: new FormControl('Male', []),
    email: new FormControl('', [Validators.required, Validators.email]),
    //password: new FormControl('', [Validators.required]),
    //repeatPassword: new FormControl('', [Validators.required, this.passwordsMatchValidator]),
  });

  get mobilenumber(): AbstractControl {
    return this.userForm.get('mobilenumber')!;
  }

  get firstname(): AbstractControl {
    return this.userForm.get('firstname')!;
  }

  get lastname(): AbstractControl {
    return this.userForm.get('lastname')!;
  }

  get day(): AbstractControl {
    return this.userForm.get('day')!;
  }

  get month(): AbstractControl {
    return this.userForm.get('month')!;
  }

  get year(): AbstractControl {
    return this.userForm.get('year')!;
  }

  get email(): AbstractControl {
    return this.userForm.get('email')!;
  }

  get gender(): AbstractControl {
    return this.userForm.get('gender')!;
  }

  login(): void {
    this.router.navigate(['']);
  }

  register(): void {
    if (this.userForm.invalid) {
      return;
    }

    const { mobilenumber, firstname, lastname, day, month, year, gender, email } = this.userForm.getRawValue();

    this.authService.register(mobilenumber, firstname, lastname, day, month, year, gender, email).subscribe(data => {
      //this.router.navigate(['']);
      this.isRegistered = true;
    });
  }
}
