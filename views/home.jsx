import React from 'react'
import Def from "./default"

function home () {
  return (
    <Def>
        <main>
 
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="SCSS/home.css" />
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet"></link>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,800&display=swap" rel="stylesheet"/>
              <title>Document</title>
            </head>
            <body>
              <h1 className='welcome_message'>Welcome to Warehouse</h1>
            <img className='home_pic'  src="pictures/warehouse_pic.png" alt="" srcset="" />
              
            </body>
            </html>
        </main>
    </Def>
  )
}


module.exports = home
