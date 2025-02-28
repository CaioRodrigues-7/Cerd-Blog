import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  imports: 
  [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  template: 
  `<div class="master-div">
      <div class="tool-bar">
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
        </button>
        <span id="name-owner">cerddev</span>
      </div>
        
      <div class="align-button">
        <button class="custom-button" routerLink="/create-post">Create new post</button>
        <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
          <mat-icon>share</mat-icon>
        </button>
      </div>
    </div>`,
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {}
