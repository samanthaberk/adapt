import React, { Component } from "react";
import './Collapsible.css'

class Collapsible extends Component {

  componentDidMount () {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

  render() {
    return (
      <div>
        <main>
        <button class="accordion">Teacher Dashboard</button>
        <div class="panel">
          <h5>Use this dashboard to understand how many of your students are performing at standards level and to keep up with which students need extra help based on recent performance.</h5>
        </div>

        <button class="accordion">Students</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Upload an Assignment</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Print an Assignment</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Build a Rubric</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        </main>
      </div>
    );
  }
}

export default Collapsible;
