document.addEventListener('DOMContentLoaded', function() {

	var stages = [
		'rotate',
		'render-active',
		'tasks-active'
	]

	var loop = document.getElementById('eventloop');
	var activeToken = document.getElementById('loop-active');

	function loadNextStage() {
		console.log('load next stage');
		activeToken.removeEventListener('animationiteration', loadNextStage);
		var currentStage = stages.findIndex(function(className) { return loop.classList.contains(className); });
		if(currentStage >= 0) {
			loop.classList.remove(stages[currentStage]);
		}
		loop.classList.add(stages[currentStage + 1]);
	}

	document.addEventListener('keypress', function(evt) {
		if(evt.key === 'Enter') {
			var currentStage = stages.findIndex(function(className) { return loop.classList.contains(className); });
			if(currentStage >=0) {
				console.log('queue next stage', currentStage);
				activeToken.addEventListener('animationiteration', loadNextStage);
			} else {
				loop.classList.add(stages[0]);
			}
		}
	});


});
