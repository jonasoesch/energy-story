import {B} from "../charts/B"
import {B1} from "../charts/B1"
import {C} from "../charts/C"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"
import {Form} from "../lib/Form"

Promise.all([ B(), B1(), C()]).then(charts => {

    let B = charts[0]
    let C = charts[2]



    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:B},
        {from: 100, to:10000, draw:C},
    ]
    let d = new SuperposedDirector(steps)


    let f = new Form({
        name: "form",
        nextPage: "https://www.cs.technik.fhnw.ch/lostintransition/",
        logger: d.logger,
        top: 400,
        questions: [
            {question: "In your opinion, what effect or relationship is shown in the data mini-story?",
             kind: "text", name: "first"} 
        ],
    })
    f.draw()
         
})
