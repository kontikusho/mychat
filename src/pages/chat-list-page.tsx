import { Fab, List, withStyles } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import ChatListHeader from "../components/chat-list-header";
import ChatListItem from "../components/chat-list-item";

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
                <List>
                    <ChatListItem avatar={<WorkIcon />} text="test" timestamp="test" roomId="1"/>
                </List>
                <Fab color="primary" className={classes.Fab} aria-label="add">
                    <AddIcon />
                </Fab>
            </>
        );
    }
}
export default styles(ChatListPage);
