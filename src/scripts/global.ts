// Scroll reveal observer
function initReveal() {
	const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
	if (!reveals.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
				}
			});
		},
		{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
	);

	reveals.forEach((el) => observer.observe(el));
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
	document.addEventListener('keydown', (e: KeyboardEvent) => {
		const target = e.target as HTMLElement;
		if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
			return;
		if (e.metaKey || e.ctrlKey || e.altKey) return;

		switch (e.key.toLowerCase()) {
			case 't': {
				const btn = document.getElementById('theme-toggle');
				if (btn) btn.click();
				break;
			}
			case 'h':
				if (window.location.pathname !== '/') window.location.href = '/';
				break;
			case 'b':
				if (!window.location.pathname.startsWith('/blog')) window.location.href = '/blog';
				break;
			case 'j': {
				const next = document.querySelector<HTMLAnchorElement>('.nav-link.next a');
				if (next) next.click();
				break;
			}
			case 'k': {
				const prev = document.querySelector<HTMLAnchorElement>('.nav-link.prev a');
				if (prev) prev.click();
				break;
			}
			case '?':
				console.log(
					'%c⌨️ Keyboard Shortcuts',
					'font-size: 14px; font-weight: bold;',
				);
				console.log(
					'%ct %c→ toggle theme',
					'color: #2337ff; font-weight: bold;',
					'color: inherit;',
				);
				console.log(
					'%ch %c→ go home',
					'color: #2337ff; font-weight: bold;',
					'color: inherit;',
				);
				console.log(
					'%cb %c→ go to blog',
					'color: #2337ff; font-weight: bold;',
					'color: inherit;',
				);
				console.log(
					'%cj %c→ next post',
					'color: #2337ff; font-weight: bold;',
					'color: inherit;',
				);
				console.log(
					'%ck %c→ previous post',
					'color: #2337ff; font-weight: bold;',
					'color: inherit;',
				);
				break;
		}
	});
}

// Initialize on first load and on Astro page transitions
initReveal();
initKeyboardShortcuts();

document.addEventListener('astro:page-load', initReveal);
