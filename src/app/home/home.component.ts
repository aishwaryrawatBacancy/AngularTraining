import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription, Observable, Subject} from 'rxjs';
import {tap, map} from 'rxjs/operators';
import { ShareDataService } from '../shared/services/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ShareDataService]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private shareDataService: ShareDataService) { }
  intervalSubscription: Subscription = new Subscription();



  ngOnInit(): void {
    //this.intervalSubscription = interval(5).subscribe(data => console.log(data));

    // const customIntervalObservable = new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);  //emit the data
    //     if(count === 2){
    //       observer.complete(); // to complete the observable
    //     }
    //     if(count > 3){
    //       observer.error(Error("The count is greater than 3")); // to throw error and cancel the observable.
    //     }
    //     count += 1;
    //   },1000)
    // });

    this.intervalSubscription = this.shareDataService.trainingSubject.subscribe(liked => {
      if(liked){
        console.log("The post has been liked");
      }
    })

    //append "Count"
    // this.intervalSubscription = customIntervalObservable
    // .pipe(map(data => "Count : " + data), tap(data => console.log("This is my " + data)))
    // .subscribe(
    //   data => console.log(data),
    //     error => console.log(error),
    //     () => { console.log(" the interval has been completed.")}
    //   );
  }

  updateCount(){
    this.shareDataService.updateCount();
    console.log("Home component", this.shareDataService.count);
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}