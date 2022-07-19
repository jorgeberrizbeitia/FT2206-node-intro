const http = require('http');

const server = http.createServer((request, response) => {

  console.log("alguien esta accediendo al servidor")
  console.log(request.url)

  if (request.url === "/") {
    response.write("Hola desde el servidor!")
    response.end()
  } else if (request.url === "/profile") {
    response.write("Bienvenido a tu perfil")
    response.end()
  }


})


server.listen(3000)