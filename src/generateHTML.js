function renderEmployeestatus(employee){
    var html = ''

    for (i = 0; i < employee.length; i++) {
        
        if(employee[i].type === 'Manager'){

        
            html = html + `<div class="employeeContainer">
            <h2>${employee[i].type}</h2>
            <h3>${employee[i].name}</h3>
            <p>ID: ${employee[i].id}</p>
            <a href="mailto: ${employee[i].email}">${employee[i].email}</a>
            <p>Office Number: ${employee[i].officeNumber}</p>
            
            </div>`
    
            
        } else if (employee[i].type === 'Engineer'){

        
            html = html + `<div class="employeeContainer">
            <h2>${employee[i].type}</h2>
            <h3>${employee[i].name}</h3>
            <p>ID: ${employee[i].id}</p>
            <a href="mailto: ${employee[i].email}">${employee[i].email}</a>
            <a href="${employee[i].github}">${employee[i].github}</a>
            
            </div>`
    
            
        } else if (employee[i].type === 'Intern'){

        
            html = html + `<div class="employeeContainer">
            <h2>${employee[i].type}</h2>
            <h3>${employee[i].name}</h3>
            <p>ID: ${employee[i].id}</p>
            <a href="mailto: ${employee[i].email}">${employee[i].email}</a>
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
        <style>
            .header {
            background: red;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            }

            .header h1  {
                font-size: 32px;
            }

            .employeeContainer {
                border: 1px solid gray;
                min-width: 200px;
                min-height: 100px;
            }

            .employeeContainer h2 {
                text-align: center;
                padding-bottom: 10px;
                background: blue;
                color: white;
                margin: 0;
            }
            .employeeContainer h3 {
                text-align: center;
                padding-bottom: 10px;
                background: blue;
                color: white;
                margin: 0;
            }
            .employeeContainer p {
                margin: 0;
                border: 1px solid gray;
                padding: 10px;
            }
            .employeeContainer a {
                display: block;
                margin: 0;
                border: 1px solid gray;
                padding: 10px;
            }

            .employees {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
            }
            
        </style>
    </head>

    <body>
        <div class="header"><h1>My Team</h1></div>
        <div class="employees">${renderEmployeestatus(data)}</div>
        
        
    </body>
    </html>`

    
}


module.exports = generateHTML;