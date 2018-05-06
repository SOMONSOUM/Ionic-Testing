import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

// Slides interface
export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})

export class IntroPage {
  slides: Slide [];
  showSkip = true;
  dir: string = 'ltr';


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public translate: TranslateService,
              public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["INTRO_SLIDE1_TITLE",
      "INTRO_SLIDE1_DESCRIPTION",
      "INTRO_SLIDE2_TITLE",
      "INTRO_SLIDE2_DESCRIPTION",
      "INTRO_SLIDE3_TITLE",
      "INTRO_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: values.INTRO_SLIDE1_TITLE,
            description: values.INTRO_SLIDE1_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
            title: values.INTRO_SLIDE2_TITLE,
            description: values.INTRO_SLIDE2_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
            title: values.INTRO_SLIDE3_TITLE,
            description: values.INTRO_SLIDE3_DESCRIPTION,
            image: 'assets/img/ica-slidebox-img-3.png',
          }
        ];
      });
  }

  startApp() {
    this.navCtrl.setRoot('HomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

}
