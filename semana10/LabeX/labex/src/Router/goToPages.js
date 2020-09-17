
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

export const goToDetailPage = (history) => {
    history.push('/dashbord/detail');
}
export const goBack = (history) => {
    history.goBack()
}