import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {TimeseriesChart} from "../lib/TimeseriesChart"

export function E():Promise<any> {
    return d3.csv("../data/E.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                energy: parseFloat(d.energy),
                source: d.source
            }})

        let definition:ChartDefinition = {
            name: "E",
            data: dd,
            annotations: [
                {name: "Energy produced by source in the state of Kansas over the years", offset: {left: -50}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "energy",
                    "domain": [0, 150],
                    annotations: [{name: "Energy production in billion BTU", offset: {left: -10, top: -10}}]
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
                        annotations: [{"name": "Coal"}]
                    },
                    { "name": "natural gas", "color": "#969696",
                        annotations: [{"name": "Natural gas"}]
                    },
                    { "name": "nuclear", "color": "#9AA353",
                        annotations: [{"name": "Nuclear"}]
                    },
                    { "name": "wind", "color": "#69C0C9",
                        annotations: [{"name": "Wind", offset: {top: 6}}]
                    },
                    { "name": "crude oil", "color": "#724E3E",
                        annotations: [{"name": "Oil", offset: {top: -5}}]
                    },
                ]
            },
            design: {font: {family: "Eczar", size: 16}, margin: {top: 200, right: 100}}
        }
        return new TimeseriesChart(definition)
    })
}
