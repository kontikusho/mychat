import { Fab, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import ChatListHeader from "../components/chat-list-header";
import ChatList from "../components/chat-list";

const styles = withStyles(
    (theme) => ({
        Fab: {
            position: "absolute",
            right: theme.spacing(2),
            bottom: theme.spacing(2),
        },
    }),
    { withTheme: true }
);
interface Props {
    classes: any;
}

class ChatListPage extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <>
                <ChatListHeader />
                <ChatList data={[]}/>
                <Fab color="primary" className={classes.Fab} aria-label="add">
                    <AddIcon />
                </Fab>
            </>
        );
    }
}
export default styles(ChatListPage);
