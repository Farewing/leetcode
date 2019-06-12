/**
 * @param {number[][]} graph
 * @return {number}
 */
var catMouseGame = function(graph) {
  if (graph[0].indexOf(1) > -1) return 1;
  if (graph[1].includes(2) && graph[1].length == 1) return 2;

  var shortMouse = getShortestPath(1, 0);
  console.log(shortMouse);

  if (graph[0].includes(2)) {
    graph[0].shift();
    graph[2].shift();
  }

  for (let i = 0; i < shortMouse.path.length; i++) {
    var l = getShortestPath(2, shortMouse.path[i]).length;
    console.log(shortMouse.path[i], i, l);
    if (l < i && (i - l) % 2 == 0) return 2;
    if (l < i && (i - l) % 2 == 1) return 0;
    if (l == i) return 0;
  }
  return 1;

  function getShortestPath(start, end) {
    var dist = [];

    for (let i = 0; i < graph.length; i++) {
      dist[i] = {
        isKnown: false,
        length: 9999,
        path: []
      };
    }
    dist[start] = {
      isKnown: false,
      length: 0,
      path: []
    };

    //
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (!dist[j].isKnown && dist[j].length == i) {
          dist[j].isKnown = true;
          for (let k = 0; k < graph[j].length; k++) {
            let ele = graph[j][k];
            if (dist[ele].length >= i + 1) {
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
