const list = [
  { prose: '印客学院' },
  { prose: '一千个职业梦想的赞助商' },
  { prose: '印客学院 Vue 移动端项目模板' },
]

export default {
  'GET /api/project/prose': (req, res) => {
    res.json(list[Math.floor(Math.random() * 3)])
  },
}
