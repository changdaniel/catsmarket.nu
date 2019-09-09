import React from 'react'
import Fuse from 'fuse.js'
import courses from './courses.json'
import { AutoComplete } from 'antd';
import './CourseSearchAutoComplete.css'

var options = {
  shouldSort: true,
  tokenize: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "dept_symbol",
    "catalog_num",
    "name"
  ]
};

var fuse = new Fuse(courses, options)

function onSelect(value) {
    console.log('onSelect', value);
}

function constructSearchResult(result){

  var result_arr = result
    .filter((course,index) => {
      return index < 3
    })
    .map(course => {
      return course['dept_symbol'] + " " + course['catalog_num'] + ": " + course['name']
    })

    return result_arr

}

export default class CourseAutoComplete extends React.Component{
    
    state = {
        value : "",
        dataSource: []
    }

    onSearch = searchText => {

        var results = fuse.search(this.state.value)

        this.setState({
          dataSource: !searchText ? [] : constructSearchResult(results)
        });
      };
    
    onChange = value => {
        this.setState({ value });
      };

    render() {

        return(
            <AutoComplete
            className = 'course-search-box'
            
            dropdownMatchSelectWidth={false}
            value = {this.state.value}
            dataSource={this.state.dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.onSearch}
            onChange = {this.onChange}
            placeholder="ex. ECON 201"
          />

        )
    }
}