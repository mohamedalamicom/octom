import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { FilesComponent } from './_pages/files/files.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { SettingsComponent } from './_pages/settings/settings.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './_components/input/input.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ButtonComponent } from './_components/button/button.component';
import { CheckboxComponent } from './_components/checkbox/checkbox.component';
import { ExampleContainerComponent } from './example-container/example-container.component';
import { TotoComponent } from './_components/toto/toto.component';
import { MessageErrorComponent } from './_components/message-error/message-error.component';
import { ParentComponent } from './parent/parent.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CodeAccessComponent } from './code-access/code-access.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ActivityComponent,
    FilesComponent,
    MessengerComponent,
    EbooksComponent,
    SettingsComponent,
    LoginComponent,
    MainComponent,
    InputComponent,
    LoginFormComponent,
    ButtonComponent,
    CheckboxComponent,
    ExampleContainerComponent,
    TotoComponent,
    MessageErrorComponent,
    ParentComponent,
    NewsletterComponent,
    CodeAccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
