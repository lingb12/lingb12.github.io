import fdataCard    from '../../../factories/fdata-card'
import fpage        from '../../../factories/fpage'
import fpagination  from '../../../factories/fpagination'
import fslice       from '../../../factories/fslice'

export default dispatch => ({
  fpageProps      : fpage(dispatch, 'SALES STATS'),
  fpagerProps     : fpagination(dispatch),
  fsaleStatsProps : fdataCard(dispatch, 'SALES STATS'),
  ffilter         : fslice(dispatch, 'salesStats'),
})
