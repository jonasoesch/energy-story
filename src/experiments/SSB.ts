import {B} from "../charts/B"
import {B1} from "../charts/B1"
import {C} from "../charts/C"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([ B(), B1(), C()]).then(charts => {

    let B = charts[0]
    let C = charts[2]



    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:B},
        {from: 100, to:10000, draw:C},
    ]
    new SuperposedDirector(steps)
         
})
