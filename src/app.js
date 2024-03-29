import React from 'react';
import { Layout, Menu, Breadcrumb, Icon,Message} from 'antd'
import {Link } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import {getUser} from './apis/user'
import RouteIndex from './route/index'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      mockmenu :{},
    } 
  }

  componentDidMount(){
   this.getmenudata()
  }

  getmenudata = async () => {
    try{
      let res = await getUser()
      this.setState({mockmenu:res.data})
    }catch(err){
      Message.error(err.msg)
    }
  }
  
  onCollapse = () => {
    this.setState({collapsed:true })
  };  //syntax 'classproperties is't currently enabled     不支持装饰器写法需要配置babel

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <Link to ='/user'><span>asdasd</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span><Link to ='/usergroup'>Option 2</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>


        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <RouteIndex />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default  App
