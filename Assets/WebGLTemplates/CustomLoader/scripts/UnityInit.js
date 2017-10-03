window.firstSceneLoadedCallback = function() {
  var canvas = document.getElementById('gameContainer');
  if (canvas) {
    canvas.style.display = 'block';
  }
};

document.addEventListener('keypress', function(ev) {
  //Ctrl + M
  if (ev.ctrlKey == true && ev.keyCode == 10) {
    console.log('pressed');
  }
});

var i = 0;
function step(timestamp) {
  i++;
  if (window.jsLoaderTextNode !== undefined) {
    window.jsLoaderTextNode.nodeValue = i + '%';
  }

  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) return;
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement('div');
    gameInstance.progress.className = 'progress ' + gameInstance.Module.splashScreenStyle;
    gameInstance.progress.empty = document.createElement('div');
    gameInstance.progress.empty.className = 'empty';
    gameInstance.progress.appendChild(gameInstance.progress.empty);
    gameInstance.progress.full = document.createElement('div');
    gameInstance.progress.full.className = 'full';
    gameInstance.progress.appendChild(gameInstance.progress.full);
    document.body.appendChild(gameInstance.progress);

    var node = document.createTextNode('text');
    var p = document.createElement('p');
    p.appendChild(node);
    window.jsLoaderTextNode = node;
    document.body.appendChild(p);

    //gameInstance.container
  }

  gameInstance.progress.full.style.width = 100 * progress + '%';
  gameInstance.progress.empty.style.width = 100 * (1 - progress) + '%';

  console.log('progress: ' + i + ' progress ' + progress);

  // if (progress == 1)
  // 	gameInstance.logo.style.display = gameInstance.progress.style.display = "none";
}
