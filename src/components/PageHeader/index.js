import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';


function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} page={5} /></div>}
  </Sticky>);
}

const PageHeader = ({tabs, children, changeTab }) => {
  const change = (tab, index) => {
    changeTab(tab, index);
  }

  const tabsTitle = tabs.map((item) => {
    return {
      title: item.name,
      special_id: item.special_id
    }
  });
  return (
    <div>
        <StickyContainer>
          <Tabs 
            tabs={tabsTitle} 
            renderTabBar={renderTabBar} 
            onChange={change} 
            tabBarUnderlineStyle={{background: '#fff'}}
            tabBarBackgroundColor="#eb4e4f" 
            tabBarActiveTextColor="#fff"
            tabBarTextStyle={{color: 'skyblue'}}
            tabBarInactiveTextColor="rgba(247, 247, 247, 0.8)">
              {children ? <div>{children}</div> : null}
          </Tabs>
        </StickyContainer>
      </div>
  )
}

export default PageHeader;