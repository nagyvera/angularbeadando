import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const characters = [
      {id: 11, name: 'Thomas Maddox', birth: '1990-03-13', job: 'FBI agent'},
      {id: 12, name: 'Taylor Maddox', birth: '1995-01-01', job: 'Fireman'},
      {id: 13, name: 'Tyler Maddox', birth: '1995-01-01', job: 'Fireman'},
      {id: 14, name: 'Trenton Maddox', birth: '1997-07-04', job: 'Tattoo artist'},
      {id: 15, name: 'Travis Maddox', birth: '1998-04-01', job: 'FBI agent'},
      {id: 16, name: 'Abby Abernathy', birth: '1998-11-24', job: 'Teacher'},
      {id: 17, name: 'Liis Lindy', birth: '1992-02-23', job: 'FBI agent'},
      {id: 18, name: 'Ellison Edson', birth: '1996-12-09', job: 'Interviewer' },
      {id: 19, name: 'Camile Camlin', birth: '1997-05-29', job: 'Bartender'},
      {id: 20, name: 'Shepley Maddox', birth: '1998-09-08', job: 'biztiboy'}
    ];
    return {characters};
  }

  genId(characters: Character[]): number{
    return  characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}
