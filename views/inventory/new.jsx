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
                    <link rel="stylesheet" href="new.css" />
                    <title>Document</title>
                </head>
                <body>
                    <form action="/inventory" method="POST">
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
                                    <label htmlFor="side">Which Side</label>
                                    <input type="text" id="side" name="side" />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" id="description" name="description" />
                                </div>
                                <div>
                                </div>
                                <input className="submit" type="submit" value="Add Part" />
                            </div>
                        </div>
                    </form>
                </body>
            </html>
        </Def>
    )
}

export default new_form