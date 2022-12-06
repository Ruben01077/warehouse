import React from 'react'
import Def from "../default"


function index(data) {

    let inventoryFormatted = data.inventory.map((part, index) => {

        return (
            <div className='parts_bar'>
                <ul className="">

                  <a href={`/inventory/${index}`}><div>{part.make}</div></a> 
                    <div>{part.model}</div>
                    <div>{part.year}</div>
                    <div>{part.part_name}</div>
                    <div>{part.side}</div>
                  
                   
                   
                </ul>
            </div>
        )

    })

    return (

        <Def>

            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="inventory.css" />
                    <title>Inventory</title>

                </head>
                <body>
                    <div className='mainDiv'>
                        <div className='info_bar'>
                            <ul className="">

                                <div>Make</div>
                                <div>Model</div>
                                <div>Year</div>
                                <div>Part Name</div>
                                <div>Position</div>
                             

                            </ul>
                        </div>
                        {inventoryFormatted}
                    </div>


                </body>
            </html>

        </Def>


    )






}

export default index