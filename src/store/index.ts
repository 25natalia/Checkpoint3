import { reducer } from './reducer';

import { navigate } from './actions';

export let emptyState = {
	screen: 'REGISTER',
	userId: '',
};

export let appState = emptyState;
console.log('holis', appState);

let observers: any[] = [];

const notifyObservers = () => observers.forEach((o: any) => o.render());

export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;
	notifyObservers();
};

export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};