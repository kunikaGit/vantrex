import Router from "./routes/router"
import './assets/scss/index.scss'
import { Toaster } from "react-hot-toast"
import { toastOptions } from "./components/toastConfig"
import '../src/assets/main.css'
import { useEffect } from "react"
import Aos from "aos"
function App() {
  console.log("app Render");
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Toaster toastOptions={toastOptions} reverseOrder={true} />
      <Router />
    </>
  )
}

export default App
