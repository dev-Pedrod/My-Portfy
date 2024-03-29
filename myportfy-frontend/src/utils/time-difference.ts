export const timeDifference = (d: string) => {
  const dateNow = new Date();
  const date = new Date(d);
  const formattedDate = new Intl.DateTimeFormat("pt-Br", {
    dateStyle: "short",
  }).format(Date.parse(d));

  //if the difference is less than 30 seconds
  if (dateNow.getTime() - date.getTime() < 30000) {
    return `Agora mesmo`;
  }

  //get the difference in minutes
  if (dateNow.getTime() - date.getTime() <= 3600000) {
    let diffMinutes = Math.ceil(Math.abs(dateNow.getTime() - date.getTime()) / (1000 * 60));
    if (diffMinutes < 2) {
      return `Há ${diffMinutes} minuto`;
    }
    return `Há ${diffMinutes} minutos`;
  }

  //get the difference in hours
  else if (dateNow.getTime() - date.getTime() < 86400000) {
    let diffHours = Math.ceil(Math.abs(dateNow.getTime() - date.getTime()) / (1000 * 3600) - 1);
    if (diffHours < 2) {
      return `Há uma hora`;
    }
    return `Há ${diffHours} horas`;
  }

  //get the difference in days
  else if ((dateNow.getTime() - date.getTime()) / (1000 * 3600 * 24) - 1 <= 28) {
    let diffDays = Math.ceil(Math.abs(dateNow.getTime() - date.getTime()) / (1000 * 3600 * 24) - 1);
    if (diffDays < 2) {
      return `Há ${diffDays} dia`;
    }
    return `Há ${diffDays} dias`;
  }
  return formattedDate;
}
