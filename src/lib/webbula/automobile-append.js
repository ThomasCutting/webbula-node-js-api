const config = require('./util/config');
const auth = require('./util/auth');
const request = require('request');
/**
 * Run the automotive year-make-model append algo.
 * @param first_name
 * @param last_name
 * @param postal_address
 * @param postal_code
 * @returns mixed
 */
module.exports = (first_name, last_name, postal_address, postal_code) => {
    request.post(`${config.uri}/append`,{
        form:{
            login: auth.login_key,
            auth_key: auth.auth_key,
            append_type: "AUTOYMM",
            first_name: first_name,
            last_name: last_name,
            address: postal_address,
            zip: postal_code
        },
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        }
    },(err,res,body) => {
        if(err) {
            return -1;
        } else {
            if(body.success) {
                return {
                    first_name: body.individual.first_name,
                    last_name: body.individual.last_name,
                    address: body.individual.address,
                    postal_code: body.individual.zip,
                    auto_year: body.individual.auto_year,
                    auto_make: body.individual.auto_make,
                    auto_model: body.individual.auto_model
                };   
            } else {
                return false;
            }
        }
    });
};