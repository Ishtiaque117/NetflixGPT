
export const checkValidData = (email,password) => {

    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const valiPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validEmail) return "Email is not valid";

    if(!valiPassword) return "password is not valid";

    return null;
}