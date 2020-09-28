export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSingUpPage = (history) => {
    history.push("/cadastre-se")
}

export const goToFeedPage = (history) => {
    history.push("/")
}

export const goToCommentsPage = (history, id) => {
    history.push(`/comentarios/${id}`)
}

export const goToLogout = (history) => {
    history.replace(`/login`)
}

export const goToBack = (history) => {
    history.goBack()
}