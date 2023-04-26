import { createContext, useState } from "react";

const SessionContext = createContext({
    patientData: null,
    setPatientData: (data) => {},
    resetPatientData: () => {}
})

export function SessionContextProvider(props) {
    const [patientData, setPatientData] = useState(() => {
        const patient = sessionStorage.getItem("patientData")
        if (patient === null) {
            return null
        } else {
            return JSON.parse(patient)
        }
    })

    function setPatientDataHandler(data){
        return (
            sessionStorage.setItem("patientData", JSON.stringify(data)),
            setPatientData(data)
        )
    }

    function resetPatientDataHandler(){
        return (
            setPatientData(null),
            sessionStorage.clear()
        )
    }

    const context = {
        patientData: patientData,
        setPatientData: setPatientDataHandler,
        resetPatientData: resetPatientDataHandler
    }

    return (
        <SessionContext.Provider value={context}>
            {props.children}
        </SessionContext.Provider>
    )
}

export default SessionContext