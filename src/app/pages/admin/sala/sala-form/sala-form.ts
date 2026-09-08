import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';


@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ContainerComponent],
  templateUrl: './sala-form.html',
  styleUrl: './sala-form.css'
})
export class SalaFormComponent {

}
