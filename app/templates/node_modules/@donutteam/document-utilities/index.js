//
// Exports
//

/**
 * Converts an HTML string to an element.
 * 
 * @param {String} html An HTML string.
 * @returns {HTMLElement}
 * @author Loren Goodwin
 */
export function htmlToElement(html)
{
	const template = document.createElement("template");

	template.innerHTML = html.trim();

	return template.content.firstChild;
}

/**
 * Removes all child elements from the given element.
 * 
 * @param {HTMLElement} element An element to remove children from.
 * @returns {Number}
 * @author Loren Goodwin
 */
export function removeAllChildren(element)
{
	let numberRemoved = 0;

	while (element.lastChild)
	{
		element.lastChild.remove();

		numberRemoved += 1;
	}

	return numberRemoved;
}