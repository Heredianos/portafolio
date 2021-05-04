import React from 'react';
import pictureProfile from '../images/perfil.png';
import "../style/Picture.css"

class Picture extends React.Component {
    render() {
        return (
            <div className="Profile">
                <img src={pictureProfile} alt="Imagen de perfil" />
            </div>
        )
    }
}

export default Picture;