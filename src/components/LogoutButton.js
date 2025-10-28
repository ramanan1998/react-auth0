
const LogoutButton = () => {

    return (
        isAuthenticated && (
            <button onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogoutButton
