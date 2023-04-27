import axiosIntance from './AxiosHttp'

const api = '/api/v1'

const registerPatient = (details) => {
    return axiosIntance.post(`${api}/patients/`, details)
}

const getPatients = () => {
    return axiosIntance.get(`${api}/patients/`)
}

const addPatientRecord = (details) => {
    return axiosIntance.post(`${api}/records/`, details)
}

const getPatientRecords = () => {
    return axiosIntance.get(`${api}/records/`)
}

const patientServices = {
    registerPatient,
    addPatientRecord,
    getPatientRecords,
    getPatients
}

export default patientServices