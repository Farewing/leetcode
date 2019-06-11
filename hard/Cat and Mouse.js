/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function (graph) {

  if (graph[0].indexOf(1) > -1) return 1;

  var shortMouse = getShortestPath(1, 0);


  if (graph[0].includes(2)) {
    graph[0].unshift();
    graph[2].unshift();
  }

  for (let i = 0; i < shortMouse.path.length; i++) {
    var l = getShortestPath(2, shortMouse.path[i]).length;
    if (l > i && (l - i) % 2 == 0) return 2;
    if (l > i && (l - i) % 2 == 1) return 0;
  }
  return 1;

  function getShortestPath(start, end) {
    var dist = [];

    for (let i = 0; i < graph.length; i++) {
      dist[i] = {
        isKnown: false,
        length: 9999,
        path: []
      }
    }
    dist[start] = {
      isKnown: false,
      length: 0,
      path: []
    }

    //
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (!dist[j].isKnown && dist[j].length == i) {
          dist[j].isKnown = true;
          for (let k = 0; k < graph[j].length; k++) {
            let ele = graph[j][k]
            if (dist[ele].length > i + 1) {
              dist[ele].length = i + 1;
              dist[ele].path = [...dist[j].path, j];
            }
          }
        }
      }
    }
    return dist[end];

  }
};