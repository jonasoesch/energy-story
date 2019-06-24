import {B} from "../charts/B"
import {B1} from "../charts/B1"
import {C} from "../charts/C"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"

Promise.all([ B(), B1(), C()]).then(charts => {

    let B = charts[0]
    let B1 = charts[1]
    let C = charts[2]



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
        {from: 100, to:400, draw:B1},
        {from: 400, to:900, draw:BC},
        {from: 900, to:10000, draw:C},
    ]
    let d = new SuperposedDirector(steps, "ESAB")
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
    scrollIndicator()
    f.draw()
         
})
