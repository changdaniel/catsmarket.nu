import React from 'react'
import Fuse from 'fuse.js'
// import courses from './courses.json'
import courses from './courses_v2.json'
import { AutoComplete , Icon, Input} from 'antd';
import '../MyStyles.css'

const options = {
  shouldSort: true,
  tokenize: true,
  threshold: 0.15,
  location: 0,
  distance: 100,
  maxPatternLength: 25,
  minMatchCharLength: 1,
  keys: [
    "details.dept_symbol",
    "details.catalog_num",
    "details.name"
  ]
};

const DISPLAY_COUNT = 5;

var fuse = new Fuse(courses, options)

export default class CourseAutoComplete extends React.Component{
    
    state = {
        value : "",
        dataSource: []
    }

    onSearch = searchText => {

        var results = fuse.search(this.state.value)
        
        this.setState({
          dataSource: !(searchText || results) ? [] : results.filter((course,index) => { return index < DISPLAY_COUNT})
        });
      };
    
    onChange = value => {
        this.setState({ value });
      };


    onSelect = value => {

      for (let course of this.state.dataSource) if (course['display_name'] === value) console.log(course)
      
    }

    render() {

        return(
            <AutoComplete
            className = 'course-search-box'
            dropdownMatchSelectWidth={false}
            value = {this.state.value}
            dataSource={this.state.dataSource.map(course => course['display_name'])}
            onSelect={this.onSelect}
            onSearch={this.onSearch}
            onChange = {this.onChange}
            placeholder="ex. ECON 201"
          >
            <Input suffix={<Icon type="search"/>}> </Input>
          </AutoComplete>

        )
    }
}