import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  usersService = inject(UserService)

}