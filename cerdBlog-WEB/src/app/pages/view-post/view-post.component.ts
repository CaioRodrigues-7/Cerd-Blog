import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-post',
  imports: 
  [
    RouterModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent implements OnInit{
  postId:any;
  postData:any;

  constructor(private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,){}

  ngOnInit(){
    this.postId = this.activatedRoute.snapshot.params['id'];
    console.log(this.postId)
    this.getPostById();
  }

  getPostById(){
    this.postService.getPostById(this.postId).subscribe(res=>{
      this.postData = res;
      console.log(res);
    }, erros=> {
      this.matSnackBar.open("Something went wrong!!!", "OK")
    })
  }
}
