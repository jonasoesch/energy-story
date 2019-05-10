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
                {name: "Change in energy production in the state of Kansas", offset: {left: 0}}
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
                    { "name": "crude oil", "color": "#724E3E", annotations: [
                        {name: "Oil", offset: {top: -8}}
                    ]},
                    { "name": "natural gas", "color": "#969696", annotations: [
                        {name: "Natural gas", offset: {top: -5}},
                        {name: "4%", anchor: "start", offset: {left: 20, top: 5}, class: "percent"},
                        {name: "4%", anchor: "end", offset: {left: -50, top: 5}, class: "percent"},
                    ]},
                    { "name": "nuclear", "color": "#9AA353", annotations: [
                        {name: "Nuclear"},
                        {name: "19%", anchor: "start", offset: {left: 20, top: 60}, class: "percent"},
                        {name: "21%", anchor: "end", offset: {left: -50, top: 60}, class: "percent"},
                    ]},
                    { "name": "wind", "color": "#69C0C9", annotations: [
                        {name: "Wind"},
                        {name: "36%", anchor: "end", offset: {left: -50, top: 140}, class: "percent"},
                    ]},
                    { "name": "coal", "color": "#A47351", annotations: [
                        {name: "Coal"},
                        {name: "75%", anchor: "start", offset: {left: 20, top: 200}, class: "percent"},
                        {name: "38%", anchor: "end", offset: {left: -50, top: 100}, class: "percent"},
                    ]},
                ]
            },
            design: {font: {family: "Eczar", size: 16}, margin: {top: 200, right: 100}}
        }
        return new StackedTimeseriesChart(definition)
    })
}
