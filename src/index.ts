import {A} from "./charts/A"
import {B} from "./charts/B"
import {C} from "./charts/C"
import {D} from "./charts/D"
import {SuperposedDirector} from "./lib/Director"
import {StepDefinition} from "./lib/Definitions"
import {MorphingChart} from "./lib/MorphingChart"

Promise.all([ A(), B(), C(), D()]).then(charts => {

    let A = charts[0]
    let B = charts[1]
    let C = charts[2]
    let D = charts[3]


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
        from: B,
        to: C,
        characters: [
            {from: "wind", to: "CA"},
            {from: "wind", to: "CO"},
            {from: "wind", to: "IA"},
            {from: "wind", to: "KS"},
            {from: "wind", to: "MN"},
            {from: "wind", to: "TX"},
            {from: "wind", to: "IL"},
            {from: "wind", to: "ND"},
            {from: "wind", to: "OK"},
        ]
    })

    let CD = new MorphingChart({
        name: "CD",
        from: C,
        to: D,
        characters: [
            {from: "KS", to: "natural gas"},
            {from: "KS", to: "crude oil"},
            {from: "KS", to: "coal"},
            {from: "KS", to: "nuclear"},
            {from: "KS", to: "wind"},
        ]
    })

    let steps:StepDefinition[] = [
        {from: -200, to:100, draw:A},
        {from: 100, to:300, draw:AB},
        {from: 300, to:600, draw:B},
        {from: 600, to:900, draw:BC},
        {from: 900, to:1200, draw:C},
        {from: 1200, to:1400, draw:CD},
        {from: 1400, to:1800, draw:D},
    ]
    new SuperposedDirector(steps)
         
})
