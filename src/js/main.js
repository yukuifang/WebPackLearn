require('../statics/css/site')
require('../statics/scss/site1')
require('../statics/less/site2')

var v1 = document.querySelector('#v1')
var v2 = document.querySelector('#v2')
var res = document.querySelector('#res')
var btn = document.querySelector('#btn')

btn.onclick = function () {
    var v1Value =  parseFloat(v1.value)
    var v2Value =  parseFloat(v2.value)
    var add = require('./cal')
    var resValue = add(v1Value,v2Value)
    res.value = resValue
}