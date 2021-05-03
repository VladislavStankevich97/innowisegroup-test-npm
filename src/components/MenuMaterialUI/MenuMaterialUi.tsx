import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface ButtonsTS {
    label?: string;
    height?: number;
    width?: number;
    textItem1?: string;
    textItem2?: string;
    textItem3?: string;
    backgroundColor?: string;
}

const MenuMaterialUi: React.FC<ButtonsTS> = ({ backgroundColor, label, textItem1, textItem2, textItem3, width, height }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ width: width, height: height, backgroundColor: backgroundColor }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {label}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>{textItem1}</MenuItem>
                <MenuItem onClick={handleClose}>{textItem2}</MenuItem>
                <MenuItem onClick={handleClose}>{textItem3}</MenuItem>
            </Menu>
        </div>
    );
}

export default MenuMaterialUi
