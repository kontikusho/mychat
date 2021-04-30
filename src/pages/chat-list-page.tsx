import { Fab, makeStyles, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";

import ChatListHeader from "../components/chat-list-header";
import ChatList from "../components/chat-list";
import { Room } from "../types/store";
import CreateChatRoomDialog from "../components/create-chat-room-dialog";

const useStyles = makeStyles((theme: Theme) => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    offset: theme.mixins.toolbar,
}));

const data: Room[] = [
    {
        id: "1",
        name: "test",
        last: new Date(),
        users: [],
    },
    {
        id: "2",
        name: "test",
        last: new Date(),
        users: [],
    },
];

export default function ChatListPage() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = function (_: React.MouseEvent): void {
        setOpen(true);
    };
    const handleClose = function (_: React.MouseEvent): void {
        setOpen(false);
    };
    const createHandler = (data: { roomName: string }) => {
        setOpen(false)
    }
    return (
        <>
            <ChatListHeader />
            <div className={classes.offset} />
            <ChatList data={data} />
            <CreateChatRoomDialog isOpen={open} closeHandler={handleClose} createHandler={createHandler} />
            <Fab color="primary" className={classes.fab} onClick={handleOpen}>
                <AddIcon />
            </Fab>
        </>
    );
}
