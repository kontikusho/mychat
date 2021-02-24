import { List } from "@material-ui/core";
import { Work } from "@material-ui/icons";
import ChatListItem from "./chat-list-item";

function ChatList() {
    return (
        <List>
            <ChatListItem avatar={<Work />} text="test" timestamp="test" roomId="123" />
        </List>
    );
}
export default ChatList;
