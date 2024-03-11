import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  //templateUrl: './servers.component.html',
  //template: `
 //   <app-server></app-server>
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!.';
  serverName = '';
  username = '';
  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created successfully. Server Name: ' + this.serverName;
  }

  onUpdateServerName(event: Event){{
      console.log(event)
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  }
}
