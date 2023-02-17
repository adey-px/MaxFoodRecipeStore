import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

// Control open & close of dropdown

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false

  /* After open, click dropdown to close
  @HostListener('click') openDropdown() {
    this.isOpen = !this.isOpen
  } */

  /* After open, click anywhere to close */
  @HostListener('document:click', ['$event']) openDropdown(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
  }
  constructor(private elRef: ElementRef) {}
}

/* Directives are used for state management
  NB: If add Bootstrap class 'open' to dropdown,
  it opens it. That built in class is selected
  to toggle betwn open & close. The component
  selector name 'appDropdown' is applied in all
  dropdown elements e.g. header and recipe-detail.
*/
