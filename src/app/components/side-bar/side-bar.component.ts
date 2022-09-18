import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  navbarSections = [
    {
      title: "interface",
      sections: [
        {
          text: "components",
          icon: "fa-cog",
          collapse: true,
          toggleCollapse: true,
          collapseItem: [
            {
              collapseTitle: "custom components:",
              items: [
                {
                  text: "buttons"
                },{
                  text: "cards"
                }
              ]
            }
          ]
        },{
          text: "utilities",
          icon: "fa-wrench",
          collapse: true,
          toggleCollapse: true,
          collapseItem: [
            {
              collapseTitle: "custom utilities:",
              items: [
                {
                  text: "colors"
                },{
                  text: "borders"
                },{
                  text: "animation"
                },{
                  text: "other"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "addons",
      sections: [
        {
          text: "pages",
          icon: "fa-folder",
          collapse: true,
          toggleCollapse: true,
          collapseItem: [
            {
              collapseTitle: "login screens",
              items: [
                {
                  text: "login"
                },{
                  text: "register"
                },{
                  text: "forgot password"
                }
              ]
            },{
              collapseTitle: "other pages",
              items: [
                {
                  text: "404 page"
                },{
                  text: "blank page"
                }
              ]
            }
          ]
        },{
          text: "charts",
          icon: "fa-chart-area",
          collapse: false,
          toggleCollapse: true,

        },{
          text: "tables",
          icon: "fa-table",
          collapse: false,
          toggleCollapse: true,

        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
