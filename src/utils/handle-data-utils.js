export const handleCategoryData = (data) => {
  // 1. 获取所有的类别
  const category = data.categories

  // 2. 创建新的 category 数据结构
  const newDataStructure = Object.entries(category).map(([key, value]) => {
    return {
      name: value,
      subs: []
    }
  })

  // 3. 遍历原数据，将其存入对应的类别中  
  for(let item of data.sub) {
    newDataStructure[item.category].subs.push(item)
  }

  // 4. 返回处理好的数据结构
  return newDataStructure
}