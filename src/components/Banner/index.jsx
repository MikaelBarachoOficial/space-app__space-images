import styled from "styled-components"

const StyledBanner = styled.div`
    background: url("/images/banner/BannerEarth.svg") no-repeat center center / cover;
    width: 80%;
    height: 20em;
    max-width: 78em;
    border-radius: 20px;

    h2 {
        color: #FFF;
        font-family: 'GandhiSansRegular';
        font-size: 2.5rem;
        font-weight: 400;

        width: 301px;

        margin: 2em 0 0 2em;
    }

    @media screen and (max-width: 879px) {
        background: url("/images/banner/BannerEarth.svg") no-repeat 40%;
        h2 {
            margin: 2.3em 0 0 1em;
        }
    }
`

const Banner = () => {
    return (
        <StyledBanner>
            <h2>A galeria mais completa de fotos do espaço!</h2>
        </StyledBanner>
    )
}

export default Banner