import { Component,Input} from '@angular/core';
import { User } from '../model/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  users:User[] = [];  
  title =  'pippo';

  insertNewUser (userName: HTMLInputElement ,nome : HTMLInputElement ,cognome: HTMLInputElement , email : HTMLInputElement):boolean {

    let addNewUser;
    console.log(userName.value);
    
    addNewUser = new User(userName.value,nome.value,cognome.value,0,email.value);

    this.users.push(addNewUser as User);
    return false;
  }

}
