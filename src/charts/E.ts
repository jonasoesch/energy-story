import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {TimeseriesChart} from "../lib/TimeseriesChart"

export function E():Promise<any> {
    return d3.csv("../data/lcoe.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                lcoe: parseFloat(d.lcoe),
                source: d.source
            }})

        let definition:ChartDefinition = {
            name: "E",
            data: dd,
            annotations: [
                {name: "Evolution of the price of different energy sources", offset: {top: -3, left: -30}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "lcoe",
                    "domain": [0, 180],
                    annotations: [{name: "USD per million BTU", offset: {left: 10, top: 10}}]
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
                    { "name": "coal", "color": "#A47351",
                        annotations: [{"name": "Coal", offset: {top: -8}}]
                    },
                    { "name": "wind", "color": "#61A8B0",
                        annotations: [{"name": "Wind", offset: {top: 10}}]
                    },
                    { "name": "nuclear", "color": "#9AA353",
                        annotations: [{"name": "Nuclear"}]
                    },
                    { "name": "solar", "color": "#E0A317",
                        annotations: [{"name": "Solar power", offset: {top: 3}}]
                    },
                    { "name": "natural gas", "color": "#969696",
                        annotations: [{"name": "Natural gas"}]
                    },
                ]
            },
            design: {font: {family: "Eczar", size: 13}, margin: {top: 160, right: 100}}
        }
        return new TimeseriesChart(definition)
    })
}
