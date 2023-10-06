import styled from "styled-components"
import PropTypes from 'prop-types'

const StyledAsideItem = styled.li`
        button {
            background: none;
            border: none;
            cursor: pointer;

            width: 212px;
            
            display: flex;
            align-items: center;
            gap: 1em;
        }

        button img {
            width: 32px;
        }

        button p {
            ${props => props.$activated ? 'color: #7B78E5; font-weight: 700;' : 'color: #D9D9D9; font-weight: 400;'}
            font-size: 1.5rem;
          

        }
    `

export const AsideItem = ({itemName, activatedImage, disabledImage, activated = false}) => {
    return (
        <StyledAsideItem $activated = {activated}>
            <button>
                {activated === true ? <img src={activatedImage} alt={itemName}/> : <img src={disabledImage} alt={itemName}/>}
                <p>{itemName}</p>
            </button>
        </StyledAsideItem>
    )
}

AsideItem.propTypes = {
    itemName: PropTypes.string.isRequired,
    activatedImage: PropTypes.string.isRequired,
    disabledImage: PropTypes.string.isRequired,
    activated: PropTypes.bool
}