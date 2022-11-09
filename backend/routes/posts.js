const express = require('express');

const router = express.Router();

router.get("", (req, res, next) => {
    res.send([{
        title: 'Card Title 1',
        body: "card body 1"
    },
    {
        title: 'Card Title 2',
        body: "card body 2"
    },
    {
        title: 'Card Title 3',
        body: "card body 3"
    },
    {
        title: 'Card Title 4',
        body: "card body 4"
    }]);
})

module.exports = router;