import { Component } from '@angular/core';

@Component({
  selector: 'app-co-header',
  templateUrl: './co-header.component.html'
})
export class CoHeaderComponent {
  dropdownVisible = false;
  selectedOption = 'ENG'; // Set 'ENG' as the default value

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.closeDropdown();
  }

  closeDropdown() {
    this.dropdownVisible = false;
  }
}
