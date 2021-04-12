function renderEmployeestatus(employee){

    for (i = 0; i < employee.length; i++) {
        
        if(employee[i].type === 'Manager'){

        
            return `<div>
            ${employee[i].name}
            ${employee[i].email}
            ${employee[i].officeNumber}
            
            </div>`
    
            
        }

      }


    
}



function generateHTML(data){
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        ${renderEmployeestatus(data)}
        
    </body>
    </html>`

    
}


module.exports = generateHTML;