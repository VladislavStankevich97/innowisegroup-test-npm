import * as React from 'react';
import Button from "@material-ui/core/Button";


interface propsButtonMaterialUI {
  disabled?: boolean,
  label?: string;
  height?: number;
  width?: number;
}

const ButtonMaterialUI: React.FC<propsButtonMaterialUI> = ({ disabled, label, height, width }) => {
  return (
    <div style={{ height: height, width: width }} className="ButtonMaterialUI">
      <Button
        disabled={disabled}
        variant="contained"
      >
        {label}
      </Button>
    </div>
  );
}
export default ButtonMaterialUI