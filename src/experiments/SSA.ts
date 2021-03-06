import {A} from "../charts/A"
import {B} from "../charts/B"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"
import {questions} from "../../../questions"

Promise.all([ A(), B()]).then(charts => {

    let A = charts[0]
    let B = charts[1]


    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:A},
        {from: 100, to:10000, draw:B},
    ]
    let d = new SuperposedDirector(steps, "ESSA")

    let f = new Form({
        name: "form",
        currentPage: d.name,
        logger: d.logger,
        top: 400,
        questions: questions
    })
    scrollIndicator()
    f.draw()
         
})

