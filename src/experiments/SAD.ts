import {D} from "../charts/D"
import {E} from "../charts/E"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([ D(), E()]).then(charts => {

    let D = charts[0]
    let E = charts[1]


    let DE = new MorphingChart({
        name: "DE",
        from: D,
        to: E,
        characters: [
            {from: "natural gas", to: "natural gas"},
            {from: "coal", to: "coal"},
            {from: "nuclear", to: "nuclear"},
            {from: "wind", to: "wind"},
            {from: "crude oil", to: "crude oil"},
        ],
        axes: [
            {from: "x", to: "x"} 
        ]
    })

    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:D},
        {from: 100, to:900, draw:DE},
        {from: 900, to:10000, draw:E},
    ]
    new SuperposedDirector(steps)
         
})
