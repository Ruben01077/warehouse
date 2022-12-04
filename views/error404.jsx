import React  from "react";
import Def  from "./default";

function error404() {

    return (

        <Def>


            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link rel="stylesheet" href="error404.css" />
                </head>
                <body>

                
                   <a className="aTag" href="/"><img className="error_pic" src="/pictures/404_error.png" alt="" srcSet="" /></a>

                </body>
            </html>


        </Def>


    )


}

module.exports = error404