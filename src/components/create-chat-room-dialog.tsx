import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseButton from "./close-button";
import {
    AppBar,
    Dialog,
    Slide,
    SlideProps,
    Toolbar,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(
    props: SlideProps,
    ref
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface CreateChatRoomDialogProps {
    isOpen: boolean;
    closeHandler: (e: React.MouseEvent) => void;
}

export default function CreateChatRoomDialog(props: CreateChatRoomDialogProps) {
    const classes = useStyles();
    return (
        <Dialog fullScreen open={props.isOpen} TransitionComponent={Transition}>
            <AppBar position="relative" color="secondary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        ルーム作成
                    </Typography>
                    <CloseButton onClick={props.closeHandler} />
                </Toolbar>
            </AppBar>
        </Dialog>
    );
}
