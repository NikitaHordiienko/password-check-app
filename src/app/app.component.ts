import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
  
export class AppComponent {

  passwordValue: string = '';
  passwordStrength: string = 'default';

  checkPassword(value: any) {    
    this.passwordValue = value;

    if (this.passwordValue.length === 0) {

      this.passwordStrength = 'default';

    } else if (this.passwordValue.length < 8) {

      this.passwordStrength = 'unvalid';

    } else if (this.passwordValue.match(/(^[A-Za-z\s]*$)|(^[0-9]+$)|(^[!-\/:-@[-`{-~]+$)/)) {

      this.passwordStrength = 'easy';

    } else if (this.passwordValue.match(/(^[A-Za-z\s!-\/:-@[-`{-~]*$)|(^[A-Za-z\s0-9]+$)|(^[0-9!-\/:-@[-`{-~]+$)/)) {

      this.passwordStrength = 'medium';

    } else if (this.passwordValue.match(/(^[A-Za-z\s0-9!-\/:-@[-`{-~]+$)/)) {

      this.passwordStrength = 'strong';
    } 
  }
}