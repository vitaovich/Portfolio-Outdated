import { Component } from '@angular/core';

import { Project }    from './project';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent {

  authors = ['Vitaliy Alekhnovich', 'Abe Lincoln' ];

  model = new Project(18, 'Robot wars', this.authors[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newProject() { this.model = new Project(33, '', '', '');  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
