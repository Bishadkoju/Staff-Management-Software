
export const logout = () => {
    console.log('logout')
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}
