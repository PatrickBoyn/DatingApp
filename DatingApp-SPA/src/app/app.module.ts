import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./_services/auth.service";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ErrorInterceptorProvider} from "./_services/error.interceptor";
import {AlertifyService} from "./_services/alertify.service";
import {
  BsDatepickerModule,
  BsDropdownModule,
  ButtonsModule,
  PaginationConfig,
  PaginationModule,
  TabsModule
} from "ngx-bootstrap";
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {AuthGuard} from "./_guards/auth.guard";
import {UserService} from "./_services/user.service";
import { MemberCardComponent } from './Members/member-card/member-card.component';
import {JwtModule} from "@auth0/angular-jwt";
import { MemberDetailComponent } from './Members/member-detail/member-detail.component';
import {MemberDetailResolver} from "./_resolvers/member-detail.resolver";
import {MemberListResolver} from "./_resolvers/member-list.resolvoer";
import {NgxGalleryModule} from "ngx-gallery";
import { MemberEditComponent } from './Members/member-edit/member-edit.component';
import {MemberEditResolver} from "./_resolvers/member-edit.resolver";
import {PreventUnsavedChanges} from "./_guards/prevent-unsaved-changes-guard";
import { PhotoEditorComponent } from './Members/photo-editor/photo-editor.component';
import {FileUploadModule} from "ng2-file-upload";
import {TimeAgoPipe} from "time-ago-pipe";
import {ListResolver} from "./_resolvers/lists.resolver";


export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberDetailComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    FileUploadModule,
    PaginationModule,
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        whitelistedDomains:['localhost:5000'],
        blacklistedRoutes:['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    MemberDetailResolver,
    MemberListResolver,
    MemberEditResolver,
    PreventUnsavedChanges,
    PaginationConfig,
    ListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
