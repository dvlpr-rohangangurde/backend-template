const express = require("express");
const WingstonMorgan = require("./middleware/wingston_morgan_middleware");
const logger = require("./core/logger");


const app = express();

app.use(WingstonMorgan(logger));
app.use(express.json);
app.use(express.urlencoded({ extended : true}));

app.get("/", (req, res) => {
    response(res, 200, "Hii from grampanchayat");
})

app.listen(process.env.PORT, () => {
    logger.info("Server is running at port 3000");
});