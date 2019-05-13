import {C} from "../charts/C"
import {C1} from "../charts/C1"
import {D} from "../charts/D"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([C(), C1(), D()]).then(charts => {

    let C = charts[0]
    let C1 = charts[1]
    let D = charts[2]


    let CC = new MorphingChart({
        name: "CC",
        from: C,
        to: C1,
        characters: [
            {from: "KS", to: "KS"},
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
            {from: "KS", to: "natural gas"},
            {from: "KS", to: "crude oil"},
            {from: "KS", to: "coal"},
            {from: "KS", to: "nuclear"},
            {from: "KS", to: "wind"},
        ],
        axes: [
            {from: "x", to: "x"} 
        ]
    })



    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:C},
        {from: 100, to:400, draw:CC},
        {from: 400, to:900, draw:CD},
        {from: 900, to:10000, draw:D},
    ]
    new JuxtaposedDirector(steps)
         
})
