import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Layout, Button } from 'antd'



import SearchSider from './components/SearchSider/index.js'
import SearchButtonGroup from './components/SearchSider/SearchButtonGroup.js'


import FooterContent from './components/Footer/FooterContent.js'


const {Header, Content, Sider, Footer} = Layout

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider theme = 'light' width = '240px' collapsedWidth = '0px' collapsible>
          <SearchSider/>
        </Sider>
        <Content>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>
          <p>very long</p>

          <SearchButtonGroup/>
        </Content>
        
      </Layout>
      <Footer>
        <FooterContent/>
      </Footer>
    </Layout>
  );
}

export default App;
