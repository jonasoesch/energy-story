import {C} from "../charts/C"
import {C1} from "../charts/C1"
import {D} from "../charts/D"
import {SuperposedDirector} from "../lib/Director"
import {StepDefinition} from "../lib/Definitions"
import {MorphingChart} from "../lib/MorphingChart"

Promise.all([C(), C1(), D()]).then(charts => {

    let C = charts[0]
    let D = charts[2]


    let steps:StepDefinition[] = [
        {from: -1000, to:100, draw:C},
        {from: 100, to:10000, draw:D},
    ]
    new SuperposedDirector(steps)
         
})
