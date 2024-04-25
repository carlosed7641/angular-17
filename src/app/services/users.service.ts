import { Injectable, computed, inject, signal } from '@angular/core'
import { User, UserResponse, UsersResponse } from '../interfaces/req-response'
import { HttpClient } from '@angular/common/http'
import { delay, map } from 'rxjs'

interface State {
  users: User[]
  loading: boolean
}

@Injectable({ providedIn: 'root' })
export class UserService {

  private http = inject(HttpClient)

  #state = signal<State>({
    loading: false,
    users: []
  })

  users = computed(() => this.#state().users)
  loading = computed(() => this.#state().loading)

  constructor() {

    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe(response => {
        this.#state.set({
          loading: false,
          users: response.data
        })
      })
  }

  getUserById(id: string) {

    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(resp => resp.data)
      )

  }


}
