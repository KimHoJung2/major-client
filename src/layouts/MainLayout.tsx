//base
import React, { HTMLAttributes, useState } from 'react';

//package
import { Col, Row, Drawer, Menu, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const MainStyled = styled.div`
  background: #5f5f5f;
`;

const HeaderStyled = styled(Header)`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  background: #001529;
  color: #00bdb7;

  .main-header {
    #main-title {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
    }

    #main-menu,
    #main-logout {
      display: flex;
      font-size: 1.2rem;
    }
  }
`;

const ChildrenStyled = styled.div`
  padding-top: 50px;
`;

const DrawerStyled = styled(Drawer)`
  color: #00bdb6;
  .ant-drawer-content-wrapper {
    width: 60% !important;
    .ant-drawer-content {
      background: #0c2b3a;
    }
  }
`;

type MainLayoutProps = HTMLAttributes<HTMLDivElement>;

const MainLayout = ({ children }: MainLayoutProps) => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const onClose = () => {
    setVisible(false);
  };

  const showMenu = () => {
    setVisible(true);
  };

  return (
    <>
      <MainStyled>
        <HeaderStyled>
          <Row className='main-header'>
            <Col span={5} id='main-menu' onClick={showMenu}>
              <MenuOutlined style={{ margin: 'auto' }} />
            </Col>
            <Col span={14} id='main-title'>
              MAJOR
            </Col>
            <Col span={5} id='main-logout'>
              <LogoutOutlined style={{ margin: 'auto' }} />
            </Col>
          </Row>
        </HeaderStyled>
        <ChildrenStyled>{children}</ChildrenStyled>
      </MainStyled>
      <DrawerStyled
        placement='left'
        onClose={onClose}
        closable={false}
        visible={visible}
      >
        <Menu
          mode='inline'
          theme='dark'
          activeKey={location.pathname.split('/')[1]}
          selectable={true}
          defaultSelectedKeys={[location.pathname.split('/')[1]]}
        >
          <Menu.Item key='mainscore'>
            <Link to='/mainscore'>정모게시판</Link>
          </Menu.Item>
          <Menu.Item key='userinfo'>
            <Link to='/userinfo'>회원정보</Link>
          </Menu.Item>
        </Menu>

        <Button
          type='primary'
          style={{ width: '100%', marginTop: '20%' }}
          onClick={onClose}
        >
          닫기
        </Button>
      </DrawerStyled>
    </>
  );
};

export default MainLayout;
