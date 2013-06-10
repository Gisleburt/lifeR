var fixLifeRotation = function() {
	document.getElementById('player3life').style.width = document.getElementById('player3').offsetHeight;
	document.getElementById('player3life').style.height = document.getElementById('player3').offsetWidth;
};

window.addEventListener('resize', fixLifeRotation, false);
