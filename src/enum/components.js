import Enum from '@/utils/enum'

const setting = Object.freeze({
  loading: {
    title: 'Loading',
    name: 'LoadingDemo'
  },
  flyin: {
    title: 'Flyin',
    name: 'FlyinDemo'
  },
  backToTop: {
    title: 'BackToTop',
    name: 'BackToTopDemo'
  }
})

export default Enum(setting)
