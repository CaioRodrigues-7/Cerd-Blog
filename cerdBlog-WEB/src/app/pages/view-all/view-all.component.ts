import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-all',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    CommonModule,
    MatGridListModule
],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss'
})
export class ViewAllComponent implements OnInit{
  allPosts:any;

  constructor(private postService: PostService,
    private snackBar: MatSnackBar){}

    ngOnInit(): void {
      this.getAllPosts();
    }

    getAllPosts(){
      this.postService.getAllPosts().subscribe(res =>{
        console.log(res);
        this.allPosts = res;
        this.allPosts = res;
      }, error =>{
        this.snackBar.open("Something went wrong!!!", "OK")
      })
    }
}
