const express = require('express');
const app = express();
const routerFeesCalculation = require('./fee_calculation');
const routerBooking =require('./booking');
const connectDB = require('./db_connect');

const PORT = 3000;
app.use(express.json());
connectDB();

app.use('/api',routerFeesCalculation);
app.use('/api',routerBooking);

app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});
