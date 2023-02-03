import React from 'react'
import Def from '../default'


function show(data) {
  return (
    <Def>
       
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="SCSS/show.css" />
            <title>Document</title>
        </head>
        <body>
    <div className='mainDiv'>
        <div className='picDiv'>
            <img src="pictures/no_image.jpeg" alt="" srcset="" />
        </div>    
        <div className='infoDiv'>
            <h1>Make: {data.part.make}</h1>
            <h1>Model: {data.part.model}</h1>
            <h1>Year: {data.part.year}</h1>
            <h1>Position: {data.part.side}</h1>
            <h1> Part Name: {data.part.part_name}</h1>
            <h1>Description: {data.part.description}</h1>

                          <div className='editDeleteDiv'>
                              <a href={`/inventory/${data.part.id}/edit`} className="btn btn-warning">
                                  Edit
                              </a>

                              <form method="POST" action={`/inventory/${data.part.id}?_method=DELETE`}>
                                  <button type="submit" className="btn btn-danger">
                                      Delete
                                  </button>
                              </form>

                          </div>

        </div>    
    </div>
        </body>
        </html>
    </Def>
  )
}

export default show