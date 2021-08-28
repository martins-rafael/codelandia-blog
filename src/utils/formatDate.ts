export const formatDate = (data: string) => {
  const date = new Date(data);
  const formatedDate = date.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return formatedDate;
};