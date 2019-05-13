import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {StackedTimeseriesChart} from "../lib/StackedTimeseriesChart"

export function B1():Promise<any> {
    return d3.csv("../data/B.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                share: parseFloat(d.share),
                source: d.source
            }})

        let definition:ChartDefinition = {
            name: "B1",
            data: dd,
            annotations: [
                {name: "How the ratios of the different energy sources have changed over time", offset: {left: -5}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "share",
                    "domain": [0, 100],
                    annotations: [{name: "Share of each energy source", offset: {top: -40, left: 0}}]
                },
                {
                    "name": "x",
                    "field": "year",
                    "domain": [Date.parse("2002-01-01"), Date.parse("2017-01-01")],
                    "ticks": d3.timeYears(new Date(2002,1,1), new Date(2017,1,1), 2)
                },
            ],
            cast: {
                "field" : "source",
                "axes": {
                    "x": "x",
                    "y": "y"
                },
                "characters": [
                    {name: "geothermal", color: "transparent"},
                    {name: "solar", color: "transparent"},
                    { "name": "wind", "color": "#69C0C9",
                        annotations: [
                            {name: "Wind", offset: {left:0, top: -10}, class: "outside"},
                        ]
                    } ,
                ]
            },
            design: {font: {family: "Eczar", size: 13}, margin: {top: 160, right: 100}}
        }
        return new StackedTimeseriesChart(definition)
    })
}
