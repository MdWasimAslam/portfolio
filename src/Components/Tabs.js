import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./Tabs.css";



export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="Tabs-main-container">
      {/* Tabs Component */}
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="white"
        TabIndicatorProps={{
          sx: {
            backgroundColor: '#F05454', // Custom color for the indicator
            height: 6, // Thickness of the indicator
          },
        }}
      >
        <Tab value="one" label="Feed"  className={`tabs-label ${value === 'one' ? 'selected' : ''}`} />
        <Tab value="two" label="About" className={`tabs-label ${value === 'two' ? 'selected' : ''}`}  />
        <Tab value="three" label="Projects" className={`tabs-label ${value === 'three' ? 'selected' : ''}`}  />
        <Tab value="four" label="Career" className={`tabs-label ${value === 'four' ? 'selected' : ''}`} />
      </Tabs>

      {/* Tab Content */}
      <Box className='tabs-content'>
        {value === 'one' && (
          <Typography variant="body1">
            <b>Feed:</b> This is the feed section. Here, you can display updates, news, or other posts.
          </Typography>
        )}
        {value === 'two' && (
          <Typography variant="body1">
            <b>About:</b> This is the about section. Here, you can describe yourself or your application.
          </Typography>
        )}
        {value === 'three' && (
          <Typography variant="body1">
            <b>Projects:</b> This is the projects section. Showcase your work or portfolio here.
          </Typography>
        )}
        {value === 'four' && (
          <Typography variant="body1">
            <b>Career:</b> This is the career section. Highlight career opportunities or personal milestones.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
