import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CloseButton from "./close-button";
import {
    AppBar,
    Button,
    Dialog,
    DialogContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Slide,
    SlideProps,
    TextField,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { icons } from "../types/icons";

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
    createHandler: (data: { icon: string, roomName: string }) => void;
}

export default function CreateChatRoomDialog(props: CreateChatRoomDialogProps) {
    const classes = useStyles();
    const [icon, setIcon] = useState("");
    const [roomName, setRoomName] = useState("");
    function handleChange(event: React.ChangeEvent<{ value: unknown; }>) {
        setIcon(event.target.value as string);
    }
    function handleRoomName(event: React.ChangeEvent<{ value: unknown; }>) {
        setRoomName(event.target.value as string)
    }
    function handleCreate() {
        props.createHandler({ icon, roomName });
    }
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
            <DialogContent >
                <FormControl fullWidth margin="normal">
                    <TextField
                        label="ルーム名"
                        placeholder="ルーム名を入力してください"
                        onChange={handleRoomName}
                        value={roomName}
                    />
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>アイコン</InputLabel>
                    <Select value={icon} onChange={handleChange} fullWidth>
                        {Object.keys(icons).map((keys) => {
                            const Icon = icons[keys];
                            return (
                                <MenuItem value={keys} key={keys}>
                                    <Icon />
                                    {keys}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <Button variant="contained" color="primary" onClick={handleCreate} > ルーム作成</Button>
                </FormControl>
            </DialogContent>
        </Dialog>
    );
}
