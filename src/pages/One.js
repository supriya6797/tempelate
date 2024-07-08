import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SearchIcon from '@mui/icons-material/Search';
import Form from 'react-bootstrap/Form';

const drawerWidth = 180;

const One=()=> {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           Template
          </Typography>
          {/*  */}
          <Form className="d-flex">
            <Form.Control
            style={{ backgroundColor:"none",border:"none",marginLeft:"7px"}}
              type="search"
              placeholder="Search" 
            />
            <SearchIcon  style={{ fontSize:"2.3em"}} />
          </Form>
          {/*  */}
        
          {/*  */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ flexGrow: 1}}>
        <h3>Cards</h3>
      <Grid container spacing={{ xs: 2, md: 3 }} >
        {/* start3 */}
          <Grid item xs={12} sm={4} md={4} >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">button</Button>
      </Card.Body>
    </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4fGMTB4DbJhPzGFJHSD5t4mGD4E6u6EM7w&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">button</Button>
      </Card.Body>
    </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPBZQR8Ul4xcWJjlrLyjAggqwN1IbOjsnWA&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">button</Button>
      </Card.Body>
    </Card>
          </Grid>
          </Grid>
          </Box>
          {/* end3 */}
          <Box sx={{ flexGrow: 1,marginTop:"25px"}}>
            <h3>Cards</h3>
          <Grid container spacing={{ xs: 2, md: 3 }} >
        {/* start3 */}
          <Grid item xs={12} sm={4} md={4} >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrU7qPwgLA-h9WKA0bV1clf0KGsSMPYVDekw&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">button</Button>
      </Card.Body>
    </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVcGvk4AhWZPQxueLfUB0iNX96kNwCJ0Hpjg&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">button</Button>
      </Card.Body>
    </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kdQJKFiJ4mxhKVK6S6e7dMt7xlpoxqKA9Q&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">button</Button>
      </Card.Body>
    </Card>
          </Grid>
          {/* end3 */}
      </Grid>
    </Box>
      </Box>
    </Box>
  );
}
export default One;
