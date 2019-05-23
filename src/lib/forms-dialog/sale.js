import React          from 'react'
import FormDialog     from './'
import NumberField    from '../fields/number-field'
import SelOrTextField from '../fields/select-or-text'

export default ({ model = {}, articles, handleChange = () => null, ...props }) => (
  <FormDialog {...props} title="Ajouter une vente">
    <SelOrTextField value={model.art} options={articles} handleChange={handleChange('art')}
      label="Article" listId="sale-articles" />
    <NumberField value={model.qty} handleChange={handleChange('qty')} label="Quantité" />
  </FormDialog>
)
