$(document).ready(function() {
   var chart = {
      zoomType: 'x'
   };
   var title = {
      text: 'Temprature'
   };
   var subtitle = {
      text: 'source wunderground.com'
   };
   var xAxis = {
      type: 'datetime',
      minRange: 24 * 3600000,
      title: {
         text: 'Hours'
      }
   };
   var yAxis = {
      title: {
         text: 'Celcious'
      }
   };
   var legend = {
      enabled: false
   };
   tooltip: {
       valueSuffix: ' *c'
   };
   var plotOptions = {
      // spline: {
         // fillColor: {
         //    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
         //    stops: [
         //       [0, Highcharts.getOptions().colors[0]],
         //       [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
         //    ]
         // },
         marker: {
            radius: 2
         },
         lineWidth: 1,
         states: {
            hover: {
               lineWidth: 1
            }
         },
         threshold: null
      // }
   };
   var series= [{
      name: 'Temprature',
      pointInterval: 3600000,
      pointStart: Date.UTC(2006, 0, 1),
      data: [7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,]
      }
   ];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.subtitle = subtitle;
   json.legend = legend;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.series = series;
   json.plotOptions = plotOptions;
   $('#wundergroundtmp').highcharts(json);




   var chart = {
      zoomType: 'x'
   };
   var title = {
      text: 'Dew Point'
   };
   var subtitle = {
      text: 'source wunderground.com'
   };
   var xAxis = {
      type: 'datetime',
      minRange: 24 * 3600000,
      title: {
         text: 'Hours'
      }
   };
   var yAxis = {
      title: {
         text: 'Celcious'
      },
      labels: {
              formatter: function() {
                  return this.value + ' *C';
              }
          },
   };
   var legend = {
      enabled: false
   };
   tooltip: {
       valueSuffix: ' *c'
   };
   var plotOptions = {
      // spline: {
         // fillColor: {
         //    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
         //    stops: [
         //       [0, Highcharts.getOptions().colors[0]],
         //       [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
         //    ]
         // },
         lineWidth: 1,
         states: {
            hover: {
               lineWidth: 1
            }
         },
         threshold: null
      // }
   };
   var series= [{
      type: 'spline',
      name: 'Dew Point',
      pointInterval: 3600000,
      pointStart: Date.UTC(2006, 0, 1),
      data: [7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,7,8,6,7,9,5,7,9,12,11,13,7,8,6,7,9,5,7,9,12,11,13,14,11,14,]
      }
   ];

   var json = {};
   json.chart = chart;
   json.title = title;
   json.subtitle = subtitle;
   json.legend = legend;
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.series = series;
   json.plotOptions = plotOptions;
   $('#wundergrounddpt').highcharts(json);
});
