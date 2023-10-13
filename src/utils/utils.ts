// Get User Auth Token
export function getAuthToken() {
    const token = localStorage.getItem('token')
    if (token) {
        return token
    }
    return null
}

export function getAccountUUID (accounts: any) {
    if (accounts && accounts?.length > 0) {
        return accounts[0]?.uuid ?? null
    }
    return null
}