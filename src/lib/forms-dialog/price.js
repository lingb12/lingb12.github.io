import React        from 'react'
import NumberField  from '../fields/number-field'
import FormDialog   from './'

export default ({ qty, price, handleChange, ...props }) => (
  <FormDialog {...props} title="Ajouter un prix">
    <NumberField label="Quantité" value={qty} handleChange={handleChange('qty')} />
    <NumberField label="Prix" value={price} handleChange={handleChange('price')} />
  </FormDialog>
)
