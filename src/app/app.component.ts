import { Component } from '@angular/core';
import { ToggleLightService } from './toggle.light.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private toggleLightService : ToggleLightService
  ) {}

  toggleLight(state: string): void {
    this.toggleLightService.toggleLight(state);

  }
}
