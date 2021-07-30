import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'

const setupIconLibrary = (): void =>
  library.add(
    faSpinner,
  )

export default setupIconLibrary
