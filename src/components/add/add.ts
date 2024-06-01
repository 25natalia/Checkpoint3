import styles from './login.css';

export enum AttributeSongs {
    'image' = 'image',
    'artist' = 'artist',
	'name' = 'name',
	'price' = 'price',
	'stock' = 'stock',
	'button' = 'button',

}

class addComponent extends HTMLElement {
    image?: string;
    artist?: string;
	name?: string;
	price?: string;
	stock?: string;
	button?: string;


	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeSongs, null> = {
            image: null,
            artist: null,
			name: null,
			price: null,
			stock: null,
			button: null,

		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeSongs, oldValue: string | undefined, newValue: string | undefined) {
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
			<h1>Add New Product</h1>
            <section class= "imagen">
			<img src="${this.image}" alt= "cover album"></img>
			</section>
			<p>Album name</p>
			<input>${this.name}</input>
			<p>Artist name</p>
			<input>${this.artist}</input>
			<p>Price</p>
            <input>${this.price}</input>
			<p>Image link</p>
            <input>${this.stock}</input>
			<button>${this.button}</button>

		</section>
    `;
		}

		const cssCard = this.ownerDocument.createElement('style');
		cssCard.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCard);
	}
}

export default addComponent;
customElements.define('my-add', addComponent);