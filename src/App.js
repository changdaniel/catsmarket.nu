import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Layout, AutoComplete, Button } from 'antd'

import CourseAutoComplete from './Components/SearchSider/CourseSearchAutoComplete.js'
import SearchButtonGroup from './Components/SearchSider/SearchButtonGroup.js'

const {Header, Content, Sider, Footer} = Layout

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider theme = 'light'>
          <h1>Search</h1>
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
