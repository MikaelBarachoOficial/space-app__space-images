import styled from "styled-components"

const AsideMenu = () => {

    const StyledList = styled.ul`
        width: 212px;
        list-style: none;
        padding: 0;
        margin: 0;
        
    `

    return (
        <aside>
            <nav>
                <StyledList>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Most Viewed</a>
                    </li>
                    <li>
                        <a href="">Most Liked</a>
                    </li>
                    <li>
                        <a href="">New</a>
                    </li>
                    <li>
                        <a href="">Surprise me</a>
                    </li>
                </StyledList>
            </nav>
        </aside>
    )
} 

export default AsideMenu