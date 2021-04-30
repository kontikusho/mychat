import React from "react";
import {
  AppBar,
  Box,
  Divider,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) => ({
  Grid: {
    display: 'grid',
    gridTemplateRows: theme.mixins.toolbar.minHeight + 'px auto ' + theme.mixins.toolbar.minHeight + 'px',
    gridTemplateColumns: '100%',
  },

  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChatRoomPage() {
  const classes = useStyles();
  return (
    <Grid container
      direction="column"
      justify="space-between"
      alignItems="stretch"
      className={classes.Grid}
    >
      <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">チャットルーム一覧</Typography>
        </Toolbar>
      </AppBar>

      <Grid container
        direction="column"
        justify="flex-end"
        alignItems="stretch"
      >
        <List className={classes.root}>
          <ListItem>
            <ListItemText
              primary={
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Box fontWeight={700}>
                    ユーザー名
                                    </Box>
                  {moment(new Date()).fromNow()}
                </Grid>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    チャットメッセージ
                                    </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText
              primary={
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Box fontWeight={700}>
                    ユーザー名
                                    </Box>
                  {moment(new Date()).fromNow()}
                </Grid>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    チャットメッセージ
                                    </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary={
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
                >
                  <Box fontWeight={700}>
                    ユーザー名
                                    </Box>
                  {moment(new Date()).fromNow()}
                </Grid>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    チャットメッセージ
                                    </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
        </List>
      </Grid>

      <Box
        color="transparent"
      >
        <div>
          <Grid container alignItems="flex-end">
            <Grid item>
              <Input placeholder="メッセージを入力してください" />
            </Grid>
            <Grid item>
              <SendIcon color="primary" />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Grid>
  );
}
