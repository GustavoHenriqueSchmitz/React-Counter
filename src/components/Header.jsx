import PropTypes from 'prop-types'
import './Header.module.css'
import logoReact from '../img/react-logo.png'

function Header({imgDescription, title}) {

    return (
    <header>
        <h1>{title}</h1>
        <img src={logoReact} alt={imgDescription} />
    </header>
    )
}

Header.propTypes = {
    imgDescription: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export {Header}
