import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {StackedTimeseriesChart} from "../lib/StackedTimeseriesChart"

export function D():Promise<any> {
    return d3.csv("../data/D.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                share: parseFloat(d.share),
                source: d.source
            }})

        let definition:ChartDefinition = {
            name: "D",
            data: dd,
            annotations: [
                {name: "Change in energy production in the state of Kansas"}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "share",
                    "domain": [0, 100],
                    annotations: [{name: "Share of each energy source", offset: {left: 0, top: 0}}]
                },
                {
                    "name": "x",
                    "field": "year",
                    "domain": [Date.parse("2001-01-01"), Date.parse("2018-01-01")]
                },
            ],
            cast: {
                "field" : "source",
                "axes": {
                    "x": "x",
                    "y": "y"
                },
                "characters": [
                    { "name": "wind", "color": "#69C0C9",
                        annotations: [{name: "Wind"}]
                    },
                    { "name": "nuclear", "color": "#9AA353",
                        annotations: [{name: "Nuclear"}]
                    },
                    { "name": "coal", "color": "#A47351",
                        annotations: [{name: "Coal", offset: {top: 15}}]
                    },
                    { "name": "crude oil", "color": "#724E3E", 
                        annotations: [{name: "Oil"}]
                    },
                    { "name": "natural gas", "color": "#969696",
                        annotations: [{name: "Natural gas"}]
                    },
                ]
            }
        }
        return new StackedTimeseriesChart(definition)
    })
}
