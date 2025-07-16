const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pricingRoute = require('./routes/pricing');
const engagementRoute = require('./routes/engagement');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/pricing', pricingRoute);
app.use('/api/engagement', engagementRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
