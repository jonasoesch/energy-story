import * as d3 from "d3"
import {ChartDefinition} from "../lib/Definitions"
import {TimeseriesChart} from "../lib/TimeseriesChart"

export function A():Promise<any> {
    return d3.csv("../data/A.csv").then((data) => {

        let dd:any = data.map(d => {
            return {
                year: new Date(Date.parse(d.year)),
                energy: parseFloat(d.energy),
                source: d.source
            }})

        let definition:ChartDefinition = {
            name: "A",
            data: dd,
            annotations: [
                {name: "Energy production in the U.S."}
            ],
            axes: [
                {
                    "name": "y",
                    "field": "energy",
                    "domain": [0, 40000],
                    annotations: [{name: "Energy production (Billion BtU)", offset: {left: 0, top: 0}}]
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
                    { "name": "biomass", "color": "#53A353",
                        annotations: [{"name": "Biomass"}]
                    },
                    { "name": "coal", "color": "#A47351",
                        annotations: [{"name": "Coal"}]
                    },
                    { "name": "crude oil", "color": "#724E3E",
                        annotations: [{"name": "Oil"}]
                    },
                    { "name": "geothermal", "color": "#F4BE52",
                        annotations: [{"name": "Geothermal"}]
                    },
                    { "name": "hydro", "color": "#4E9CA4",
                        annotations: [{"name": "Hydropower", offset: {top: -8}}]
                    },
                    { "name": "natural gas", "color": "#969696",
                        annotations: [{"name": "Natural gas"}]
                    },
                    { "name": "nuclear", "color": "#9AA353",
                        annotations: [{"name": "Nuclear"}]
                    },
                    { "name": "solar", "color": "#F4ED52",
                        annotations: [{"name": "Solar power", offset: {top: -3}}]
                    },
                    { "name": "wind", "color": "#69C0C9",
                        annotations: [{"name": "Wind", offset: {top: 6}}]
                    },
                ]
            },
            design: {font: {family: "Eczar"}}
        }
        return new TimeseriesChart(definition)
    })
}
