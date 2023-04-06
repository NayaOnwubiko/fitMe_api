const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const CLIENT_URL = process.env.CLIENT_URL;
const cors = require('cors');


app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));

const userRoutes = require('./routes/user-routes');
const scheduleRoutes = require('./routes/schedule-routes');

app.use("/", userRoutes);
app.use("/schedule", scheduleRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});