import {A} from "./charts/A"
import {B} from "./charts/B"
import {B1} from "./charts/B1"
import {C} from "./charts/C"
import {C1} from "./charts/C1"
import {D} from "./charts/D"
import {E} from "./charts/E"
import {SuperposedDirector} from "./lib/Director"
import {StepDefinition} from "./lib/Definitions"
import {MorphingChart} from "./lib/MorphingChart"

Promise.all([ A(), B(), B1(), C(), C1(), D(), E()]).then(charts => {

    let A = charts[0]
    let B = charts[1]
    let B1 = charts[2]
    let C = charts[3]
    let C1 = charts[4]
    let D = charts[5]
    let E = charts[6]


    let AB = new MorphingChart({
        name: "AB",
        from: A,
        to: B,
        characters: [
            {from: "natural gas", to: "natural gas"},
            {from: "crude oil", to: "crude oil"},
            {from: "coal", to: "coal"},
            {from: "nuclear", to: "nuclear"},
            {from: "biomass", to: "biomass"},
            {from: "hydro", to: "hydro"},
            {from: "wind", to: "wind"},
            {from: "solar", to: "solar"},
            {from: "geothermal", to: "geothermal"},
        ],
        axes: [
            {from: "x", to: "x"} 
        ]
    })



    let BC = new MorphingChart({
        name: "BC",
        from: B1,
        to: C,
        characters: [
            {from: "wind", to: "CA"},
            {from: "wind", to: "IA"},
            {from: "wind", to: "KS"},
            {from: "wind", to: "MN"},
            {from: "wind", to: "TX"},
            {from: "wind", to: "IL"},
            {from: "wind", to: "ND"},
            {from: "wind", to: "OK"},
        ],
        axes: [
            {from: "x", to: "x"} 
        ]
    })

    let CD = new MorphingChart({
        name: "CD",
        from: C1,
        to: D,
        characters: [
            {from: "CA", to: "solar"},
            {from: "CA", to: "biomass"},
            {from: "CA", to: "geothermal"},
            {from: "CA", to: "natural gas"},
            {from: "CA", to: "crude oil"},
            {from: "CA", to: "coal"},
            {from: "CA", to: "nuclear"},
            {from: "CA", to: "hydro"},
            {from: "CA", to: "wind"},
        ],
        axes: [
            {from: "x", to: "x"} 
        ]
    })



    let DE = new MorphingChart({
        name: "DE",
        from: D,
        to: E,
        characters: [
            {from: "solar", to: "solar"},
            {from: "natural gas", to: "natural gas"},
            {from: "coal", to: "coal"},
            {from: "nuclear", to: "nuclear"},
            {from: "wind", to: "wind"},
        ],
        axes: [
            {from: "x", to: "x"} 
        ]
    })

    let steps:StepDefinition[] = [
        {from: -200, to:100, draw:A},
        {from: 100, to:300, draw:AB},
        {from: 300, to:500, draw:B},
        {from: 500, to:600, draw:B1},
        {from: 600, to:900, draw:BC},
        {from: 900, to:1100, draw:C},
        {from: 1100, to:1200, draw:C1},
        {from: 1200, to:1400, draw:CD},
        {from: 1400, to:1600, draw:D},
        {from: 1600, to:1800, draw:DE},
        {from: 1800, to:4100, draw:E},
    ]
    new SuperposedDirector(steps, "Edemo")
         
})
