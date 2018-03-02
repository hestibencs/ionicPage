import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ListPage,
    ComponentsModule
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
})
export class ListPageModule {}
