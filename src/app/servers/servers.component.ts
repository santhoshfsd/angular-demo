import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No Server Created"
  serverName='Enter a value';
  serverCreated=false
  servers= ['Test Server 1','Test Server 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 1000);
  }


  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was Created"
    this.serverCreated = true;
    this.servers.push(this.serverName)
    
  }

  onUpdateServerName(event:any){
    this.serverName =  event.target.value;
  }
}
