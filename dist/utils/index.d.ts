type Language = "en" | "pt";
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
export interface Option extends Omit<Color, "label">, Omit<Size, "label"> {
    label: string;
}
export declare function getColorsAndSizesByLanguage(language?: Language): {
    colors: Option[];
    sizes: Option[];
};
export {};
