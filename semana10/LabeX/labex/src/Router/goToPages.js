
export const goToHome = (history) => {
    history.push('/')
}


export const goToUserForm = (history) => {
    history.push('/form')
}


export const goToLogin = (history) => {
    localStorage.clear();
    history.replace('/login')
}


export const goToDashBord = (history) => {
    const token = window.localStorage.getItem("token");
    
    if (token) {
        history.push('/dashbord')
    } else {
        goToLogin(history)
    }
}


export const goToDashBordForm = (history) => {
    const token = window.localStorage.getItem("token");
        
    if (token) {
        history.push('/dashbord/form')
    } else {
        goToLogin(history)
    }
}


export const goToDetail = (history,id) => {
    const token = window.localStorage.getItem("token");
        
    if (token) {
        history.push(`/dashbord/detalhes/${id}`);
    } else {
        goToLogin(history)
    }
}


export const goBack = (history) => {
    history.goBack()
}