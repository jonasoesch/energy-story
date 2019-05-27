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
                {name: "How the share of different energy sources has changed in California", offset: {left: 0}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "share",
                    "domain": [0, 100],
                    annotations: [{name: "Share of each energy source", offset: {top: -30, left: 0}}]
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
                    { "name": "biomass", "color": "#53A353", annotations: [
                        {name: "Biomass", offset: {top: -8}},
                        {name: "3%", anchor: "start", offset: {left: 20, top: 2}, class: "percent"},
                        {name: "3%", anchor: "end", offset: {left: -50, top: 1}, class: "percent"},
                    ]},
                    { "name": "geothermal", "color": "#EA7A00", annotations: [
                        {name: "Geothermal", offset: {top: 4}},
                        {name: "7%", anchor: "start", offset: {left: 20, top: 12}, class: "percent"},
                        {name: "5%", anchor: "end", offset: {left: -50, top: 8}, class: "percent"},
                    ]},
                    { "name": "wind", "color": "#61A8B0", annotations: [
                        {name: "Wind", offset: {top: 10}},
                        {name: "2%", anchor: "start", offset: {left: 20, top: 2}, class: "percent"},
                        {name: "6%", anchor: "end", offset: {left: -50, top: 8}, class: "percent"},
                    ]},
                    { "name": "hydro", "color": "#007B88", annotations: [
                        {name: "Hydropower", offset: {top: 40}},
                        {name: "17%", anchor: "start", offset: {left: 20, top: 40}, class: "percent"},
                        {name: "21%", anchor: "end", offset: {left: -50, top: 70}, class: "percent"},
                    ]},
                    { "name": "natural gas", "color": "#969696", annotations: [
                        {name: "Natural gas", offset: {top: 120}},
                        {name: "49%", anchor: "start", offset: {left: 20, top: 120}, class: "percent"},
                        {name: "44%", anchor: "end", offset: {left: -50, top: 120}, class: "percent"},
                    ]},
                    { "name": "crude oil", "color": "#724E3E", annotations: [
                        {name: "Oil", offset: {top: 10, left: 0}}
                    ]},
                    { "name": "coal", "color": "#A47351", annotations: [
                        {name: "Coal", offset: {top: -10}},
                    ]},
                    { "name": "nuclear", "color": "#9AA353", annotations: [
                        {name: "Nuclear"},
                        {name: "19%", anchor: "start", offset: {left: 20, top: 50}, class: "percent"},
                        {name: "9%", anchor: "end", offset: {left: -50, top: 10}, class: "percent"},
                    ]},
                    { "name": "solar", "color": "#E0A317", annotations: [
                        {name: "Solar power", offset: {top: 10}},
                        {name: "12%", anchor: "end", offset: {left: -50, top: 20}, class: "percent"},
                    ]},
                ]
            },
            design: {font: {family: "Eczar", size: 13}, margin: {top: 160, right: 100}}
        }
        return new StackedTimeseriesChart(definition)
    })
}
