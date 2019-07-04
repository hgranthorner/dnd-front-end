import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService } from '@app/services';
import { User, Character } from '@app/models';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  private characters: Character[]

  constructor(
    private readonly api: ApiService,
    private readonly auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUser
      .pipe(
        flatMap((user: User) => this.api.getCharacters(user.id))
      )
      .subscribe(characters => {
        this.characters = characters
        console.log(this.characters)
      })
  }

}
