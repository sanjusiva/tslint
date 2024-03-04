import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tslint';
  // foo(a:any){
  //   var bar=0;
  //   console.log(a);
  // }
  creatingDummy() {
    if(1==1){
      console.log('here');
    }
    return 'dummy';
  }
}
