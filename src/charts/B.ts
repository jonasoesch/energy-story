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
                {name: "How the ratios of the different energy sources have changed over time", offset: {left: -5}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "share",
                    "domain": [0, 100],
                    annotations: [{name: "Percentage of power produced from each energy source", offset: {top: -40, left: 0}}]
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
                    { "name": "geothermal", "color": "#EA7A00",
                        annotations: [
                            {name: "Geothermal", offset: {left:0, top: -5}, class: "outside"}
                        ]
                    } ,
                    { "name": "solar", "color": "#E0A317",
                        annotations: [{name: "Solar power", offset: {left:0, top: -11}, class: "outside"}]
                    } ,
                    { "name": "wind", "color": "#61A8B0",
                        annotations: [
                            {name: "Wind", offset: {left:0, top: -3}, class: "outside"},
                            {name: "5%", anchor: "end", offset: {left:-50, top: 5}, class: "wind"}
                        ]
                    } ,
                    { "name": "hydro", "color": "#007B88",
                        annotations: [
                        {name: "Hydropower", offset: {top: 1}},
                        {name: "3%", anchor: "start", offset: {left:20, top: 5}, class: "hydro"},
                        {name: "5%", anchor: "end", offset: {left:-50, top: 10}, class: "hydro"}
                        ]
                    } ,
                    { "name": "biomass", "color": "#53A353",
                        annotations: [
                        {name: "Biomass", offset: {top: 10}},
                        {name: "3%", anchor: "start", offset: {left:20, top: 5}, class: "biomass"},
                        {name: "6%", anchor: "end", offset: {left:-50, top: 12}, class: "biomass"}
                        ]
                    },
                    { "name": "nuclear", "color": "#9AA353",
                        annotations: [
                        {name: "Nuclear", offset: {top: 30}},
                        {name: "11%", anchor: "start", offset: {left:20, top: 30}, class: "nuclear"},
                        {name: "9%", anchor: "end", offset: {left:-50, top: 30}, class: "nuclear"}
                        ]
                    } ,
                    { "name": "crude oil", "color": "#724E3E", 
                    annotations: [
                        {name: "Oil", offset: {top: 40}},
                        {name: "17%", anchor: "start", offset: {left:20, top: 50}, class: "oil"},
                        {name: "17%", anchor: "end", offset: {left:-50, top: 40}, class: "oil"}
                    ]
                    } ,
                    { "name": "coal", "color": "#A47351",
                    annotations: [
                        {name: "Coal", offset: {top: 50}},
                        {name: "33%", anchor: "start", offset: {left:20, top: 90}, class: "coal"},
                        {name: "21%", anchor: "end", offset: {left:-50, top: 50}, class: "coal"}
                    ]
                    } ,
                    { "name": "natural gas", "color": "#969696",
                    annotations: [
                        {name: "Natural gas", offset: {top: 80}},
                        {name: "31%", anchor: "start", offset: {left:20, top: 80}, class: "gas"},
                        {name: "35%", anchor: "end", offset: {left:-50, top: 85}, class: "gas"}
                    ]
                    } ,
                ]
            },
            design: {font: {family: "Eczar", size: 13}, margin: {top: 160, right: 100}}
        }
        return new StackedTimeseriesChart(definition)
    })
}
