function hasCssClass(name) {
    return `contains(concat(' ', normalize-space(@class), ' '), ' ${name} ')`;
};

export default {
    hasCssClass 
};
