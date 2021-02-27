import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";

interface CloseButtonProps {
    onClick: (e: React.MouseEvent) => void;
}

export default function CloseButton(props: CloseButtonProps) {
    return (
        <IconButton edge="end" color="inherit" onClick={props.onClick}>
            <Close />
        </IconButton>
    );
}
