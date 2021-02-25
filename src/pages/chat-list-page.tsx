import { Fab, makeStyles, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import ChatListHeader from "../components/chat-list-header";
import ChatList from "../components/chat-list";
import { Room } from "../types/store";

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
        icons: "Work",
        users: [],
    },
    {
        id: "2",
        name: "test",
        last: new Date(),
        icons: "Work",
        users: [],
    },
];

export default function ChatListPage() {
    const classes = useStyles();
    return (
        <>
            <ChatListHeader />
            <div className={classes.offset} />
            <ChatList data={data} />
            <Fab color="primary" className={classes.fab} aria-label="add">
                <AddIcon />
            </Fab>
        </>
    );
}
