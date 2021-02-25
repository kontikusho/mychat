import { Divider, List } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { icons } from "../types/icons";
import { Room } from "../types/store";
import ChatListItem from "./chat-list-item";

interface ChatListProps {
    data: Room[];
}

function ChatList(props: ChatListProps) {
    return (
        <List>
            {props.data.map((item) => {
                const AvatarIcon = icons[item.icons];
                return (
                    <>
                        <ChatListItem
                            avatar={<AvatarIcon />}
                            text={item.name}
                            timestamp={moment(item.last).fromNow()}
                            key={item.id}
                            roomId={item.id}
                        />
                        <Divider />
                    </>
                );
            })}
        </List>
    );
}
export default ChatList;
