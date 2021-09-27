import axios from 'axios';

const CUSTOMER_API_BASE_URL = 'http://localhost:8080/customer';
const EMAIL_API_BASE_URL = 'http://localhost:8080/email';

class ApiService {
    //customer login by email and password
    loginCustomer(cemail, cpass) {
        return axios.post(CUSTOMER_API_BASE_URL + '/login/' + cemail + '/' + cpass);
    }
    //customer signup
    signupCustomer(customer) {
        return axios.post("" + CUSTOMER_API_BASE_URL + '/signup', customer);
    }


    fetchAllCity() {
        return axios.get(CUSTOMER_API_BASE_URL + "/allcity");
    }

    fetchAllCarTypeByCityId(cid) {
        return axios.get(CUSTOMER_API_BASE_URL + "/allcartype/" + cid);
    }


    fetchCustomerById(cId) {
        return axios.get(CUSTOMER_API_BASE_URL + '/' + cId);
    }

    fetchForBookingByCidCtid(cid, ctid) {
        return axios.get(CUSTOMER_API_BASE_URL + '/tobooking/' + ctid + "/" + cid);
    }

    fetchCustomerBookings(cid) {
        return axios.get(CUSTOMER_API_BASE_URL + "/bookingslist/" + cid);
    }

    finalBooking(cid, carId, booking) {
        return axios.post("" + CUSTOMER_API_BASE_URL + '/newbooking/' + cid + '/' + carId, booking);
    }

    contactMesgSend(mesg) {
        return axios.post("" + CUSTOMER_API_BASE_URL + '/sendcontactus', mesg);
    }
    //resEt password 1st
    resetEmailSend(obj) {
        // alert(obj)
        return axios.post("" + EMAIL_API_BASE_URL + '/sendmail', obj);
    }
    //RESET PASSWORD FINAL
    resetOtpCheckPassword(obj) {

        return axios.post("" + EMAIL_API_BASE_URL + '/otpvarify', obj);
    }

    //singup otp send
    signupOtpSend(obj) {
        // alert(obj)
        return axios.post("" + EMAIL_API_BASE_URL + '/signupmail', obj);
    }

    //singup otp send
    signupOtpCheck(otp, cust) {
        // alert(obj)
        return axios.post("" + EMAIL_API_BASE_URL + '/signupwithotp/' + otp, cust);
    }


}

export default new ApiService();