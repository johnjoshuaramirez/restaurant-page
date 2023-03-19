export const footer = (() => {
	const footer = document.createElement('footer');
	const span = document.createElement('span');
	span.innerText = 'Yukihira Restaurant';
	footer.appendChild(span);

	return footer;
})();
