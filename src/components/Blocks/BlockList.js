import React from 'react';

import { getBlockName } from './blockUtil';
import CarouselImg from './CarouselImg/CarouselImg';


export default class BlockList extends React.Component {


  render() {
    const { datas } = this.props;
    console.log('datas:', datas);
    return (
      <CarouselImg />
    )
  }
}