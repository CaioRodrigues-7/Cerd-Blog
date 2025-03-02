import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-all',
  imports: [],
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
      }, error =>{
        this.snackBar.open("Something went wrong!!!", "OK")
      })
    }
}
