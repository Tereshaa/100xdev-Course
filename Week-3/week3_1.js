//ugly method of input validation

const express = require("express");
const app1 = express();

app1.get("/healthcheckup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyid = req.query.kidneyid; // Convert the kidneyid to a number

  if (!(username === "teresha" || password === "123")) {
    res.status(400).json({ msg: "something is up with ur inputs" });
    return;
  }

  if (kidneyid != 1 && kidneyid != 2) {
    // Corrected condition
    res.status(400).json({ msg: "something is up with ur inputs" });
    return;
  }

  res.json({
    msg: "your kidney is fine",
  });
});

app1.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//best solution - using middlewares
const app = express();

//middleware
app.use(express.json()); // same as writing app.use(usermiddleware) instead of writing in the .get

function usermiddleware(req, res, next) {
  if (username != "teresha" && password != "123") {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneymiddleware(req, res, next) {
  if (kidneyid != 1 && kidneyid != 2) {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

app.get("/healthcheckup", usermiddleware, kidneymiddleware, (req, res) => {
  res.json({
    msg: "your kidney is fine",
  });
});

app.get("/kidneycheckup", usermiddleware, kidneymiddleware, (req, res) => {
  res.json({
    msg: "your kidney is fine",
  });
});

app.get("/heartcheckup", usermiddleware, (req, res) => {
  res.json({
    msg: "your kidney is fine",
  });
});

//ANOTHER EXAMPLE
const app2 = express();
app2.use(express.json());

app2.post("/healthcheckup", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneylength = kidneys.length;
  res.send("your kidney length is" + kidneylength);
});

//global catches - middleware at the end, IF THERE IS EXCEPTION, THEN THIS IS CALLED
app2.use(function (err, req, res, next) {
  res.json({
    msg: "something went wrong",
  });
});

app2.listen(3002);

//ZOD - BETTER METHOD TO DO INPUT VALIDATION
const zod = require("zod");
const myschema = zod.string();

//parsing
myschema.parse("hello"); // returns hello
myschema.parse(123); // throws error

//safe parsing - doesnt throw error if validations fails
myschema.safeParse("hello"); // {success:true,data:"hello"}
myschema.safeParse(123); // {success:false,error:error}

//kidney example using zod
const schema = zod.array(zod.number());
const app3 = express();
app3.use(express.json());
app.post("/healthcheckup", (req, res) => {
  const kidneys = req.body.kidneys;
  const result = schema.safeParse(kidneys);
  if (!result.success) {
    res.status(400).json({
      msg: "something is wrong with your kidneys",
    });
    return;
  } else {
    res.send({ result });
  }
});

app3.listen(3003);


//multiple schemas
const mulschema=zod.object({
    email:zod.string(),
    password:zod.string(),
    country:z.literal("IN").or(z.literal("US")),
    kidneys:z.array(z.number())
})


//another example
function validateinput(obj){
  const schema1=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6)
  })
  const response = schema.safeParse(obj);
  console.log(response);
}

validateinput({
  email:"teresha1903@gmail.com",
  password:"123"
})

