const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv')
const dbConnect = require('./mongoose/dbConnect.js')
const signupRoutes = require('./routes/signup.js')
const loginRoutes = require('./routes/login.js')
const userRoutes = require('./routes/user.js')
const adminRoutes = require('./routes/admin.js')

dotEnv.config()
const app = express();
const PORT = process.env.PORT || 3000;

dbConnect();
app.use(cors({ origin: "*" }))
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: "Api is working" })
})

app.use("/api/signup", signupRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);




app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'something went wrong..' })
})

app.listen(PORT, () => {
    console.log("app is listening on port no", PORT);
})

module.exports = app;