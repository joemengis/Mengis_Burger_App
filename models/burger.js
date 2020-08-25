const orm = require("../config/orm");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
            console.log("Hello World!");
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res) {
            cb(res);
            console.log("insert one worked: ");
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", condition, function(res) {
            cb(res);
        });
    }
}
module.exports = burger;