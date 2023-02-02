import { Input, Component, OnInit } from "@angular/core";

@Component({
    selector: 'input-component',
    templateUrl: './input-password.component.html',
    styleUrls: ['./input-password.component.css'],
})

export class InputComponent {
    
  passwordValue: string = '';
  passwordStrength: string = 'default';
    
  checkPassword(value: string) {    
    this.passwordValue = value;
    console.log(this.passwordValue)

    if (this.passwordValue.length === 0) {

        this.passwordStrength = 'default';
        console.log(this.passwordStrength)

    } else if (this.passwordValue.length < 8) {

        this.passwordStrength = 'unvalid';
        console.log(this.passwordStrength)

    } else if (this.passwordValue.match(/(^[A-Za-z\s]*$)|(^[0-9]+$)|(^[!-\/:-@[-`{-~]+$)/)) {

      this.passwordStrength = 'easy';
        console.log(this.passwordStrength)
    } else if (this.passwordValue.match(/(^[A-Za-z\s!-\/:-@[-`{-~]*$)|(^[A-Za-z\s0-9]+$)|(^[0-9!-\/:-@[-`{-~]+$)/)) {

      this.passwordStrength = 'medium';
        console.log(this.passwordStrength)
    } else if (this.passwordValue.match(/(^[A-Za-z\s0-9!-\/:-@[-`{-~]+$)/)) {

        this.passwordStrength = 'strong';
        console.log(this.passwordStrength)
    } 
  }
}