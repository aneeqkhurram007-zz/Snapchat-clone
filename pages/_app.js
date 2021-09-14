import '../styles/globals.css'
import { StateProvider } from '../context/StateProvider'
import reducer from '../context/reducer'
import initialState from '../context/initialState'
function MyApp({ Component, pageProps }) {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>

      <Component {...pageProps} />

    </StateProvider>
  )

}

export default MyApp
