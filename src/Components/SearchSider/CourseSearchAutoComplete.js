import React from 'react'
import Fuse from 'fuse.js'
import courses from './courses.json'
import { AutoComplete } from 'antd';


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

export default class CourseAutoComplete extends React.Component{
    
    state = {
        value : "",
        dataSource: []
    }

    onSearch = searchText => {

        var fuse = new Fuse(courses, options)
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
            dropdownMatchSelectWidth={false}
            value = {this.state.value}
            dataSource={this.state.dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={this.onSearch}
            onChange = {this.onChange}
            placeholder="ECON 201"
          />

        )
    }
}