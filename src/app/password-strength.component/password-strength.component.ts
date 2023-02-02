import { Input, Component } from "@angular/core";

@Component({
    selector: 'password-strength',
    templateUrl: './password-strength.component.html',
    styleUrls: ['./password-strength.component.css'],
})

export class PasswordStrength {
    @Input() passwordStrength!: string;
}