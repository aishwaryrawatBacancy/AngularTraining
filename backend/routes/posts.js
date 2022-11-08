const express = require('express');

const router = express.Router();

router.get("", (req, res, next) => {
    res.send([{
        title: 'Card Title',
        body: "card body"
    }]);
})

module.exports = router;