import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';
import { Post } from './post.module';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ShareDataService]
})
export class PostsComponent implements OnInit {
  @Input() postSel: Post = {
    title: '1',
    description:'1'
  };
  @Output() showMoreEventEmitter  = new EventEmitter();

  constructor(public shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Post Component", this.shareDataService.count);
  }

  showMore() {
    this.showMoreEventEmitter.emit(this.postSel);
  }

}
