import {C} from "../charts/C"
import {D} from "../charts/D"
import {JuxtaposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([C(), D()]).then(charts => {

    let C = charts[0]
    let D = charts[1]



    let steps:StepDefinition[] = [
        {from: -1000, to:10000, draw:C},
        {from: -1000, to:10000, draw:D},
    ]
    new JuxtaposedDirector(steps)
         
})
