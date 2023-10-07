import styled from "styled-components"
import PropTypes from 'prop-types'

const StyledAsideItem = styled.li`
        button {
            background: none;
            border: none;
            cursor: pointer;

            width: 212px;
            padding: 0;
            
            display: flex;
            align-items: center;
            gap: 1em;
        }

        button img {
            width: 32px;
        }

        button p {
            font-family: ${props => props.$activated ? 'GandhiSansBold' : 'GandhiSansRegular'};
            color: ${props => props.$activated ? '#7B78E5' : '#D9D9D9'};
            font-size: 1.5rem;
            margin: 0;

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