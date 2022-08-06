
import {  faUserCircle  } from '@fortawesome/free-regular-svg-icons';
import {  faCog, faPager,  faChartLine,  faFileCirclePlus,  faFileText, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DashBoardSideBarData = [
    {
        icon:<FontAwesomeIcon icon={faFileCirclePlus}/>,
        title:'Posts',
        path:'/posts',
    },
    {
        icon:<FontAwesomeIcon icon={faPager}/>,
        title:'Templates',
        path:'/templates',
    },
    {
        icon:<FontAwesomeIcon icon={faUserCircle}/>,
        title:'Accounts',
        path:'/accounts',
    },
    {
        icon:<FontAwesomeIcon icon={faFileText}/>,
        title:'Pages',
        path:'/pages',
    },
    {
        icon:<FontAwesomeIcon icon={faChartLine}/>,
        title:'Insights',
        path:'/insight',
    },
    {
        icon:<FontAwesomeIcon icon={faFileCirclePlus}/>,
        title:'View page',
        path:'/view-page',
    },
    
    {
        icon:<FontAwesomeIcon icon={faCog}/>,
        title:'settings',
        path:'/settings',
    },
    
]