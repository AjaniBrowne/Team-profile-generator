const workforce = ({Employee,Engineer,Intern,Manager}) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="team" id="heading">
        <h1>My Team</h1>
    </nav>

    <div id="Cards">
        <span>${Manager}</span>
        <span>${Employee}</span>
        <span>${Intern}</span>
        <span>${Engineer}</span>
    </div>
    
</body>
</html>`
};