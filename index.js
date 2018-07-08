function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode){
    node = nextNode
    nextNode = node.children[0]
    }
    return node
}

function increaseRankBy(n){
  const ranking = document.querySelectorAll('.ranked-list')
    for (let i = 0, l = ranking.length; i < l; i++){
      let children = ranking[i].children

      for (let j = 0, k = children.length; j < k; j++){
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }

}
