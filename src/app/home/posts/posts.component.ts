import {Component, Input, OnInit} from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';
import {CounterService} from "../../shared/services/counter.service";
import {count} from "rxjs/operators";
import {GlobalService} from "../../shared/services/global-service";

export interface PostInterface {
  title: String,
  content: String
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [CounterService]
})
export class PostsComponent implements OnInit {

  @Input('postData') post:any = [];
  // @Input('postData') post:PostInterface[] = [];
  public postLikeCount: number = 0;
  constructor(private shareDataService: ShareDataService, private counterService: CounterService,private globalService: GlobalService) { }

  ngOnInit(): void {
    console.log(this.post);
    this.postLikeCount = this.counterService.count;
  }

  updateCount(){
    // this.shareDataService.updateCount();
    // console.log("Post Component", this.shareDataService.count);

    this.counterService.updateCount();
    this.postLikeCount = this.counterService.count;
  }

  navigateTab() {
    this.globalService.navigateTab(this.post);
  }

}
