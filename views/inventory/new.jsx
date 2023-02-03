import React from "react";
import Def from "../default"


function new_form() {

   

    return (
        <Def>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="SCSS/new.css" />
                    <title>Document</title>
                </head>
                <body>
                    {/* <form action="/inventory" method="POST">
                        <div className="mainFormDiv">
                            <div className="mainDiv">
                                <div className="formDiv">
                                    <label htmlFor="make">Make</label>
                                    <input id="make" name="make" required />
                                </div>
                                <div className="formDiv" >
                                    <label htmlFor="model">Model</label>
                                    <input id="model" name="model" required />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="year">Year</label>
                                    <input id="year" name="year" required />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="part_name">Part Name</label>
                                    <input id="part_name" name="part_name" required />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="side">Position</label>
                                    <input type="text" id="side" name="side" placeholder="Right or Left?" />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="description">Description</label>
                                    <textarea type="text" id="description" name="description" placeholder="Description here!" />
                                </div>                               
                                <div>
                                </div>
                                <input className="submit" type="submit" value="Add Part" />
                            </div>
                        </div>
                    </form> */}

<form class="form" action="/inventory" method="POST">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's add new part to the warehouse.</div>

      <div class="input-container ic1">
        <input id="make" name="make"  class="input" type="text"  placeholder=" " required />
        <div class="cut"></div>
        <label htmlFor="make" class="placeholder">Make</label>
      </div>

      <div class="input-container ic2">
        <input id="model" name="model" class="input" type="text" placeholder=" " required/>
        <div class="cut"></div>
        <label htmlFor="model" class="placeholder">Model</label>
      </div>

      <div class="input-container ic2">
        <input id="year" name="year" class="input" type="text" placeholder=" "  required/>
        <div class="cut"></div>
        <label htmlFor="year" class="placeholder">Year</label>
      </div>

           <div class="input-container ic2">
        <input id="part_name" name="part_name" class="input" type="text" placeholder=" " required/>
        <div class="cut cut-short"></div>
        <label htmlFor="part_name" class="placeholder">Part Name</label>
      </div>

      <div class="input-container ic2">
        <input id="side" name="side" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label htmlFor="side" class="placeholder">Position</label>
      </div>

      <div class="input-container ic2">
        <input id="description" name="description" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label htmlFor="description" class="placeholder">Description</label>
      </div>

      <button type="text" class="submit">submit</button>
    </form>

                  
         
      
                </body>
            </html>
        </Def>
    )
}

export default new_form