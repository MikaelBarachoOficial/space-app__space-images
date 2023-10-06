import styled from "styled-components"
import { AsideItem } from "./AsideItem"

const StyledList = styled.ul`
        width: 212px;
        list-style: none;
        padding: 0;
        margin: 0;

        border: red solid 1px;
    `

const AsideMenu = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <AsideItem itemName='Home' activatedImage='/public/icons/home-ativo.png' disabledImage='/public/icons/home-inativo.png' activated/>
                    <AsideItem itemName='Most Viewed' activatedImage='/public/icons/mais-vistas-ativo.png' disabledImage='/public/icons/mais-vistas-inativo.png' />
                    <AsideItem itemName='Most Liked' activatedImage='/public/icons/mais-curtidas-ativo.png' disabledImage='/public/icons/mais-curtidas-inativo.png' />
                    <AsideItem itemName='New' activatedImage='/public/icons/novas-ativo.png' disabledImage='/public/icons/novas-inativo.png' />
                    <AsideItem itemName='Surprise me' activatedImage='/public/icons/surpreenda-me-ativo.png' disabledImage='/public/icons/surpreenda-me-inativo.png' />
                </StyledList>
            </nav>
        </aside>
    )
} 

export default AsideMenu