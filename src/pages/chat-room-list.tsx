import { AppBar, Avatar, Divider, Fab, IconButton, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography, withStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import WorkIcon from "@material-ui/icons/Work";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

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
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">チャットルーム一覧</Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button component="a" href="#">
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="デフォルトチャットルーム" secondary="2021/01/01" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
                <Fab color="primary" className={classes.Fab} aria-label="add">
                    <AddIcon />
                </Fab>
            </>
        );
    }
}
export default styles(ChatListPage);
