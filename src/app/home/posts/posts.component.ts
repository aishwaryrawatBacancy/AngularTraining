import { PostDataServices } from './postsData.service';
import { Component, OnInit, Input } from '@angular/core';
import { ShareDataService } from 'src/app/shared/services/share-data.service';
import { CommonServices } from '../../common.serivce';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers:[PostDataServices]
})
export class PostsComponent implements OnInit {

  @Input() card: { title: string; text: string } = {title:'',text:''};
  likesCount :number = this.postDataService.count
  constructor(
    private shareDataService: ShareDataService,
    private postDataService: PostDataServices,
    private commonServices:CommonServices
  ) {}
    
  ngOnInit(): void {
    // this.card = this.dataService.cards[0]
    this.likesCount = this.postDataService.count
  }

  updateLikesCount() {
    this.postDataService.updateCount();
    console.log('Post Component ',this.card.title,'-' ,this.postDataService.count);
    this.likesCount = this.postDataService.count
  }

  goToDetails(title:string){
    this.commonServices.addContent(title)
    this.commonServices.showHome = false
  }
}
