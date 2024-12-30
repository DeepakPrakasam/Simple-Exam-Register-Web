const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(__dirname + "/jeemain.html");
});
router.get('/jeemain', function(req, res) {
    res.sendFile(__dirname + "/jeemain.html");
});
router.get('/about', function(req, res) {
    res.sendFile(__dirname + "/about.html");
});
router.get('/contactus', function(req, res) {
    res.sendFile(__dirname + "/contactus.html");
});
router.get('/institutions', function(req, res) {
    res.sendFile(__dirname + "/institutions.html");
});

router.get('/75.png', function(req, res) {
    res.sendFile(__dirname + "/75.png");
});
router.get('/flag.png', function(req, res) {
    res.sendFile(__dirname + "/flag.png");
});
router.get('/azadi.png', function(req, res) {
    res.sendFile(__dirname + "/azadi.png");
});
router.get('/head.png', function(req, res) {
    res.sendFile(__dirname + "/head.png");
});
router.get('/lion.png', function(req, res) {
    res.sendFile(__dirname + "/lion.png");
});
router.get('/nta.png', function(req, res) {
    res.sendFile(__dirname + "/nta.png");
});
router.get('/iit-bhilai.png', function(req, res) {
    res.sendFile(__dirname + "/iit-bhilai.png");
});
router.get('/iit-madras.png', function(req, res) {
    res.sendFile(__dirname + "/iit-madras.png");
});
router.get('/iit-bombay.png', function(req, res) {
    res.sendFile(__dirname + "/iit-bombay.png");
});
router.get('/iit-roorkee.png', function(req, res) {
    res.sendFile(__dirname + "/iit-roorkee.png");
});
router.get('/iit-bhubaneswar.png', function(req, res) {
    res.sendFile(__dirname + "/iit-bhubaneswar.png");
});
router.get('/iit-delhi.png', function(req, res) {
    res.sendFile(__dirname + "/iit-delhi.png");
});
router.get('/iit-dhanbad.png', function(req, res) {
    res.sendFile(__dirname + "/iit-dhanbad.png");
});
router.get('/iit-indore.png', function(req, res) {
    res.sendFile(__dirname + "/iit-indore.png");
});
router.get('/iit-guwahati.png', function(req, res) {
    res.sendFile(__dirname + "/iit-guwahati.png");
});
router.get('/iit-goa.png', function(req, res) {
    res.sendFile(__dirname + "/iit-goa.png");
});
router.get('/iit-gandhinagar.png', function(req, res) {
    res.sendFile(__dirname + "/iit-gandhinagar.png");
});
router.get('/iit-dharwad.png', function(req, res) {
    res.sendFile(__dirname + "/iit-dharwad.png");
});
router.get('/iit-jodhpur.png', function(req, res) {
    res.sendFile(__dirname + "/iit-jodhpur.png");
});
router.get('/iit-jammu.png', function(req, res) {
    res.sendFile(__dirname + "/iit-jammu.png");
});
router.get('/iit-kharagpur.png', function(req, res) {
    res.sendFile(__dirname + "/iit-kharagpur.png");
});
router.get('/iit-kanpur.png', function(req, res) {
    res.sendFile(__dirname + "/iit-kanpur.png");
});
router.get('/iit-tirupati.png', function(req, res) {
    res.sendFile(__dirname + "/iit-tirupati.png");
});
router.get('/iit-patna.png', function(req, res) {
    res.sendFile(__dirname + "/iit-patna.png");
});
router.get('/iit-palakkad.png', function(req, res) {
    res.sendFile(__dirname + "/iit-palakkad.png");
});
router.get('/iit-mandi.png', function(req, res) {
    res.sendFile(__dirname + "/iit-mandi.png");
});

module.exports = router;
