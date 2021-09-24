import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/customer';

class ApiService {
    //customer login by email and password
    loginCustomer(cemail, cpass) {
        return axios.post(USER_API_BASE_URL + '/login' + '/' + cemail + '/' + cpass);
    }
    //customer signup
    signupCustomer(customer) {
        return axios.post("" + USER_API_BASE_URL + '/signup', customer);
    }


    fetchAllCity() {
        return axios.get(USER_API_BASE_URL + "/allcity");
    }

    fetchAllCarType() {
        return axios.get(USER_API_BASE_URL + "/allcartype");
    }

    fetchAllCarType() {
        return axios.get(USER_API_BASE_URL + "/allcartype");
    }
    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post("" + USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();