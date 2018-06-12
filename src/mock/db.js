import Mock from 'mockjs'

export default {
  selections: {
    reg: /selections/,
    data: [
      {
        label: '前端开发',
        id: '100'
      },
      {
        label: '初级前端工程师',
        id: '101'
      },
      {
        label: '中级前端工程师',
        id: '102'
      },
      {
        label: '高级前端工程师',
        id: '103'
      }
    ]
  },
  imgList: {
    reg: /imgList/,
    data: Mock.mock({
      'imgList|4': ['imgList']
    })['imgList']
      .map(x => {
        return {
          src: Mock.Random.image('900x400', Mock.Random.color()),
          link: Mock.Random.url(),
          title: Mock.Random.title()
        }
      })
  }
}
