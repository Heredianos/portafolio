import React from 'react';
import '../style/Badge.css';

import Picture from '../components/Picture';

class Badge extends React.Component {
    render () {
        return (
            <div className="Badge">
                <div id="area0" >
                <Picture/>
                </div>
                <h2 id="area1"> Trayectoria Profesional </h2>
                <h2 id="area2" > Portafolio </h2>
            </div>
        )
    }
}

export default Badge;