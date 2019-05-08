import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {StackedTimeseriesChart} from "../lib/StackedTimeseriesChart"

export function B():Promise<any> {
    return d3.csv("../data/B.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                share: parseFloat(d.share),
                source: d.source
            }})

        let definition:ChartDefinition = {
            name: "B",
            data: dd,
            annotations: [
                {name: "The share of each energy source"}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "share",
                    "domain": [0, 100],
                    annotations: [{name: "Share", offset: {left: 100, top: -300}}]
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
                    { "name": "geothermal", "color": "#F4BE52",
                        annotations: [{name: "Geothermal", offset: {left:0, top: -5}}]
                    } ,
                    { "name": "solar", "color": "#F4ED52",
                        annotations: [{name: "Solar", offset: {left:0, top: -5}}]
                    } ,
                    { "name": "wind", "color": "#69C0C9",
                        annotations: [{name: "Wind", offset: {left:0, top: -5}}]
                    } ,
                    { "name": "hydro", "color": "#4E9CA4",
                        annotations: [{name: "Hydropower", offset: {left:0, top: -5}}]
                    } ,
                    { "name": "biomass", "color": "#53A353",
                        annotations: [{name: "Biomass", offset: {left:0, top: -5}}]
                    },
                    { "name": "nuclear", "color": "#9AA353",
                        annotations: [{name: "Nuclear", offset: {left:0, top: -5}}]
                    } ,
                    { "name": "coal", "color": "#A47351",
                    annotations: [
                        {name: "Coal", offset: {left:0, top: -5}}
                    ]
                    } ,
                    { "name": "crude oil", "color": "#724E3E", 
                    annotations: [
                        {name: "Oil", offset: {left:0, top: -5}}
                    ]
                    } ,
                    { "name": "natural gas", "color": "#969696",
                    annotations: [
                        {name: "Natural gas", offset: {left:0, top: -5}}
                    ]
                    } ,
                ]
            }
        }
        return new StackedTimeseriesChart(definition)
    })
}
