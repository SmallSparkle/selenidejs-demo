function hasCssClass(cssClass) {
    return 'contains(concat(" ", normalize-space(@class), " "), " ' + cssClass + ' ")';
};

export default {
    hasCssClass 
};
