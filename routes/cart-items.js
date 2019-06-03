const express = require('express');
const router = express.Router();

const items = [

{id: 1, price: 2, product: 'apple', quantity: 4},
{id: 2, price: 1, product: 'apple', quantity: 2},
{id: 3, price: 2, product: 'orange', quantity: 3},
{id: 4, price: 3, product: 'pear', quantity: 4}

];

router.get('/', (req, res) => {
    res.json(items)
});

router.post('/', (req, res) => {
    console.log(req.body)
});

router.put('/:id', (req, res) => {
    console.log(req.params.id, req.body);
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
})

module.exports = router;