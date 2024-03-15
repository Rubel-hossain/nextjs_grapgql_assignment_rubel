export const dateFormate = (date: Date): string => {
  if (!date) return "";
  const date_ = new Date(date)
  const cdate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(date_).split(' ');
  return (cdate[0] + ' ' + cdate[1] + ', ' + cdate[2])
}
