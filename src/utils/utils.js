/*
 * @Author: liyoro
 * @since: 2022-03-07 11:22:29
 * @lastTime: 2022-03-17 15:32:16
 */
const findElem = (arrayToSearch, attr, val) => {
  if (arrayToSearch != null) {
    for (var i = 0; i < arrayToSearch.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (arrayToSearch[i][attr] == val) {
        return i
      }
    }
  } else {
    return -1
  }
  return -1
}

// [0, max]随机整数
const randomInt = (max) => {
  return Math.round(Math.random() * max)
}

// 生成[0, max)的随机整数
const randomIntL = (max) => {
  return Math.floor(Math.random() * max)
}

// 生成(0, max]的随机整数
const randomIntR = (max) => {
  return Math.ceil(Math.random() * max)
}

export default {
  findElem,
  randomInt,
  randomIntL,
  randomIntR
}
