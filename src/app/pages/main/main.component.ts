import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public ourCards: any;
  public cards = [
    {
      title: 'Protección Red WiFi',
      icon: './../../assets/global/img/icons/wifi-icon.svg',
      contents: [{
        alias: 'Casa',
        num: '91 681 74 17',
        services: [{
          name: 'service1',
          status: 'active'
        },
        {
          name: 'service2',
          status: 'active'
        },
        {
          name: 'service3',
          status: 'inactive'
        }],
        link: 'wifi-protection'
      }],
    },
    {
      title: 'Protección Red Móvil',
      icon: './../../assets/global/img/icons/smartphone-icon.svg',
      contents: [
        {
          alias: 'Julia',
          num: '634 567 879',
          warning: true,
          services: [{
            name: 'service1',
            status: 'inactive'
          },
          {
            name: 'service2',
            status: 'active'
          },
          {
            name: 'service3',
            status: 'active'
          }],
          link: 'otherlink'
        },
        {
          alias: 'Daniel',
          num: '678 123 456',
          services: [{
            name: 'service1',
            status: 'active'
          },
          {
            name: 'service2',
            status: 'inactive'
          },
          {
            name: 'service3',
            status: 'active'
          }],
        },
        {
          alias: 'Iratxe',
          num: '654 321 543',
          services: [{
            name: 'service1',
            status: 'active'
          },
          {
            name: 'service2',
            status: 'active'
          },
          {
            name: 'service3',
            status: 'inactive'
          }],
        }
      ],
    }
  ];
  public carousel = [{
    title: 'Consejos navegación segura',
    icon: './../../assets/global/img/icons/heart-icon.svg',
  }];

  public slides = [{
    name: 'uno',
    img: 'https://picsum.photos/id/1/1000/300',
    text: 'Evita entrar a webs bancarias desde el email.'
  },
  {
    name: 'dos',
    img: 'https://picsum.photos/id/2/1000/300',
    text: '2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'
  },
  {
    name: 'tres',
    img: 'https://picsum.photos/id/3/1000/300',
    text: '3-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'

  },
  {
    name: 'cuatro',
    img: 'https://picsum.photos/id/43/1000/300',
    text: '4-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam voluptatem cupiditate maxime deleniti quia.'

  }]
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.data.user);
    // this.ourCards = this.route.snapshot.user;
    // console.log(this.ourCards);
  }
}
