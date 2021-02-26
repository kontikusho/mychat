import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import useReactRouter from "use-react-router";

interface ChatListItemProps {
    avatar: ReactElement;
    roomId: string;
    text: string;
    timestamp: string;
}

function ChatListItem(props: ChatListItemProps) {
    const { history } = useReactRouter();
    function handlePage(): void {
        history.push("/room?roomId=" + props.roomId);
    }

    return (
        <>
            <ListItem button component="div" onClick={() => handlePage()}>
                <ListItemAvatar>
                    <Avatar>{props.avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={props.text}
                    secondary={props.timestamp}
                />
            </ListItem>
            <Divider />
        </>
    );
}

export default ChatListItem;
