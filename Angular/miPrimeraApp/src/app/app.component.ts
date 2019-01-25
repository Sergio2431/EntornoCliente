import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Tarjeta de presentación';
  buttonText: string = 'Save';
  isDisable: boolean = false;
  name: string = '';
  position: string = '';

  saveEvent() {
    if(this.buttonText === 'Save'){
      this.buttonText = 'Edit';
      this.isDisable = true;
    } else{
      this.buttonText = 'Save';
      this.isDisable = false;
    }
  }

  showInformation(){
     alert(this.name+' '+this.position);
  }
  
  resetInformation(){
    this.name= '';
    this.position= '';
 }
}
