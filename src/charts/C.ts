import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {TimeseriesChart} from "../lib/TimeseriesChart"

export function C():Promise<any> {
    return d3.csv("../data/C.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                energy: parseFloat(d.energy),
                state: d.state
            }})

        let definition:ChartDefinition = {
            name: "C",
            data: dd,
            annotations: [
                {name: "The evolution of wind energy production in the top ten wind energy producing states"}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "energy",
                    "domain": [0, 230],
                    annotations: [{name: "Wind energy production in Billion BtU", offset: {left: 0, top: 0}}]
                },
                {
                    "name": "x",
                    "field": "year",
                    "domain": [Date.parse("2001-01-01"), Date.parse("2018-01-01")]
                },
            ],
            cast: {
                "field" : "state",
                "axes": {
                    "x": "x",
                    "y": "y"
                },
                "characters": [
                    { "name": "CA", "color": "black",
                        annotations: [{name: "California"}]
                    },
                    { "name": "CO", "color": "black",
                        annotations: [{name: "Colorado"}]
                    },
                    { "name": "IA", "color": "black",
                        annotations: [{name: "Iowa"}]
                    },
                    { "name": "KS", "color": "black",
                        annotations: [{name: "Kansas"}]
                    },
                    { "name": "MN", "color": "black",
                        annotations: [{name: "Minnesota"}]
                    },
                    { "name": "TX", "color": "black",
                        annotations: [{name: "Texas"}]
                    },
                    { "name": "IL", "color": "black",
                        annotations: [{name: "Illinois"}]
                    },
                    { "name": "ND", "color": "black",
                        annotations: [{name: "North Dakota"}]
                    },
                    { "name": "OK", "color": "black",
                        annotations: [{name: "Oklahoma"}]
                    },
                ]
            }
        }
        return new TimeseriesChart(definition)
    })
}
