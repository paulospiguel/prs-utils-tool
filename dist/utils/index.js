const colors = [
    { label: { en: "Red", pt: "Vermelho" }, value: "red" },
    { label: { en: "Green", pt: "Verde" }, value: "green" },
    { label: { en: "Blue", pt: "Azul" }, value: "blue" },
    { label: { en: "Yellow", pt: "Amarelo" }, value: "yellow" },
    { label: { en: "Black", pt: "Preto" }, value: "black" },
    { label: { en: "White", pt: "Branco" }, value: "white" },
    { label: { en: "Pink", pt: "Rosa" }, value: "pink" },
    { label: { en: "Purple", pt: "Roxo" }, value: "purple" },
    { label: { en: "Orange", pt: "Laranja" }, value: "orange" },
    { label: { en: "Brown", pt: "Marrom" }, value: "brown" },
    { label: { en: "Gray", pt: "Cinza" }, value: "gray" },
    { label: { en: "Beige", pt: "Bege" }, value: "beige" },
    { label: { en: "Gold", pt: "Dourado" }, value: "gold" },
    { label: { en: "Silver", pt: "Prateado" }, value: "silver" },
];
const sizes = [
    { label: { en: "Extra Small", pt: "XS" }, value: "xsmall" },
    { label: { en: "Small", pt: "S" }, value: "small" },
    { label: { en: "Medium", pt: "M" }, value: "medium" },
    { label: { en: "Large", pt: "L" }, value: "large" },
    { label: { en: "Extra Large", pt: "XL" }, value: "xlarge" },
    { label: { en: "Double Extra Large", pt: "2XL" }, value: "2xlarge" },
];
export function getColorsAndSizesByLanguage(language) {
    const lang = language || "en";
    return {
        colors: colors.map((color) => ({
            label: color.label[lang],
            value: color.value,
        })),
        sizes: sizes.map((size) => ({
            label: size.label[lang],
            value: size.value,
        })),
    };
}
