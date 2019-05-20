import {B} from "../charts/B"
import {B1} from "../charts/B1"
import {C} from "../charts/C"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"

Promise.all([ B(), B1(), C()]).then(charts => {

    let B = charts[0]
    let B1 = charts[1]
    let C = charts[2]


    let BB = new MorphingChart({
        name: "BB",
        from: B,
        to: B1,
        characters: [
            {from: "wind", to: "wind"},
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

    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:B},
        {from: 100, to:400, draw:BB},
        {from: 400, to:900, draw:BC},
        {from: 900, to:10000, draw:C},
    ]
    let d = new JuxtaposedDirector(steps, "EJAB")

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
