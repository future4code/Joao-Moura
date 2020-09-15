export const goToDetailPage = (history) => {
    history.push('/home/detail');
}

export const goToUserForm = (history) => {
    history.push('/home/detail/form')
}

export const goBack = (history) => {
    history.goBack()
}

export const goToDashBord = (history) => {
    history.push('/dashbord')
}

export const goToLogin = (history) => {
    history.replace('/login')
}