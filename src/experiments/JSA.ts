import {A} from "../charts/A"
import {B} from "../charts/B"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([ A(), B()]).then(charts => {

    let A = charts[0]
    let B = charts[1]


    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:A},
        {from: -1000, to:10000, draw:B},
    ]
    new JuxtaposedDirector(steps)
         
})
