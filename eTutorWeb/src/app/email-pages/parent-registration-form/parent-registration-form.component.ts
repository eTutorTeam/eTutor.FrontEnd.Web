import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-parent-registration-form',
  templateUrl: './parent-registration-form.component.html',
  styleUrls: ['./parent-registration-form.component.scss']
})
export class ParentRegistrationFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
