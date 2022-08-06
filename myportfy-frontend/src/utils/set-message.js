export const setMessage = (message, isSuccess) => {
    localStorage.setItem("Message", message);
    localStorage.setItem("isSuccess", isSuccess);

    setTimeout(() => {
        localStorage.removeItem("Message");
        localStorage.removeItem("isSuccess", isSuccess);
    }, 10);
}