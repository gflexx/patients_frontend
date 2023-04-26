import axiosIntance from './AxiosHttp'

const api = '/api/v1'

const registerPatient = (details) => {
    return axiosIntance.post(`${api}/patients/`, details)
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
    getPatientRecords
}

export default patientServices