function getFirstSelector(selector){ return document.querySelector(selector)} 

function nestedTarget(){ 
  return document.querySelector('#nested .target')
  }

function increaseRankBy(n) {
 var rankedList = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
    var grandNodeId = document.getElementById('grand-node')
    while (grandNodeId.firstElementChild) {
      grandNodeId = grandNodeId.firstElementChild
    }
    return grandNodeId
}
