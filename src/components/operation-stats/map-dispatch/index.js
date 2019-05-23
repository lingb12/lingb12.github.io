import fdataCard    from '../../../factories/fdata-card'
import fpage        from '../../../factories/fpage'
import fpagination  from '../../../factories/fpagination'
import fslice       from '../../../factories/fslice'

export default dispatch => ({
  fpageProps      : fpage(dispatch, 'OPERATIONS STATS'),
  fpagerProps     : fpagination(dispatch),
  foperationStatsProps : fdataCard(dispatch, 'OPERATIONS STATS'),
  ffilter         : fslice(dispatch, 'operationsStats'),
})
