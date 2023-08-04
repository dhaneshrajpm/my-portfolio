import React from 'react';

import styles from './PageHandler.module.scss';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const PageHandler = () => {
  const navigate = useNavigate();

  return (<Result
    className={styles.result}
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
  />);
}

export default PageHandler;
