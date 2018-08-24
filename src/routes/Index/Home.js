import React, { Component } from 'react';
import { connect } from 'dva';

import PageHeader from '../../components/PageHeader';

@connect(({ home }) => ({
  home
}))
export default class Home extends React.Component {
  changeTab = (tab, index) => {
    const { dispatch, home } = this.props;
    const name = tab['title'];
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
      home: { tabs }
    } = this.props;
    return (
      <PageHeader tabs={tabs} changeTab={this.changeTab}>
        <div style={{color: 'red', fontSize: '24px'}}> content </div>
        <div style={{height: '1000px'}}></div>
      </PageHeader>
    );
  }
}

