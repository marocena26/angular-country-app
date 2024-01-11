import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePageComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
