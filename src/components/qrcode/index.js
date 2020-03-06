import React from 'react';
import QRcode from 'qrcode.react';

import './styles.css';

const Qrcode = ({value}) => (
    <div className="qrcode">
        <QRcode 
            value={value} 
            size={250}
            fgColor="#4d13b1"
        />
    </div>
)

export default Qrcode;