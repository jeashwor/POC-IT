// eslint-disable-next-line no-undef
state = {
    patients: [],
    currentPatient: {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    },
    providers: [],
    currentProvider: {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {}
    },
    procedures: [],
    currentProcedure: {
        name: "",
        instructions: "",
        numSteps: 0,
        currentStep: 0,
        currentImage: ""
    },
    isAuthenticated: false,
    user: {},
    loading: false
}