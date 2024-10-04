import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        height: '100vh',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Dashboard2(props) {

  const [pathname, setPathname] = useState('/dashboard');

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    // preview-start
    <AppProvider
      navigation={[
        {
          segment: 'dashboard',
          title: 'Dashboard',
          icon: <DashboardIcon />,
        },
        { kind: 'divider' },
        {
          segment: 'users',
          title: 'Users',
          icon: <PersonIcon />,
        },
        { kind: 'divider' },
        {
          segment: 'Create-Events',
          title: 'Create-Events',
          icon: <EventIcon />,
        },
        { kind: 'divider' },
        {
          segment: 'Events-list',
          title: 'Events-list',
          icon: <EventNoteIcon />,
        },
        { kind: 'divider' },
        {
          segment: 'participants',
          title: 'Participants',
          icon: <PeopleAltIcon />,
        },
        
      ]}
      branding={{
        logo:<img src="src/assets/CDAC.png" alt="CDAC" />,
        
         title: 'Dashboard'
      }}
      
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}


export default Dashboard2;