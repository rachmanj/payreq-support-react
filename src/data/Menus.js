import {
  SiAirplayaudio,
  SiBookmeter,
  SiCampaignmonitor,
  SiAzurepipelines,
  SiBandsintown,
} from 'react-icons/si';

export const Menus = [
  {
    title: 'Dashboard',
    link: 'dashboard',
    icon: <SiBookmeter />,
    src: 'Chart',
  },
  {
    title: 'Payreq',
    link: 'payreqs',
    icon: <SiCampaignmonitor />,
    src: 'Chat',
  },
  {
    title: 'BUCs',
    link: 'bucs',
    icon: <SiBandsintown />,
    src: 'User',
    gap: true,
  },
  {
    title: 'Accounting ',
    link: 'accounting',
    icon: <SiAzurepipelines />,
    src: 'Folder',
    gap: true,
  },
  {
    title: 'Setting',
    link: 'settings',
    icon: <SiAirplayaudio />,
    src: 'Setting',
  },
];
