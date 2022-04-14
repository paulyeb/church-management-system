import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
        <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp
