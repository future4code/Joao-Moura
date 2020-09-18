
export const goToHome = (history) => {
    history.push('/')
}

export const goToUserForm = (history) => {
    history.push('/form')
}

export const goToLogin = (history) => {
    history.replace('/login')
}

export const goToDashBord = (history) => {
    history.push('/dashbord')
}

export const goToDetail = (history,id) => {
    history.push(`/dashbord/detalhes/${id}`);
}
export const goBack = (history) => {
    history.goBack()
}