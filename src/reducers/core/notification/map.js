const notify = message => ({ message, variant: 'info', open: true })

export default {
  'ADD ARTICLE'             : notify('article enregistré'),
  'ADD STOCK'               : notify('stock enregistré'),
  'ADD SALE'                : notify('vente enregistrée'),
  'ADD ARTICLE AND SALE'    : notify('article et vente enregistrés'),
  'ADD ARTICLE AND STOCK'   : notify('article et stock enregistrés'),
  'REMOVE ARTICLE'          : notify('article supprimé'),
  'REMOVE STOCK'            : notify('stock supprimé'),
  'REMOVE SALE'             : notify('vente supprimée'),
  'ADD PRICE'               : notify('prix ajouté'),
  'REMOVE PRICE'            : notify('prix retiré'),
  'INCORRECT PRICE'         : notify('le prix ou la quantité ne peut pas etre en dessous de 1'),
  'ADD UPDATE ARTICLE'      : notify('l\'article est mis à jour'),
  'DESIGNATION EXIST ERROR' : notify('Cette designation est deja inscrit dans le système'),
  'FILE ERROR'              : notify('Fichier corrompu'),
}
