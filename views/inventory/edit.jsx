import React from 'react'
import Def from '../default'

function edit(data) {
    return (
        <Def>

            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/SCSS/new.css" />
                    
                    <title>Document</title>
                </head>
                <body>
                    <form class="form" method="POST" action={`/inventory/${data.part.id}?_method=PUT`}>
                        <div class="title">Welcome</div>
                        <div class="subtitle">Let's Edit.</div>

                        <div class="input-container ic1">
                            <input id="make" name="make"  class="input" type="text" value={data.part.make} placeholder=" " required />
                            <div class="cut"></div>
                            <label htmlFor="make" class="placeholder" >Make</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="model" name="model"  class="input" type="text" value={data.part.model} placeholder=" " required />
                            <div class="cut"></div>
                            <label htmlFor="model" class="placeholder">Model</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="year" name="year"  class="input" type="text" value={data.part.year} placeholder=" " required   />
                            <div class="cut"></div>
                            <label htmlFor="year" class="placeholder">Year</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="part_name" name="part_name" class="input" type="text" value={data.part.part_name} placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label htmlFor="part_name" class="placeholder">Part Name</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="side" name="side" class="input" type="text" value={data.part.side} placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label htmlFor="side" class="placeholder">Position</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="description" name="description" class="input" type="text" value={data.part.description} placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label htmlFor="description" class="placeholder">Description</label>
                        </div>

                        <button type="text" class="submit">Update</button>
                    </form>
                </body>
            </html>

        </Def>
    )
}

export default edit








