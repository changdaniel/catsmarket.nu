import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Layout, AutoComplete, Button } from 'antd'

import CourseAutoComplete from './components/SearchSider/CourseSearchAutoComplete.js'
import SearchButtonGroup from './components/SearchSider/SearchButtonGroup.js'
import SearchHeader from './components/SearchSider/SearchHeader.js'

const {Header, Content, Sider, Footer} = Layout

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider theme = 'light' width = '240px' collapsedWidth = '0px' collapsible>
        
          <SearchHeader/>
          <CourseAutoComplete/>
          <SearchButtonGroup/>
        </Sider>
        <Content>
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
