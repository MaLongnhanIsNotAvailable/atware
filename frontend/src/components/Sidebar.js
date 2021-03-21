import React from 'react';
import '../css/Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-0/p180x540/157591847_1692448000934152_5428668743834359872_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=kQC3VQlfc08AX_s_UPY&_nc_ht=scontent.fsgn2-5.fna&tp=6&oh=8915dc026d09cef83223e6b98e7e6e05&oe=6074ACC5" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;
