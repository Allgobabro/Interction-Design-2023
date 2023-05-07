const canvas = document.getElementById('akCanvas')
/** 初始化实例 */
let demo = new DameDaneParticle(canvas,{
  src: './image/test.png',
  w: 360
})

/** 修改图片 */
demo.ChangeImg('./image/island.png',{
  renderX: 300,
  w: 200,
  effectParticleMode: 'adsorption',
  Drag: 0.95
})

/** 粒子散开 / 聚合状态切换 */
demo.ParticlePolymerize()

const tip = () => { console.log('destory') }

/** 预销毁实例 */
demo.PreDestory(tip)
/** 销毁 */
demo = null
