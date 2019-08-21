export const rightChartData = props => {
    console.log(props.right.right.scores.teleport_city_score)
    return {
        "chart": {
            "caption": "Quality of Life Ranking",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "numberSuffix": "%",
            "theme": "umber",
            "showToolTip": "0"
          },
          "colorRange": {
            "color": [
              {
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
              },
              {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
              },
              {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
              }
            ]
          },
          "dials": {
            "dial": [
              {
                "value": Math.round(props.right.right.scores.teleport_city_score)
              }
            ]
          }      
    }
}
