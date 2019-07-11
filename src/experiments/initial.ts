import {A} from "../charts/A"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"
import {initialQuestions} from "../../../questions"

Promise.all([ A()]).then(charts => {

    let A = charts[0]


    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:A},
    ]
    let d = new JuxtaposedDirector(steps, "EI")

        let f = new Form({
        name: "form",
        currentPage: d.name,
        logger: d.logger,
        top: 0,
        questions: initialQuestions
    })
    scrollIndicator();
    f.draw()
         
})
