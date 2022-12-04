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

                    <form method="POST" action="/inventory">

                        <div>
                            <label htmlFor="make">Make</label>
                            <input id="make" name="make" type="text"  />
                        </div>
                        <div>
                            <label htmlFor="model">Model</label>
                            <input id="model" name="model" type="text"  />
                        </div>
                        <div>
                            <label htmlFor="year">Year</label>
                            <input id="year" name="year" type="text"  />
                        </div>
                        <div>
                            <label htmlFor="part_name">Part Name</label>
                            <input id="part_name" name="part_name" type="text"  />
                        </div>
                        <div>
                            <label htmlFor="side">Which Side</label>
                            <input id="side" name="side" type="text" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input id="description" name="description" type="text" />
                        </div>
                        <div>
                            <input type="submit" value="Add Part"/>
                        </div>
                      

                    </form>

                   
                </body>
            </html>
        </Def>
    )
}

export default new_form