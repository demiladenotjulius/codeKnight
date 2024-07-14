import React from 'react';

const Logo = ({isDark}) => {
    return (
        <div className={`${isDark ? 'text-custom-dark' : 'text-white'}  font-bold text-2xl`}>
            codeKnight
        </div>
    );
}

export default Logo;
