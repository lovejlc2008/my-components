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
      .map((x, index) => {
        return {
          src: Mock.Random.image('600x300', Mock.Random.color(), index + 1),
          link: Mock.Random.url(),
          title: Mock.Random.title()
        }
      })
  },
  waterfall: {
    reg: /waterfall/,
    data: Mock.mock({
      'waterfall|30': ['waterfall']
    })['waterfall']
      .map((x, index) => {
        return {
          src: Mock.Random.image('100x' + Mock.mock({'number|100-200': 200})['number'], Mock.Random.color(), index + 1),
          href: Mock.Random.url(),
          title: Mock.Random.title()
        }
      })
  }
}
