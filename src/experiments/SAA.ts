import {A} from "../charts/A"
import {B} from "../charts/B"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"

Promise.all([ A(), B()]).then(charts => {

    let A = charts[0]
    let B = charts[1]

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



    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:A},
        {from: 100, to:900, draw:AB},
        {from: 900, to:10000, draw:B},
    ]
    let d = new SuperposedDirector(steps)
    let f = new Form({
        name: "form",
        nextPage: "http://google.com",
        logger: d.logger,
        top: 1100,
        questions: [
            {question: "In your opinion, what effect or relationship is shown in the data mini-story?",
             kind: "text", name: "first"} 
        ],
    })
    f.draw()
         
})

