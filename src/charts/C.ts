import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {TimeseriesChart} from "../lib/TimeseriesChart"

export function C():Promise<any> {
    return d3.csv("../data/C.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                share: parseFloat(d.share),
                state: d.state
            }})

        let definition:ChartDefinition = {
            name: "C",
            data: dd,
            annotations: [
                {name: "The evolution of wind energy production in the top eight wind energy producing states",
                    offset: {left: -35}}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "share",
                    "domain": [0, 0.5],
                    annotations: [{name: "Share of wind energy in total energy production", offset: {left: 8, top: 0}}],
                    "tickFormat": ".0%"
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
                    { "name": "TX", "color": "#719BAB",
                        annotations: [{name: "Texas"}]
                    },
                    { "name": "OK", "color": "#8D929A",
                        annotations: [{name: "Oklahoma"}]
                    },
                    { "name": "IA", "color": "#696AB7",
                        annotations: [{name: "Iowa"}]
                    },
                    { "name": "KS", "color": "#332157",
                        annotations: [{name: "Kansas"}]
                    },
                    { "name": "CA", "color": "#A45FC2",
                        annotations: [{name: "California", offset: {top: -5}}]
                    },
                    { "name": "IL", "color": "#C859C2",
                        annotations: [{name: "Illinois", offset: {top: 3}}]
                    },
                    { "name": "ND", "color": "#D44C6C",
                        annotations: [{name: "North Dakota", offset: {top: 3}}]
                    },
                    { "name": "MN", "color": "#861759",
                        annotations: [{name: "Minnesota", offset: {top: 0}}]
                    },
                ]
            },
            design: {font: {family: "Eczar", size: 13}, margin: {top: 160, right: 100}}
        }
        return new TimeseriesChart(definition)
    })
}
