const names = {
  "adv_list": 'CarouselImg'
}

function getBlockName(item_type) {
  if (names[item_type]) {
    return names[item_type]
  }
  else {
    return ''
  }
}              

export {
  getBlockName
}