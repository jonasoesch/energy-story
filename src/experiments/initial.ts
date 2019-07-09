import {A} from "../charts/A"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"
import {scrollIndicator} from "../charts/scrollIndicator"

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
        questions: [
            {question: "In your opinion, what effect or relationship is shown in the data mini-story?",
             kind: "text", name: "interpretation"},
            {question: "How confident do you feel in your understanding of the data mini-story?",
                kind: "choice", answers: ["Highly confident", "Moderately confident", "Somewhat confident", "Not confident"], name: "confidence"} 
        ],
    })
    scrollIndicator();
    f.draw()
         
})
