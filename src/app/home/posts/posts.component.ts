import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ ShareDataService ]
})
export class PostsComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";

  @Output() goToDetailsEmiter = new EventEmitter();

  constructor(public shareDataService: ShareDataService) { }

  ngOnInit(): void {
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Post Component", this.shareDataService.count);
  }

  goToDetails(): void{
    let postObj: {
      title: string,
      description: string,
      likeCount: number
    } = {
      title: this.title,
      description: this.description,
      likeCount: this.shareDataService.count
    }
    this.goToDetailsEmiter.emit(postObj);
  }

}
