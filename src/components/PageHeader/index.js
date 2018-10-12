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
            tabBarUnderlineStyle={{'borderColor':'#fff'}}
            tabBarBackgroundColor="#2b2b2b" 
            tabBarActiveTextColor="#fff"
            tabBarInactiveTextColor="#999"
            tabBarTextStyle={{fontSize: '14px'}}
            >
              {children ? <div>{children}</div> : null}
          </Tabs>
        </StickyContainer>
      </div>
  )
}

export default PageHeader;