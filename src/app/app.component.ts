import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebComponentsComponent, WebComponentsService } from 'web-components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WebComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private webComponentsService = inject(WebComponentsService);

  message: string = '';
  ngOnInit(): void {
    this.message = this.webComponentsService.getHello();
  }
  title = 'demo';
}
