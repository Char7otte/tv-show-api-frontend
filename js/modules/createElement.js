function createElement(type, parent, classList) {
    const element = document.createElement(type);

    if (classList) element.classList.add(...classList);
    parent.append(element);

    return element;
}

export { createElement };
