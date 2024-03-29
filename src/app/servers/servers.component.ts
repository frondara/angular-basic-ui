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
  resetText = false;
  servers = ['test server 1','test server 2'];
  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created successfully. Server Name: ' + this.serverName;
  }

  onUpdateServerName(event: Event){{
      console.log(event)
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  }
  onResetText(){
    this.resetText = true;
    this.username='';
  }
}
