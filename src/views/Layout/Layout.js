

import React from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppRoutes from '../../routes';
import Icon1 from '../../assets/images/dashboard.png';
import Icon2 from '../../assets/images/task.png';
import Icon3 from '../../assets/images/list.png';
import './layout.scss';

const Layout = () => {

    const menuList = [
        {name: "Dashboard", link: "/dashboard", icon: Icon1},
        {name: "Add Task", link: "/add-task", icon: Icon2},
        {name: "My Tasks", link: "/my-tasks", icon: Icon3}
    ]; 

    return (
            <div className='wrapper'>
                <Header/>
                <div className='container-main layout-container'>
                    <Sidebar itemList={menuList} />
                    <div className='layout-sub'>
                        <AppRoutes/>
                    </div>
                </div>
            </div>
    )
    
};

export default Layout;