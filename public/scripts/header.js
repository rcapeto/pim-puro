const { pathname } = window.location;
const route = pathname.replace('/', '');
const currentRoute = route ? route : 'inicio';
const element = document.querySelector(`[data-route="${currentRoute}"]`);
element && element.classList.add('active');