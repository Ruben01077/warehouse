const React = require("react");
const Def = require("./default");

function error404() {

    return (

        <Def>


            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link rel="stylesheet" href="error404.css" />
                </head>
                <body>

                
                   <a className="aTag" href="/"><img className="error_pic" src="/pictures/404_error.png" alt="" srcset="" /></a>

                </body>
            </html>


        </Def>


    )


}

module.exports = error404