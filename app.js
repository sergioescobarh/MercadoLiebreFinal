const express= require('express');
const app = express();
const path= require('path');
//Middleware

app.use(express.static('public'));
//app.set('puerto',process.env.PORT||3001);
//rUTAS:

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Vews/home.html"));
});

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Vews/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Vews/login.html"));
});

app.listen(process.env.PORT||3000,function(){console.log('listening on port 3000');});

//app.listen(ap.get('puerto'),() => console.log('servidor corriendo de manera satisfactoria'));



















