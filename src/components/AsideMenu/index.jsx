import styled from "styled-components"
import { AsideItem } from "./AsideItem"

const StyledList = styled.ul`
        width: 212px;
        list-style: none;
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: 1.5em;
    `

const AsideMenu = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <AsideItem itemName='Home' activatedImage='/icons/home-ativo.png' disabledImage='/icons/home-inativo.png' activated/>
                    <AsideItem itemName='Most Viewed' activatedImage='/icons/mais-vistas-ativo.png' disabledImage='/icons/mais-vistas-inativo.png' />
                    <AsideItem itemName='Most Liked' activatedImage='/icons/mais-curtidas-ativo.png' disabledImage='/icons/mais-curtidas-inativo.png' />
                    <AsideItem itemName='New' activatedImage='/icons/novas-ativo.png' disabledImage='/icons/novas-inativo.png' />
                    <AsideItem itemName='Surprise me' activatedImage='/icons/surpreenda-me-ativo.png' disabledImage='/icons/surpreenda-me-inativo.png' />
                </StyledList>
            </nav>
        </aside>
    )
} 

export default AsideMenu