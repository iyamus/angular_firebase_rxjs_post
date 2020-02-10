import { Component, OnInit } from '@angular/core';

// Form에 사용할 기능을 추가함.
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { ServiceService } from "../service.service";
import { Post } from "../models/Post";

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  public tags: any[] =[];
  public image: any;

  public postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
    tags: new FormControl('', Validators.required),
  });

  public handleInput($event: Event){
    this.image= $event.target["files"];
    console.log(this.image);
  }

  

  ngOnInit() {
  }

}
