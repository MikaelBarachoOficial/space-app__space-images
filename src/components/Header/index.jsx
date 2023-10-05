import styled from "styled-components"

const Header = () => {

    const StyledHeader = styled.header`
        padding: 3em 2em;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            max-width: 212px;
        }
        
        input {
            width: 602px;
            height: 56px;
            border-radius: 10px;
            border: 2px solid #C98CF1;
            background: url(/public/icons/search.svg) no-repeat 97% center;
            padding-left: 2em;
            color: #fff;
            
        }

        input:focus {
            outline: none;
            border-color: #e8bdff;
        }

        input::placeholder {
             color: #D9D9D9;
        }

        border: red solid 1px;
    `

    return (
        <StyledHeader>
            <img src="/public/images/logo.png" alt="logo" />
            <input type="text" placeholder="What are you searching for?" />
        </StyledHeader>
    )
}

export default Header