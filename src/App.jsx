import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import AsideMenu from "./components/AsideMenu"

const GradientBackground = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    height: 100vh;
  `

function App() {

  return (
    <GradientBackground>
      <GlobalStyles />

      <Header />
      <AsideMenu />

    </GradientBackground>
  )
}

export default App
