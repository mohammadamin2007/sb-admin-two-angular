import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsList = [
    {
      title: "server migration",
      percent: 20,
      bg: "danger"
    },{
      title: "sales tracking",
      percent: 40,
      bg: "warning"
    },{
      title: "customer database",
      percent: 60,
      bg: "primary"
    },{
      title: "payout details",
      percent: 80,
      bg: "info"
    },{
      title: "account setup",
      percent: 100,
      bg: "success"
    }
  ]
  boxColor = [
    {
      bg: "primary",
      rgb: "#4e73df"
    },{
      bg: "success",
      rgb: "#1cc88a"
    }, {
      bg: "info",
      rgb: "#36b9cc"
    }, {
      bg: "warning",
      rgb: "#f6c23e"
    }, {
      bg: "danger",
      rgb: "#e74a3b"
    }, {
      bg: "secondary",
      rgb: "#858796"
    }, {
      bg: "light",
      rgb: "#f8f9fc"
    }, {
      bg: "dark",
      rgb: "#5a5c69"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
