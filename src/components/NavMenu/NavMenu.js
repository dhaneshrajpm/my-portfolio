import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

import styles from './NavMenu.module.scss';
import { NAV_MENU_ITEMS } from '../../constants/constant';

const NavMenu = ({ active }) => {
  const [activeTab, setActiveTab] = useState(active);
  const navigate = useNavigate();

  const handleOnClick = useCallback((e) => {
    const { key } = e;
    setActiveTab([key])
    navigate(`${key}`);
  }, [navigate])

  return (
    <Menu
      className={styles.menu}
      mode='horizontal'
      selectedKeys={activeTab}
      defaultSelectedKeys={active}
      items={NAV_MENU_ITEMS}
      onClick={handleOnClick}
    />
  );
}

export default NavMenu;