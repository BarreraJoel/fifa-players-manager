import { Component } from '@angular/core';
import { EditPlayerFormComponent } from "@/components/player/edit-player-form/edit-player-form.component";
import { BackButtonComponent } from "@/components/common/back-button/back-button.component";

@Component({
  selector: 'app-edit-player',
  imports: [
    EditPlayerFormComponent,
    BackButtonComponent
],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css'
})
export class EditPlayerComponent {

}
