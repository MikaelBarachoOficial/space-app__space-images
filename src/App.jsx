import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import AsideMenu from "./components/AsideMenu"
import Banner from "./components/Banner"

const GradientBackground = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;

`

const StyledContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {

  return (
    <GradientBackground>
      <GlobalStyles />

      <Header />

      <StyledContainerTop>
        <AsideMenu />
        <Banner/>
      </StyledContainerTop>

    </GradientBackground>
  )
}

export default App
