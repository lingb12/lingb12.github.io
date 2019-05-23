import React              from 'react'
import Button             from '@material-ui/core/Button'
import DialogContent      from '@material-ui/core/DialogContent'
import DialogContentText  from '@material-ui/core/DialogContentText'
import DialogActions      from '@material-ui/core/DialogActions'
import Dialog             from './dialog'

export default ({ handleDeleteClick, artId, ...props }) => (
  <Dialog title="Suppression d'un article" {...props}>

    <DialogContent>
      <DialogContentText align="justify" color="secondary">
        La suppression d'un article entraîne la suppression de toutes les operations
        (achats et ventes)
        qui lui sont liées. Etês-vous sûr de vouloir effectuer la suppression ?
      </DialogContentText>
    </DialogContent>

    <DialogActions>
      <div style={{ paddingRight: 16 }}>
        <Button color="primary" variant="contained" onClick={handleDeleteClick(artId)}>
          Supprimer
        </Button>
      </div>
    </DialogActions>
    
  </Dialog>
)
