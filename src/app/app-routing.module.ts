import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeAccessComponent } from './code-access/code-access.component';
import { ExampleContainerComponent } from './example-container/example-container.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ActivityComponent } from './_pages/activity/activity.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { FilesComponent } from './_pages/files/files.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { SettingsComponent } from './_pages/settings/settings.component';

const routes: Routes = [ 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
    /*
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'activity',
        component: ActivityComponent
      },
      {
        path: 'ebooks',
        component: EbooksComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'messenger',
        component: MessengerComponent
      },
      
      {
        path: 'files',
        component: FilesComponent
      }
    ]
    */
  },
  {
    path: 'login',
    component: ExampleContainerComponent
  },
  {
    path:'newsletter',
    component: NewsletterComponent
  },
  {
    path: 'code-access',
    component: CodeAccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
