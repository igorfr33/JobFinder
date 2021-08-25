const express = require('express')
const Job = require('../models/job')
const router = express.Router()

router.get('/teste', (req, res) =>{
    res.send("Deu certo")
})

router.post('/add', (req, res) => {

    let { title, salary, company, description, email, new_job } = req.body

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job,
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router