import asc from './asc';

export default (order, orderBy) => order === 'desc'
  ? (a, b) => -asc(a[orderBy], b[orderBy])
  : (a, b) => asc(a[orderBy], b[orderBy])
  