import {A} from "../charts/A"
import {B} from "../charts/B"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([ A(), B()]).then(charts => {

    let A = charts[0]
    let B = charts[1]


    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:A},
        {from: 100, to:10000, draw:B},
    ]
    new SuperposedDirector(steps)
         
})

