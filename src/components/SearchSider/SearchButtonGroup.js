import React from 'react'
import { Button } from 'antd'
import '../MyStyles.css'

function SearchButtonGroup() {
    return(
        <Button.Group className = "search-button-group">
          <Button type="primary" className = 'search-button'> Buy </Button>
          <Button type="primary" className = 'search-button' > Sell </Button>
        </Button.Group>   
    )
}

export default SearchButtonGroup;