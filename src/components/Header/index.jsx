import styled from "styled-components"

const StyledHeader = styled.header`
        padding: 3em 0;
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
            background: url(/icons/search.svg) no-repeat 97% center;
            padding-left: 2em;
            color: #fff;
            
        }

        input:focus {
            outline: none;
            border-color: #e8bdff;
        }

        input::placeholder {
             color: #D9D9D9;
             font-size: 1.25rem;
             font-family: 'GandhiSansRegular';
        }


    `

const Header = () => {
    return (
        <StyledHeader>
            <img src="/images/logo.png" alt="logo" />
            <input type="text" placeholder="What are you searching for?" />
        </StyledHeader>
    )
}

export default Header