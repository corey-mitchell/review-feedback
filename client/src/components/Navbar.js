// Import react and dependencies
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Create Custom Styles
const styles = {
    root: {
      flexGrow: 1
    },
    appBar: {
      background: '#323741',
      overflow: "hidden",
      top: 0
    },
    grow: {
      flexGrow: 1,
    }
};

// Creates Navbar Component
class Navbar extends React.Component {
    // Renders Component to DOM
    render() {
        return (
            <div className='root' style={styles.root}>
                {/* Render AppBar */}
                <AppBar position="static" className='appBar' style={styles.appBar}>
                    <Toolbar>
                        {/* App Title */}
                        <Typography variant="h3" color="inherit" className='grow' style={styles.grow}>
                        Employee Reviewer
                        </Typography>

                        {/* Home Button */}
                        <Button color="inherit" onClick={this.props.openLandingPage}>Go Home</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    };
};

// Exports component for app to use
export default Navbar;