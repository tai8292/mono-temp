"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToSnakeCase = exports.stripHtml = void 0;
const stripHtml = (value) => {
    if (!value)
        return value;
    let text = value;
    text = text.replace(/\n/gi, "");
    text = text.replace(/<style([\s\S]*?)<\/style>/gi, "");
    text = text.replace(/<script([\s\S]*?)<\/script>/gi, "");
    text = text.replace(/<a.*?href="(.*?)[\?\"].*?>(.*?)<\/a.*?>/gi, " $2 $1 ");
    text = text.replace(/<\/div>/gi, "\n\n");
    text = text.replace(/<\/li>/gi, "\n");
    text = text.replace(/<li.*?>/gi, "  *  ");
    text = text.replace(/<\/ul>/gi, "\n\n");
    text = text.replace(/<\/p>/gi, "\n\n");
    text = text.replace(/<br\s*[\/]?>/gi, "\n");
    text = text.replace(/<[^>]+>/gi, "");
    text = text.replace(/^\s*/gim, "");
    text = text.replace(/ ,/gi, ",");
    text = text.replace(/ +/gi, " ");
    text = text.replace(/\n+/gi, "\n\n");
    return text;
};
exports.stripHtml = stripHtml;
const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
exports.camelToSnakeCase = camelToSnakeCase;
