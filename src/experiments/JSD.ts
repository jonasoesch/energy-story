import {D} from "../charts/D"
import {E} from "../charts/E"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"
import {questions} from "../../../questions"

Promise.all([D(), E()]).then(charts => {

    let D = charts[0]
    let E = charts[1]

    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:D},
        {from: -1000, to:10000, draw:E},
    ]
    let d = new JuxtaposedDirector(steps, "EJSD")

    let f = new Form({
        name: "form",
        currentPage: d.name,
        logger: d.logger,
        top: 0,
        questions: questions
    })
    scrollIndicator()
    f.draw()

         
})
