import React from 'react'
import { Icon, Typography } from 'antd'
import './FooterContent.css'

const { Text } = Typography


export default function FooterContent(){
    return(
        <div className = 'footer-content'>
            <Text> Powered By: </Text>
            <Icon type="amazon" />
            <Icon type="ant-design" />
            <Icon type="github"  />
            <Icon type="html5"  />
        </div>
    )
}
