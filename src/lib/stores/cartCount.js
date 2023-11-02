import { derived } from 'svelte/store';
import { readCartItems } from './cartItem';

export const cartCount = derived(readCartItems, ($readCartItems) => {
	return Object.keys($readCartItems).length;
});
