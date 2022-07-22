function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
	}
	
	const avatar = document.querySelector('#player');
	const coin = document.querySelector('#coin');
	
	window.addEventListener('keyup', function (event) {
	if (event.key === 'ArrowDown' || event.key === 'Down') {
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = `${currTop + 50}px`;
	} else if (event.key === 'ArrowUp' || event.key === 'Up') {
		const currTop = extractPos(avatar.style.top);
		avatar.style.top = `${currTop - 50}px`;
	} else if (event.key === 'ArrowRight' || event.key === 'Right') {
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft + 50}px`;
		avatar.style.transform = 'scale(1,1)';
	} else if (event.key === 'ArrowLeft' || event.key === 'Left') {
		const currLeft = extractPos(avatar.style.left);
		avatar.style.left = `${currLeft - 50}px`;
		avatar.style.transform = 'scale(-1,1)';
	}
	////////////////////////////////////////////////////////////////////////
	if (isTouching(avatar, coin)) {
		incrementScore();
		moveCoin();
	}
	});
	/////////////////////////////////////////////////////////////////////////
	
	const incrementScore = () => {
	  const score = Number(document.getElementById('score').textContent);
	  document.getElementById('score').textContent = score + 1;
	};
	
	const extractPos = (position) => {
	  if (!position) return 50;
	  return parseInt(position.slice(0, -2));
	};
	
	const moveCoin = () => {
	  const y = Math.floor(Math.random() * window.innerWidth);
	  const x = Math.floor(Math.random() * window.innerHeight);
	  coin.style.top = `${y}px`;
	  coin.style.left = `${x}px`;
	};
	
	moveCoin();
