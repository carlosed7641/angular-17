import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { retry, switchMap } from 'rxjs';
import { User } from '../../../interfaces/req-response';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private route = inject(ActivatedRoute)
  private userService = inject(UserService)

  user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  )

  titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del usuario ${this.user()?.first_name} ${this.user()?.last_name}`
    }
    return 'Informacion del usuario'
  })
  //  user = signal<User | undefined>(undefined)

  // constructor() {
  //   this.route.params.subscribe(params => {

  //   })
  // }

}
