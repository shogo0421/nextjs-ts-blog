import { parseISO, format } from 'date-fns'

interface DateProps {
  dateString: string
}

export default function Date({ dateString }: DateProps): JSX.Element {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
