export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToSingUpPage = (history) => {
    history.push("/cadastre-se")
}

export const goToFeedPage = (history) => {
    const token = localStorage.getItem("token")
    token? history.push("/"): alert("erro")
}

export const goToCommentsPage = (history, id) => {
    history.push(`/comentarios/${id}`)
}

export const goToLogout = (history) => {
    localStorage.clear()
    history.replace(`/login`)
}

export const goToBack = (history) => {
    history.goBack()
}