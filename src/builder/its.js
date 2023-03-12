
function id(id) {
    return `@id='${id}'`;
};

function text(text) {
    return `.//text()='${text}'`;
};

function cssClass(name) {
    return `contains(concat(' ', normalize-space(@class), ' '), ' ${name} ')`;
};

export default {
    id,
    text,
    cssClass
};
