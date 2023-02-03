import React from "react"

function Def(html) {
    return (

       
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="SCSS/default.css" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"></link>



                    <title></title>
                </head>
                <body>

                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">                           
                            <ul class="nav navbar-nav">
                                <li><a href="/">Home</a></li>
                                <li><a href="/inventory">Inventory</a></li>
                                <li> <a href="/inventory/new">Add Part</a></li>
                            </ul>
                        </div>
                    </nav>

                    

                    {/* <div className="navDiv">
                        <nav >
                            <ul>
                                <a href="/"><li className="home">Home</li></a>
                                <a href="/inventory"><li>Inventory</li></a>
                                <a href="/inventory/new"><li>Add Vehicle</li></a>
                            </ul>
                        </nav>
                    </div> */}


                    {html.children}
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
                </body>
            </html>
       

    )
}


module.exports = Def
