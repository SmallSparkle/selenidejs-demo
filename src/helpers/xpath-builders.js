export function findByCssClass(xpath, cssClass) {
    return xpath + '[contains(concat(" ", normalize-space(@class), " "), "' + cssClass + '")]';
};

export function findByNoCssClass(xpath, cssClass) {
    return xpath + '[not(contains(concat(" ", normalize-space(@class), " "), " ' + cssClass + ' "))]';
};
