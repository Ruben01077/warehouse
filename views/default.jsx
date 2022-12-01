import React from "react"

function Def (html) {
    return (

        <main>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/default.css" />

                    
                   
                    <title></title>
                </head>
                <body>

                    <div className="navDiv">
                        <nav >
                            <ul>
                                <a href="/"><li className="home">Home</li></a>
                                <a href="/inventory"><li>Inventory</li></a>
                                <a href="/inventory/new"><li>Add Vehicle</li></a>
                            </ul>
                        </nav>
                    </div>


                    {html.children}

                </body>
            </html>
        </main>

    )
  }
  

module.exports = Def
