import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .yes{
            color:white
        }
    `]
})

export class ServerComponent {
    serverId = 10
    serverStatus = 'yes'

    constructor(){
        this.serverStatus= Math.random()>=0.5 ? 'yes':'no'
    }

    getServerStatus(){
        return this.serverStatus
    }

    getColor(){
        return this.serverStatus == 'yes'? 'green':'red'
    }

    theReDo(){
        this.serverStatus= Math.random()>=0.5 ? 'yes':'no'
        return this.serverStatus == 'yes'? 'green':'red'
    }

}