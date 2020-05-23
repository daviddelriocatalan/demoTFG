import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {LayoutModule} from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ContentfulService } from './services/contentful/contentful.service';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuestrosserviciosComponent } from './nuestrosservicios/nuestrosservicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DialogContactoComponent } from './dialog-contacto/dialog-contacto.component';

const appRoutes: Routes = [
  { path: '', component: MainBodyComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: NuestrosserviciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  {
    path: ':**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    FooterComponent,
    PageNotFoundComponent,
    BlogPostComponent,
    BlogListComponent,
    NosotrosComponent,
    NuestrosserviciosComponent,
    ContactoComponent,
    DialogContactoComponent
  ],
  entryComponents: [DialogContactoComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    LayoutModule,
    MatDialogModule
  ],
  exports: [MatCardModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}
