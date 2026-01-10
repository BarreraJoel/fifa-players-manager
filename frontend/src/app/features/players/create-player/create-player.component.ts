import { Component } from '@angular/core';
import { CreatePlayerFormComponent } from "@/components/player/create-player-form/create-player-form.component";
import { BackButtonComponent } from "@/components/common/back-button/back-button.component";

@Component({
  selector: 'app-create-player',
  imports: [
    CreatePlayerFormComponent,
    BackButtonComponent
],
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.css'
})
export class CreatePlayerComponent {

}
