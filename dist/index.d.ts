declare enum Language {
    EN = "en",
    PT = "pt"
}
interface Color {
    label: {
        en: string;
        pt: string;
    };
    value: string;
}
interface Size {
    label: {
        en: string;
        pt: string;
    };
    value: string;
}
export declare function getColorsAndSizesByLanguage(language?: Language): {
    colors: (Omit<Color, "label"> & {
        label: string;
    })[];
    sizes: (Omit<Size, "label"> & {
        label: string;
    })[];
};
export {};
