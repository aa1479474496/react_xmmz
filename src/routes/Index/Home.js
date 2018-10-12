import React, { Component } from 'react';
import { connect } from 'dva';

import PageHeader from '../../components/PageHeader';
import BlockList from '../../components/Blocks/BlockList'

@connect(({ home }) => ({
  home
}))
export default class Home extends React.Component {
  state = {
    currentName: ''
  }

  changeTab = (tab, index) => {
    const { dispatch, home } = this.props;
    const name = tab['title'];
    this.setState({
      currentName: name
    });
    if(home.contentCache[name])return;
    dispatch({
      type: 'home/getContent',
      payload: {
        special_id: tab['special_id'],
        page: 10,
        curpage: 1,
        name
      }
    });
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/getTabs'
    });
  }

  render() {
    const {
      home: { tabs, contentCache }
    } = this.props;
    // console.log('tabs', tabs);
    // const currentName = this.state.currentName || tabs[0]['name']
    // const datas = contentCache[currentName]

    // console.log('currentName:', currentName);
    return (
      <PageHeader tabs={tabs} changeTab={this.changeTab}>
        <div style={{color: 'red', fontSize: '24px'}}> content </div>
        <BlockList/>
        <div style={{height: '1000px'}}></div>
      </PageHeader>
    );
  }
}

