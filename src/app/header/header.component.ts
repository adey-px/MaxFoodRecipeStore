import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// Configure header for navigation
export class HeaderComponent {
  @Output() whenClick = new EventEmitter<string>();

  onSelect(feature: string) {
    this.whenClick.emit(feature)
  }
}

/* NB:
  @Output allows listens to clickEventt in app component
*/
