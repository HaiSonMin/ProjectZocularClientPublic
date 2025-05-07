import { IconButton, Tooltip } from "@mui/material";
import React from "react";

interface IPropButtonSimpleIcon {
    icon: React.ReactNode;
    onClick: () => void;
}

export const ButtonSimpleIcon = ({icon, onClick}: IPropButtonSimpleIcon) => {
    return <Tooltip title="Add New">
        <IconButton
            sx={{
                bgcolor: "#1976D2",
                borderRadius: "4px",
                "&:hover": {
                    bgcolor: "#1976D2",
                    boxShadow:
                        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);",
                },
            }}
            color="secondary"
            onClick={onClick}
        >
            {icon}
        </IconButton>
    </Tooltip>;
};
