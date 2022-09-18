import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItem = [
    {
      icon: "fa-bell",
      badgeText: "3+"
    },
    {
      icon: "fa-envelope",
      badgeText: "7"
    }
  ]
  dropdownList = [
    {
      title: "ALERT CENTER",
    },
    {
      title: "MESSAGE CENTER",
    }
  ];
  dropdownItemsNot = [
    {
      color: "primary",
      title: "December 12, 2019",
      text: "A new monthly report is ready to download!",
      icon: "file-alt"
    },{
      color: "success",
      title: "December 7, 2019",
      text: "$290.29 has been deposited into your account!",
      icon: "donate"
    },{
      color: "warning",
      title: "December 2, 2019",
      text: "Spending Alert: We've noticed unusually high spending for your account.",
      icon: "exclamation-triangle"
    }
  ]
  dropdownItemsMessage = [
    {
      message: "Hi there! I am wondering if you can help me with a problem I've been having.",
      icon: "https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg",
      title: "Emily Fowler · 58m",
      status: "#1cc88a"
    },{
      message: "I have the photos that you ordered last month, how would you like them sent to you?",
      icon: "https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg",
      title: "Jae Chun · 1d",
      status: "#eaecf4"
    }, {
      message: "Last month's report looks great, I am very happy with the progress so far, keep up the good work!",
      icon: "https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg",
      title: "Morgan Alvarez · 2d",
      status: "#f6c23e"
    }, {
      message: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...",
      icon: "asd",
      title: "Chicken the Dog · 2w",
      status: "#1cc88a"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
