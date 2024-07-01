import React from 'react';

const Logo = ({isDark}) => {
    return (
        <div className={`${isDark ? 'text-custom-dark' : 'text-white'} uppercase font-bold text-2xl`}>
            logo
        </div>
    );
}

export default Logo;
