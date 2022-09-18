import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart, ChartType, registerables, Tick} from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  statusDescriptionCol = [
    {
      borderColor: "primary",
      title: "earnings (monthly)",
      detail: "$40,000",
      per: false,
      icon: "fa-calendar"
    },
    {
      borderColor: "success",
      title: "earnings (annual)",
      detail: "$215,000",
      per: false,
      icon: "fa-dollar-sign"
    },
    {
      borderColor: "info",
      title: "tasks",
      detail: "50%",
      per: true,
      icon: "fa-clipboard-list"
    },
    {
      borderColor: "warning",
      title: "pending requests",
      detail: "18",
      per: false,
      icon: "fa-comments"
    }
  ];
  chartsData = [
    {
      title: "Earnings Overview",
      chartId: "line-chart",
      col: "col-lg-7 col-xl-8"
    }, {
      title: "Revenue Sources",
      chartId: "d-chart",
      col: "col-lg-5 col-xl-4"
    }
  ]
  chartTypeLine: ChartType = "line";
  chartTypeDoughnut: ChartType = "doughnut";
  dataLine = {
    labels: ["Jan", "Feb", "Mar", "Apr","May", "Jun","Jul", "Agu","Sep", "Oct","Nov","Dec"],
    datasets: [{
      label: "Earnings",
      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
      fill: true,
      borderColor: "rgba(78,115,223,1)",
      tension: .4,
      pointHoverBackgroundColor: "rgba(78,115,223,1)",
      pointRadius: 4,
      pointHoverRadius: 3,
      segment: {
        backgroundColor: "rgba(78,115,223,0.04)"
      },
    }]
  };
  dataDoughnut = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [{
      labels: [''],
      data: [55, 30, 15],
      backgroundColor: [
        "rgba(78,115,223,1)",
        "rgba(54,185,204,1)",
        "rgba(28,200,138,1)"
      ],
      weight: .67
    }]
  };
  configLine = {
    type: this.chartTypeLine,
    data: this.dataLine,
    options: {
      responsive: true,
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        y: {
          grid: {
            borderDash: [3, 1],
            color: function (context: {index: number, type: string, tick: Tick}) {
              if(context.index % 2 == 0) {
                return "rgba(201,201,201,0.54)";
              } else {
                return "rgba(0,0,0,0)";
              }
            }
          },
          ticks: {
            callback: function (value: number, index: number) {
              if(index % 2 === 0) {
                let num = 0
                let newArray:string[] = [];
                value.toString().split("").reverse().forEach(item => {
                  num += 1
                  if(num === 3) {
                    newArray.push(item);
                    newArray.push(",");
                  } else {
                    newArray.push(item);
                  }
                })
                return `$${newArray.reverse().join("")}`;
              } else {
                return "";
              }
            },
            color: "#858796"
          }
        },
        x:{
          grid: {
            display: false
          },
          ticks: {
            callback: function (index: number) {
              if(index % 2 === 0) {
                return ["Jan", "Feb", "Mar", "Apr","May", "Jun","Jul", "Agu","Sep", "Oct","Nov","Dec"][index];
              } else {
                return "";
              }
            }
          }
        },
      },
      elements: {
        point: {
          backgroundColor: "rgba(78,115,223,1)"
        },
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          displayColors: false,
          backgroundColor: "white",
          bodyColor: "#adadad",
          titleColor: "rgb(126,128,140)",
          borderColor: "#adadad",
          borderWidth: 1,
          titleFont: {
            size: 14
          },
          padding: 15,
          callbacks: {
            label: function(text: {chart:Chart, formattedValue: string}) {
              return `Earnings: $${text.formattedValue}`
            }
          }
        }
      }
    }
  };
  configD = {
    type: this.chartTypeDoughnut,
    data: this.dataDoughnut,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: 100,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          displayColors: false,
          backgroundColor: "white",
          bodyColor: "#858796",
          borderWidth: 1,
          borderColor: "rgba(133,135,150,0.48)",
          padding: 13,
          bodyFont: 15,
        }
      }
    },
  };

  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let canvasLine = document.getElementById("line-chart") as HTMLCanvasElement;
    let canvasDoughnut = document.getElementById("d-chart") as HTMLCanvasElement;
    let chartLine = new Chart(
      canvasLine.getContext("2d"),
      //@ts-ignore
      this.configLine
    );
    let chartDoughnut = new Chart(
      canvasDoughnut.getContext("2d"),
      //@ts-ignore
      this.configD,
    );
    Chart.defaults.font.size = 13.2;
  }

}
