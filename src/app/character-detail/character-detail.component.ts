import {Component, Input, OnInit} from '@angular/core';

import { Character } from '../character';
import { CharacterService } from '../character.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {

  @Input() character: Character;

  angForm: FormGroup;

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      birth: ['', Validators.required ],
      job: ['', Validators.required ]
    });
  }

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location,
    private fb: FormBuilder
  ) { this.createForm(); }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.characterService.updateCharacter(this.character)
      .subscribe(() => this.goBack());
  }
}
