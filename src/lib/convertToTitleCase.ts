export const convertToTitleCase = (text: string): string => {
    return text
        ?.replace(/_/g, ' ')
        ?.replace(/\b\w/g, (char) => char.toUpperCase());
};
