import {A} from "../charts/A"
import {B} from "../charts/B"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"

Promise.all([ A(), B()]).then(charts => {

    let A = charts[0]
    let B = charts[1]


    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:A},
        {from: -1000, to:10000, draw:B},
    ]
    let d = new JuxtaposedDirector(steps)

        let f = new Form({
        name: "form",
        nextPage: "https://www.cs.technik.fhnw.ch/lostintransition/",
        logger: d.logger,
        top: 0,
        questions: [
            {question: "In your opinion, what effect or relationship is shown in the data mini-story?",
             kind: "text", name: "first"} 
        ],
    })
    f.draw()
         
})
