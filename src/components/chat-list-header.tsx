import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

class ChatListHeader extends React.Component {
    render() {
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">チャットルーム一覧</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
export default ChatListHeader;
