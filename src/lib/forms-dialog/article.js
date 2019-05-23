import React from 'react'
import FormDialog from './'
import NumberField from '../fields/number-field'
import TextField from '../fields/text-field'

export default ({ title, model = {}, handleChange = () => null, ...props }) => (
  <FormDialog {...props} title={title}>
    <TextField value={model.des} handleChange={handleChange('des')} label="Designation" />
    <NumberField value={model.uPrice} handleChange={handleChange('uPrice')} label="Prix unitaire" />
  </FormDialog>
)