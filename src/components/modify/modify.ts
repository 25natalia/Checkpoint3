import styles from './card.css';

export enum AttributeCard {
    'image' = 'image',
    'artist' = 'artist',
	'name' = 'name',
	'price' = 'price',
	'stock' = 'stock',
    'edit' = 'edit',
    'delete' = 'delete',

}

class cardComponent extends HTMLElement {
    image?: string;
    artist?: string;
	name?: string;
	price?: string;
	stock?: string;
    edit?: string;
    delete?: string;


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeCard, null> = {
            image: null,
            artist: null,
			name: null,
			price: null,
			stock: null,
            edit: null,
            delete: null,

		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<section class = "card">
            <h1>Modify Products</h1>
            <section class= "imagen">
			<img src="${this.image}" alt= "cover album"></img>
			</section>
			<h2>${this.name}</h2>
			<p>${this.artist}</p>
            <p>${this.price}</p>
            <p>${this.stock}</p>
            <input>${this.edit}</input>
            <input>${this.delete}</input>

		</section>
    `;
		}

		const cssCard = this.ownerDocument.createElement('style');
		cssCard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCard);
	}
}

export default cardComponent;
customElements.define('my-card', cardComponent);