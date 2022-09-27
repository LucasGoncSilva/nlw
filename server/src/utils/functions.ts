export function convertHoursStringToMinutes(hours: string) {
  const [hour, minutes] = hours.split(':').map(Number)

  return hour * 60 + minutes
}


export function convertMinutesToHoursString(minutesAmout:number) {
  const hours = Math.floor(minutesAmout / 60)
  const minutes = minutesAmout % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}