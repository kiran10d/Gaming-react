import { FaStar } from 'react-icons/fa';

export const SideNavItems = [
  { name: 'Home', icon: null, childeren: [], path: '/' },
  { name: 'Reviews', icon: null, childeren: [] },
  {
    name: 'NewReleases',
    icon: null,
    childeren: [
      { name: 'Last 30 Days', icon: <FaStar /> },
      { name: 'This week', icon: <FaStar /> },
      { name: 'Next week', icon: <FaStar /> },
      { name: 'Release calendar', icon: <FaStar /> },
    ],
  },
  {
    name: 'Top',
    icon: null,
    childeren: [
      { name: 'Best of the year', icon: <FaStar /> },
      { name: 'Popular in 2021', icon: <FaStar /> },
      { name: 'All time top 250', icon: <FaStar /> },
    ],
  },
  // { name: 'AllGames', icon: null, childeren: [] },
  {
    name: 'Browse',
    icon: null,
    childeren: [
      { name: 'Platforms', icon: <FaStar /> },
      { name: 'Stores', icon: <FaStar /> },
      { name: 'Collections', icon: <FaStar /> },
    ],
  },
];
