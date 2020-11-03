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


// 获取歌手字母类别
export function generateSingerAlpha() {
  let alphabets = ["-1"];
  let start = 'A'.charCodeAt(0);
  let last  = 'Z'.charCodeAt(0);
  for (let i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }
  alphabets.push("0");
  return alphabets;
}

export const singerAlphas = generateSingerAlpha();