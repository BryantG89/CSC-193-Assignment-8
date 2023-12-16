# CSC-193-Assignment-8

Setting up the project and running the server
Assuming your project has the correct directory structure, run the command npm init at the root
You will need to install any non-core modules using npm. Run the command npm install <package-name> to do so.
Open a terminal in the directory with the server and enter nodemon. nodemon is a tool that restarts the server if you make changes to the JS code in order to reflect the changes.
To stop the server, enter ctrl+c in the terminal.
Access your page in the browser. Since the server is being hosted locally on your machine, use the URL localhost:8000/hello. 8000 is the port we specified in hello.js.
Since we told the server to serve files in the "public" directory, we can access our website with the url localhost:8000/hello.html.

Exercise 1: Splendid Circles
Add a new GET endpoint, /math/circle/:r, which takes a radius as a URL parameter. It should then respond in JSON with the area and circumference.

{"area": 3.14, "circumference": 6.28}


The area of a circle is PI * r * r, and the circumference is equal to PI * 2r. You can access PI with Math.PI.

Exercise 2: Hello, you!
Add a new GET endpoint, /hello/name, which takes as query parameters a first and last parameter. It should then respond in plain text with "Hello firstName lastName" replacing firstName with the value of first and lastName with the value of last

If they fail to provide the necessary GET parameters, respond with a 400 status code, and the error message "Missing Required GET parameters: first, last". If they provide one, but not the other, your error message should only have the missing parameter listed.
