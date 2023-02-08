import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'

moment.locale()

export const withPrettyDate = (OriginalComponent) => (props) => {
  const {date} = props
  const prettyDate = moment(date).fromNow()
  return <OriginalComponent {...props} date={prettyDate} />
}
