import {C} from "../charts/C"
import {D} from "../charts/D"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"
import {questions} from "../../../questions"

Promise.all([C(), D()]).then(charts => {

    let C = charts[0]
    let D = charts[1]

    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:C},
        {from: -1000, to:10000, draw:D},
    ]
    let d = new JuxtaposedDirector(steps, "EJSC")

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
