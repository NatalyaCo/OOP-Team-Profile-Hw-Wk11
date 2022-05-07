function htmlBody(cards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
 <link rel="stylesheet" href="./dist/assets/style.css">
    </head>
    <body>
        <header class='cyan lighten-1'>
            <div class='cyan lighten-1'>
                <h1 class='center-align'>Our Dream Team</h1>
            </div>
        </header>
        <main>
            <section class='row'>
${cards}
            </section>
            </main>
        </body>
        </html>
                    
    `
}
module.exports = htmlBody