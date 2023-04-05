const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const userRoutes = require('./routes/user-routes');
const scheduleRoutes = require('./routes/schedule-routes');

app.use("/users", userRoutes);
app.use("/schedule", scheduleRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});