import { Directive } from '@angular/core';
import { Input, HostListener, HostBinding } from '@angular/core';
import { ElementRef } from '@angular/core/';
import { Renderer } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {



  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
	this.isOpen = !this.isOpen;
  }



}
