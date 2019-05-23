import fdataCard    from '../../../factories/fdata-card'
import fpage        from '../../../factories/fpage'
import fpagination  from '../../../factories/fpagination'
import fslice       from '../../../factories/fslice'

export default dispatch => ({
  fpageProps        : fpage(dispatch, 'RESULTS STATS'),
  fpagerProps       : fpagination(dispatch),
  fresultStatsProps : fdataCard(dispatch, 'RESULTS STATS'),
  ffilter           : fslice(dispatch, 'resultStats'),
})
