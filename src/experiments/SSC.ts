import {C} from "../charts/C"
import {C1} from "../charts/C1"
import {D} from "../charts/D"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"

Promise.all([C(), C1(), D()]).then(charts => {

    let C = charts[0]
    let D = charts[2]


    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:C},
        {from: 100, to:10000, draw:D},
    ]
    let d = new SuperposedDirector(steps, "ESSC")


    let f = new Form({
        name: "form",
        currentPage: d.name,
        logger: d.logger,
        top: 400,
        questions: [
            {question: "In your opinion, what effect or relationship is shown in the data mini-story?",
             kind: "text", name: "first"} 
        ],
    })
    scrollIndicator()
    f.draw()
         
})
