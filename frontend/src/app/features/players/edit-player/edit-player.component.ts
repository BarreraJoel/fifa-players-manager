import { Component } from '@angular/core';
import { EditPlayerFormComponent } from "@/components/player/edit-player-form/edit-player-form.component";

@Component({
  selector: 'app-edit-player',
  imports: [
    EditPlayerFormComponent
  ],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css'
})
export class EditPlayerComponent {

}
