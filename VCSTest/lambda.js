let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.get({
        TableName: 'HS_user',
        Key: { 'user_id': '100' }
    }).promise().then(function (data) {
        console.log("Data", data);
    }).catch(function (err) {
        //handle error
    });

    callback(null, { "message": "Successfully executed" });
}
