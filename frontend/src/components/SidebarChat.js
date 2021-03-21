import React from 'react'
import '../css/SidebarChat.css'
import {Avatar} from '@material-ui/core'
const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/159763840_1698289480350004_5432658226081335930_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qaLMsxGcX3YAX_60scU&_nc_oc=AQkRVbdjDMLsmj28w1nTzCrLePA9jg841hbz8ifOY7RFQlXTibpob8798R-bzQcOHNM&_nc_ht=scontent-hkt1-1.xx&oh=66bd1fbabbeaa955f630766c75fa3282&oe=607B2E95"/>
            <div className="sidebarChat__info">
                <h2>Hoang Ha Vy</h2>
            </div>

            <div className="chat__headerRight">
                
            </div>
        </div>
    )
}

export default SidebarChat
 