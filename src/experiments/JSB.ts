import {B} from "../charts/B"
import {C} from "../charts/C"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"
import {questions} from "../../../questions"

Promise.all([ B(), C()]).then(charts => {

    let B = charts[0]
    let C = charts[1]

    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:B},
        {from: -1000, to:10000, draw:C},
    ]
    let d = new JuxtaposedDirector(steps, "EJSB")

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
