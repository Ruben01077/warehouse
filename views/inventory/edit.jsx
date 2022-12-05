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
        <link rel="stylesheet" href="/new.css" />
        <title>Document</title>
    </head>
    <body>
    <form method="POST" action={`/inventory/${data.id}?_method=PUT`}>
                        <div className="mainFormDiv">
                            <div className="mainDiv">
                                <div className="formDiv">
                                    <label htmlFor="make">Make</label>
                                    <input id="make" name="make" value={data.part.make} required />
                                </div>
                                <div className="formDiv" >
                                    <label htmlFor="model">Model</label>
                                    <input id="model" name="model" value={data.part.model} required />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="year">Year</label>
                                    <input id="year" name="year"value={data.part.year} required />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="part_name">Part Name</label>
                                    <input id="part_name" name="part_name" value={data.part.part_name} required />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="side">Position</label>
                                    <input type="text" id="side" name="side" value={data.part.position} placeholder="Right or Left?" />
                                </div>
                                <div className="formDiv">
                                    <label htmlFor="description">Description</label>
                                    <textarea type="text" id="description" name="description" value={data.part.description} placeholder="Description here!" />
                                </div>
                                
                                <input className="submit" type="submit" value="Update Part" />
                            </div>
                        </div>
                    </form>
    </body>
    </html>
    
  </Def>
  )
}

export default edit








