import React,{Component} from 'react';
import { Layout} from 'antd';
import ContentMain from '../../components/ContentMain';
import SiderNav from '../../components/SiderNav';
import './index.css';
const { Header, Content, Footer} = Layout;
export default class Index extends Component {
  render() {
    return (
        <Layout>
            <SiderNav/>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <ContentMain/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>admin system ©2019 Created by Harhao</Footer>
            </Layout>
        </Layout>
    );
  }
}