
import { AttributeCard } from '../components/card/card';
import { addObserver } from '../store';

import styles from './dashboard.css';


export class Home extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

    

	connectedCallback() {
		this.render();
	}


	submitForm() {
	
	}

	async render() {
		if (this.shadowRoot) {
			
	
			const titleHome = this.ownerDocument.createElement('h1');
			titleHome.textContent = '   Vinyl store';
			this.shadowRoot?.appendChild(titleHome);


			const home = this.ownerDocument.createElement('button');
			home.innerText = 'Home';
			home.classList.add('save');
			home.addEventListener('click', this.submitForm.bind(this));
			this.shadowRoot?.appendChild(home);

            const add = this.ownerDocument.createElement('button');
			add.innerText = 'Add new product';
			add.classList.add('save');
			add.addEventListener('click', this.submitForm.bind(this));
			this.shadowRoot?.appendChild(add);

            const modify = this.ownerDocument.createElement('button');
			modify.innerText = 'Modify porduct';
			modify.classList.add('save');
			modify.addEventListener('click', this.submitForm.bind(this));
			this.shadowRoot?.appendChild(modify);

			const available = this.ownerDocument.createElement('h1');
			available.textContent = 'Available Vinyl records';
			this.shadowRoot?.appendChild(available);


			const cssDashboard = this.ownerDocument.createElement('style');
			cssDashboard.innerHTML = styles;
			this.shadowRoot?.appendChild(cssDashboard);
		}
	}
}
customElements.define('app-home', Home);