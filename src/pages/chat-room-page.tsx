import React from "react";
import { AppBar, Box, Grid, IconButton, Input, Toolbar, Typography, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
const styles = withStyles(
    (theme) => ({
        AppBar: {
            bottom: 0,
            top: "auto",
        },
        offset: theme.mixins.toolbar,
    }),
    { withTheme: true }
);
interface Props {
    classes: any;
}

class ChatRoomPage extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">チャットルーム一覧</Typography>
                    </Toolbar>
                </AppBar>
                <Box flexDirection="column" className={classes.offset}>
                    test
                </Box>
                <Box position="fixed" color="transparent" className={classes.AppBar}>
                    <div>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Input placeholder="メッセージを入力してください"/>
                            </Grid>
                            <Grid item>
                                <SendIcon color="primary"/>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </>
        );
    }
}

export default styles(ChatRoomPage);
