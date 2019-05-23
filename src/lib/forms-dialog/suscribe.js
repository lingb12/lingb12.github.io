import React      from 'react'
import TextField  from '../fields/text-field'
import Form       from './'

export const month = m => m < 10 ? `0${m}` : m
export const today = (day = new Date()) => 
  `${day.getFullYear()}-${month(day.getMonth() + 1)}-${day.getDate()}`

export default ({ handleChange, handleClose, handleSubmit, open, limitDate, code }) => (
  <Form {...{handleSubmit: handleSubmit({ limitDate, code }), handleClose, open, title: 'Abonnement'}}>
    <TextField type="date" label="Date limite" value={limitDate || today()} handleChange={handleChange('limitDate')} />
    <TextField type="password" label="Code" value={code} handleChange={handleChange('code')} />
  </Form>
)
