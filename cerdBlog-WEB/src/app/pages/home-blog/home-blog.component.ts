import { Component } from '@angular/core';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { BackgroundComponent } from "../../components/background/background.component";

@Component({
  selector: 'app-home-blog',
  imports: [ToolbarComponent, BackgroundComponent],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.scss'
})
export class HomeBlogComponent {

}
