import * as d3 from "d3"

export function scrollIndicator() {
    let indicator = d3.select("body")
        .append("div")
        .attr("class", "scroll-indicator")
        .text("Scroll slowly")

        d3.select(window).on("scroll.scroller", function() {
            if(window.scrollY > 100) {
                indicator.classed("hidden", true)
            } else {
                indicator.classed("hidden", false)
            } 
        })
}
