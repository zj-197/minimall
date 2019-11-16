import request from './request.js'
export function getCategoryData(){
  return request({
    url: '/category'
  })
}
export function getSubCategory(maitKey){
  return request({
    url: '/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}