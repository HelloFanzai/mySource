import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    template:`
        <p>Green is happy<p>
    `,
    styles:[
        `
        p{
            background-color:pink;
        }
        `
    ]
})
export class WarningAlertComponent{

}