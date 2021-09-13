import Head from 'next/head'
import { StateProvider } from '../context/StateProvider'
import reducer from '../context/reducer'
import initialState from '../context/initialState'
export default function Home() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div >
        <Head>
          <title>Snapchat</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="https://e7.pngegg.com/pngimages/865/794/png-clipart-social-media-computer-icons-snapchat-social-media-text-rectangle.png" type="image/x-icon" />
        </Head>
        <h2>Hello</h2>
      </div>
    </StateProvider>
  )
}
