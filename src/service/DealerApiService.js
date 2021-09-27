import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/dealer';


class ApiService {

    loginDealer(dEmail, dPass) {
        return axios.post(USER_API_BASE_URL + '/login/' + dEmail + '/' + dPass);
    }

    fetchBookings(dId) {
        //alert(dId)
        return axios.get(USER_API_BASE_URL + '/allbookingslist/' + dId);
    }
    fetchAllCarType() {
        return axios.get(USER_API_BASE_URL + "/allcartype");
    }
    fetchCars(dId) {
        return axios.get(USER_API_BASE_URL + '/carlist/' + dId);
    }

    fetchPendingBookings(dId) {
        //alert(dId)
        return axios.get(USER_API_BASE_URL + '/pendingbookingslist/' + dId + '/PENDING');
    }
    fetchOngoingBookings(dId) {
        //alert(dId)
        return axios.get(USER_API_BASE_URL + '/pendingbookingslist/' + dId + '/ONGOING');
    }
    fetchCompletedBookings(dId) {
        //alert(dId)
        return axios.get(USER_API_BASE_URL + '/pendingbookingslist/' + dId + '/COMPLETED');
    }
    changeStatusToApprove(bId) {
        return axios.get(USER_API_BASE_URL + '/changebstatus/' + bId + "/ONGOING");
    }
    changeStatusToCompleted(bId) {
        return axios.get(USER_API_BASE_URL + '/changebstatus/' + bId + "/COMPLETED");
    }
    addCar(did, carType, car) {
        var i = parseInt(carType)
        //console.log(car)
        return axios.post(USER_API_BASE_URL + "/addcar/" + did + "/" + i, car);
    }

    cancleBooking(bId) {

        return axios.get(USER_API_BASE_URL + '/changebstatus/' + bId + "/CANCELED");
    }

    updateHourlyRate(cId, rate) {

        return axios.get(USER_API_BASE_URL + '/cardetails/' + cId + "/" + rate);
    }

    fetchDashboard(dId) {
        return axios.get(USER_API_BASE_URL + '/dashboard/' + dId);
    }

    fetchDealerDetails(dId) {
        return axios.get(USER_API_BASE_URL + '/dealerbyid/' + dId);
    }
}

export default new ApiService();