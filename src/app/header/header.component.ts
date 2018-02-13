import { Component } from "@angular/core";
import { EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})



export class HeaderComponent {

    @Output() featureSelected = new EventEmitter<string>();
    // instantiate object based on eventemitter class

 onSelect(feature: string)
 {
     this.featureSelected.emit(feature);

 }

}