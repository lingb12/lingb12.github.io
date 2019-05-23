import React              from 'react'
import DialogContentText  from '@material-ui/core/DialogContentText'
import NumberField        from '../fields/number-field'
import FormDialog         from './'

export default ({ handleChange = () => null, model = {}, ...props }) => (
  <FormDialog title="Terminer l' achat" {...props}>
    <DialogContentText color="primary">
      L' article que vous veniez de saisir n'existe pas encore dans le systeme, alors determinez son prix unitaire de vente
    </DialogContentText>
    <NumberField label="Prix unitaire" value={model.uPrice} handleChange={handleChange('uPrice')} />
  </FormDialog>
)
