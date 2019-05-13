import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {TimeseriesChart} from "../lib/TimeseriesChart"

export function C1():Promise<any> {
    return d3.csv("../data/C.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                energy: parseFloat(d.energy),
                state: d.state
            }})

        let definition:ChartDefinition = {
            name: "C1",
            data: dd,
            annotations: [
                {name: "The evolution of wind energy production in the top eight wind energy producing states",
                    offset: {left: -35}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "energy",
                    "domain": [0, 250],
                    annotations: [{name: "Wind energy production in billion BTU", offset: {left: 8, top: 0}}]
                },
                {
                    "name": "x",
                    "field": "year",
                    "domain": [Date.parse("2002-01-01"), Date.parse("2017-01-01")],
                    "ticks": d3.timeYears(new Date(2002,1,1), new Date(2017,1,1), 2)
                },
            ],
            cast: {
                "field" : "state",
                "axes": {
                    "x": "x",
                    "y": "y"
                },
                "characters": [
                    { "name": "KS", "color": "#332157",
                        annotations: [{name: "Kansas"}]
                    },
                ]
            },
            design: {font: {family: "Eczar", size: 13}, margin: {top: 160, right: 100}}
        }
        return new TimeseriesChart(definition)
    })
}
