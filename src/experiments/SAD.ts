import {D} from "../charts/D"
import {E} from "../charts/E"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"

Promise.all([ D(), E()]).then(charts => {

    let D = charts[0]
    let E = charts[1]


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
        {from: -1000, to:100, draw:D},
        {from: 100, to:900, draw:DE},
        {from: 900, to:10000, draw:E},
    ]
    let d = new SuperposedDirector(steps, "ESAD")

    let f = new Form({
        name: "form",
        currentPage: d.name,
        logger: d.logger,
        top: 1100,
        questions: [
            {question: "In your opinion, what effect or relationship is shown in the data mini-story?",
             kind: "text", name: "first"} 
        ],
    })
    f.draw()
         
})
