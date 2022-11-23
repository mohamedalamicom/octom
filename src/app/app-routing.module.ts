import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './_pages/activity/activity.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { EbooksComponent } from './_pages/ebooks/ebooks.component';
import { FilesComponent } from './_pages/files/files.component';
import { MessengerComponent } from './_pages/messenger/messenger.component';
import { SettingsComponent } from './_pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
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
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
