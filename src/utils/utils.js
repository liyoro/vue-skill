/*
 * @Author: liyoro
 * @since: 2022-03-07 11:22:29
 * @lastTime: 2022-03-07 11:28:41
 */
export function findElem(arrayToSearch, attr, val) {
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
