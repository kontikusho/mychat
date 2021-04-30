import {
    Divider,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import useReactRouter from "use-react-router";

interface ChatListItemProps {
    roomId: string;
    text: string;
    timestamp: string;
}

interface PrimaryTextProps {
    text: string;
}

function PrimaryText(props: PrimaryTextProps) {
    return <div>{props.text}</div>
}

function ChatListItem(props: ChatListItemProps) {
    const { history } = useReactRouter();
    function handlePage(): void {
        history.push("/room?roomId=" + props.roomId);
    }

    return (
        <>
            <ListItem button component="div" onClick={() => handlePage()}>
               <ListItemText
                    primary={<PrimaryText text={props.text} />}
                    secondary={props.timestamp}
                />
            </ListItem>
            <Divider />
        </>
    );
}

export default ChatListItem;
