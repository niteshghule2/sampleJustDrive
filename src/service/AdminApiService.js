import axios from 'axios';

const ADMIN_API_BASE_URL = 'http://localhost:8080/admin';
// const CUSTOMER_API_BASE_URL = 'http://localhost:8080/customer'

class ApiService {
    loginAdmin(a_email, a_password) {
        return axios.post(ADMIN_API_BASE_URL + '/login/' + a_email + '/' + a_password);
    }


    fetchcars() {
        return axios.get(ADMIN_API_BASE_URL + '/allcars');
    }

    fetchBookings() {
        return axios.get(ADMIN_API_BASE_URL + '/allbookinglist');
    }

    fetchDealers() {
        return axios.get(ADMIN_API_BASE_URL + '/alldealerlist');
    }
    fetchCustomers() {
        return axios.get(ADMIN_API_BASE_URL + '/allcustlist');
    }

    fetchAllCities() {
        return axios.get(ADMIN_API_BASE_URL + '/allcity');
    }
    addDealer(cityName, dealer) {
        return axios.post(ADMIN_API_BASE_URL + '/adddealer/' + cityName, dealer);
    }

    addCity(city) {
        return axios.post("" + ADMIN_API_BASE_URL + '/addcity', city);
    }
    fetchAllCartype() {
        return axios.get(ADMIN_API_BASE_URL + '/allcartype');
    }
    fetchCounts() {
        return axios.get(ADMIN_API_BASE_URL + '/dashboard');
    }

    fetchAllMsg() {
        return axios.get(ADMIN_API_BASE_URL + '/getcontactus');
    }

    // fetchUserById(userId) {
    //     return axios.get(USER_API_BASE_URL + '/' + userId);
    // }

    // deleteUser(userId) {
    //     return axios.delete(USER_API_BASE_URL + '/' + userId);
    // }

    // addUser(user) {
    //     return axios.post("" + USER_API_BASE_URL, user);
    // }

    // editUser(user) {
    //     return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    // }

}

export default new ApiService();