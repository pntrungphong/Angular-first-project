import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id!: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=> {
      this.id = +param['id'];
      this.editMode = param['id'] != null;
    })
  }

}
