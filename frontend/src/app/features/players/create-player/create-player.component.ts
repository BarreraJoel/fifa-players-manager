import { Component } from '@angular/core';
import { CreatePlayerFormComponent } from "@/components/player/create-player-form/create-player-form.component";

@Component({
  selector: 'app-create-player',
  imports: [
    CreatePlayerFormComponent,
],
  templateUrl: './create-player.component.html',
  styleUrl: './create-player.component.css'
})
export class CreatePlayerComponent {

}
