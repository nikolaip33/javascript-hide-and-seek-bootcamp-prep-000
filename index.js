function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+ n).toString()
  }
}

function deepestChild() {
  let output = document.querySelector('#grand-node')
  let next = output.children[0]
  console.log("there should be something here")
  while (next) {
    output = next
    next = output.children[0]
  }

  return output
}
