import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React, { ReactElement } from "react";
// import { RouteComponentProps, withRouter } from "react-router";

// import * as H from "history";

interface ChatListItemProps {
    avatar: ReactElement;
    roomId: string;
    text: string;
    timestamp: string;
}

function ChatListItem(props: ChatListItemProps) {
    function handlePage(): void {
        console.log("test");
        //        props.history.push("/room?roomId=" + props.roomId);
    }

    return (
        <ListItem button component="div" onClick={() => handlePage()}>
            <ListItemAvatar>
                <Avatar>{props.avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary={props.timestamp} />
        </ListItem>
    );
}

export default ChatListItem;
