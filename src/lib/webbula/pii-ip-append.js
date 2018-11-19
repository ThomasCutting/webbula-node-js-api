const config = require('./util/config');
const auth = require('./util/auth');
const request = require('request');
/**
 * Run the reverse lookup algo for phone number.
 * @param email_address
 * @returns mixed
 */
module.exports = (ip_address) => {
    request.post(`${config.uri}/append`,{
        form:{
            login: auth.login_key,
            auth_key: auth.auth_key,
            append_type: "P2ETA",
            ip: ip_address
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
                    address_2: body.individual.address2,
                    city: body.individual.city,
                    state: body.individual.state,
                    postal_code: body.individual.zip5,
                    email: body.individual.email,
                    phone_number: body.individual.phone
                };   
            } else {
                return false;
            }
        }
    });
};