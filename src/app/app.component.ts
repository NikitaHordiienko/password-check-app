import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { InputComponent } from './input-password.component/input-password.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h3>{{passwordType}}</h3>
      <input-component> </input-component>
      <password-strength [passwordStrength]="passwordType"> </password-strength>
    </div>`,
  styleUrls: ['./app.component.css'],
})
  
export class AppComponent implements OnInit, AfterViewChecked {
  passwordType: string = ''
  
  @ViewChild(InputComponent) child !: InputComponent;

  constructor(private cd: ChangeDetectorRef) { }
  ngAfterViewChecked(): void {
    this.passwordType = this.child.passwordStrength
    this.cd.detectChanges();
  }
  
  ngOnInit(): void {

  }
}