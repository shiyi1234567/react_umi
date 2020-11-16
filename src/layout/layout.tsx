import React, { Component } from 'react';
import  {Layout ,Menu} from 'antd';
import { Router, Route, Link,HashRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css'

const { Header, Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
        <Layout>
        <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
            
            <Menu theme="dark" mode="inline" >
                {/*定义了项目的link，会按照路由走*/}
                <Menu.Item><Link to="/Analysis">Item Analysis</Link></Menu.Item>
                <Menu.Item><Link to="/Monitor">Item Monitor  </Link></Menu.Item>
            </Menu>
            
        </Sider>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {/*Analysis.js文件引用了BasicLayout，并把自己的全部子节点(子组件)传过来*/}
              {this.props.children}
              
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}