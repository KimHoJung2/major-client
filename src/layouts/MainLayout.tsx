//base
import React, { HTMLAttributes, useState } from 'react';

//package
import { Col, Row, Drawer, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { MenuOutlined, LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { SubMenu } = Menu;

const MainStyled = styled.div`
  background: #5f5f5f;
`;

const HeaderStyled = styled(Header)`
  background: #001529;
  color: #00bdb7;

  .main-header {
    #main-title {
      font-size: 2rem;
      font-weight: bold;
      font-family: monospace;
      text-align: center;
    }

    #main-menu,
    #main-logout {
      display: flex;
      font-size: 1.2rem;
    }
  }
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
        {children}
      </MainStyled>
      <DrawerStyled
        placement='left'
        onClose={onClose}
        closable={false}
        visible={visible}
      >
        <Menu mode='inline' theme='dark'>
          <SubMenu title='정모 게시판'>
            <Menu.Item>정모점수</Menu.Item>
            <Menu.Item>참가신청</Menu.Item>
          </SubMenu>
          <Menu.Item>회원정보</Menu.Item>
        </Menu>
      </DrawerStyled>
    </>
  );
};

export default MainLayout;
