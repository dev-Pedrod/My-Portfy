export async function setMessage (message: string, isSuccess: boolean) {
  localStorage.setItem("Message", message);
  localStorage.setItem("isSuccess", String(isSuccess));

  setTimeout(() => {
    localStorage.removeItem("Message");
    localStorage.removeItem("isSuccess");
  }, 4100);
}
