import React from 'react'
import Def from "../default"


function index(data) {

    let inventoryFormatted = data.inventory.map((part) => {

        return (
            <div className='parts_bar'>
                            <ul className="">

                                <div>{part.make}</div>
                                <div>{part.model}</div>
                                <div>{part.year}</div>
                                <div>{part.part_name}</div>
                                <div>{part.side}</div>
                                <div>{part.description}</div>

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
                                <div>Parts Name</div>
                                <div>Side</div>
                                <div>Description</div>

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