function renderEmployeestatus(employee){
    var html = ''

    for (i = 0; i < employee.length; i++) {
        
        if(employee[i].type === 'Manager'){

        
            html = html + `<div class="employeeContainer">
            <p>${employee[i].type}</p>
            <p>${employee[i].id}</p>
            <p>${employee[i].name}</p>
            <p>${employee[i].email}</p>
            <p>${employee[i].officeNumber}</p>
            
            </div>`
    
            
        } else if (employee[i].type === 'Engineer'){

        
            html = html + `<div class="employeeContainer">
            <p>${employee[i].type}</p>
            <p>${employee[i].id}</p>
            <p>${employee[i].name}</p>
            <p>${employee[i].email}</p>
            <p>${employee[i].github}</p>
            
            </div>`
    
            
        } else if (employee[i].type === 'Intern'){

        
            html = html + `<div class="employeeContainer">
            <p>${employee[i].type}</p>
            <p>${employee[i].id}</p>
            <p>${employee[i].name}</p>
            <p>${employee[i].email}</p>
            <p>${employee[i].school}</p>
            
            </div>`
    
            
        }

      }
      return html;


    
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
        <div class="header">
        ${renderEmployeestatus(data)}
        
    </body>
    </html>`

    
}


module.exports = generateHTML;