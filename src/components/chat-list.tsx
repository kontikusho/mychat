import { List } from "@material-ui/core";
import { Work } from "@material-ui/icons";
import { Room } from "../types/store";
import ChatListItem from "./chat-list-item";

interface ChatListProps {
    data: Room[];
}

function ChatList(props: ChatListProps) {
    return (
        <List>
            <ChatListItem avatar={<Work />} text="test" timestamp="test" roomId="123" />
        </List>
    );
}
export default ChatList;
