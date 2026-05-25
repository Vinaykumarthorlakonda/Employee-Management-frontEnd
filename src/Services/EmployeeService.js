import axios from "axios";

const BASE_URL = "https://employee-management-backend-8uip.onrender.com/employees";

class EmployeeService {

    getAll() {
        return axios.get(BASE_URL);
    }

    create(emp) {
        return axios.post(BASE_URL, emp);
    }

    update(id, emp) {
        return axios.put(`${BASE_URL}/${id}`, emp);
    }

    delete(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new EmployeeService();
