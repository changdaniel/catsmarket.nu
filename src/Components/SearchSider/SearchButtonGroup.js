import React from 'react'
import { Button } from 'antd'

function SearchButtonGroup() {
    return(
        <Button.Group>
          <Button type="primary"> Buy </Button>
          <Button type="primary"> Sell </Button>
        </Button.Group>   
    )
}

export default SearchButtonGroup