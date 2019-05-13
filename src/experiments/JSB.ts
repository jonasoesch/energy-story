import {B} from "../charts/B"
import {C} from "../charts/C"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([ B(), C()]).then(charts => {

    let B = charts[0]
    let C = charts[1]

    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:B},
        {from: -1000, to:10000, draw:C},
    ]
    new JuxtaposedDirector(steps)
         
})
