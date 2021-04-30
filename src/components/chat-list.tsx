import { List } from "@material-ui/core";
import moment from "moment";
import { Room } from "../types/store";
import ChatListItem from "./chat-list-item";

interface ChatListProps {
    data: Room[];
}

function ChatList(props: ChatListProps) {
    return (
        <List>
            {props.data.map((item) => {
                return (
                    <ChatListItem
                        text={item.name}
                        timestamp={moment(item.last).fromNow()}
                        key={item.id}
                        roomId={item.id}
                    />
                );
            })}
        </List>
    );
}
export default ChatList;
