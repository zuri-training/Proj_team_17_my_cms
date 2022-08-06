
import { faEye, faUserCircle, faCopy,  } from '@fortawesome/free-regular-svg-icons';
import { faIdBadge, faCog, faPager, faChartArea, faChartColumn, faChartLine, faContactBook, faBookBookmark, faBroadcastTower, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DashBoardSideBarData = [
    {
        icon:<FontAwesomeIcon icon={faBroadcastTower}/>,
        title:'Posts',
        path:'/forgot',
    },
    {
        icon:<FontAwesomeIcon icon={faChartLine}/>,
        title:'Templates',
        path:'/',
    },
    {
        icon:<FontAwesomeIcon icon={faUserCircle}/>,
        title:'Accounts',
        path:'/',
    },
    {
        icon:<FontAwesomeIcon icon={faEye}/>,
        title:'Pages',
        path:'/signup',
    },
    {
        icon:<FontAwesomeIcon icon={faChartLine}/>,
        title:'Insights',
        path:'/',
    },
    {
        icon:<FontAwesomeIcon icon={faPager}/>,
        title:'View page',
        path:'/',
    },
    
    {
        icon:<FontAwesomeIcon icon={faCog}/>,
        title:'settings',
        path:'/',
    },
    
]