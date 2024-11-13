import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'talentsbase.client';
  @ViewChild('navbar', { read: ElementRef }) navbarRef!: ElementRef;
  @ViewChild('fullHeightDiv', { read: ElementRef }) fullHeightDiv!: ElementRef;
  constructor(private renderer: Renderer2) {

  }
  
  ngAfterViewInit() {
    const navbarHeight = this.navbarRef.nativeElement.offsetHeight;
    this.renderer.setStyle(this.fullHeightDiv.nativeElement, 'margin-top', `${navbarHeight}px`);
  }
}
