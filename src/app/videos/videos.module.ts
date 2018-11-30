import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideoListComponent } from '../video-list/video-list.component';
import { VideoDetailComponent } from '../video-detail/video-detail.component';

@NgModule({
  declarations: [VideoListComponent, VideoDetailComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ],
  exports: [
    VideoListComponent
  ]
})
export class VideosModule { }
