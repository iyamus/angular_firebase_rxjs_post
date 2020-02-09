import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

//angular-fire
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
//      in version 6, StorageBucket changes to BUCKET
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";


// component list
import { AddpostComponent } from "../app/addpost/addpost.component";
import { MainComponent } from "../app/main/main.component";
import { PostComponent } from "../app/post/post.component";


@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    MainComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [{ provide: BUCKET, useValue: 'gs://angular-firebase-rxjs-80c14.appspot.com' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
