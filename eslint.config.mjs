import {fixupConfigRules} from "@eslint/compat";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactJsx from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import ts from "typescript-eslint";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default [
    {languageOptions: {globals: globals.browser}},
    js.configs.recommended,
    ...ts.configs.recommended,
    ...pluginQuery.configs["flat/recommended"],
    ...fixupConfigRules([
        {
            ...react,
            settings: {
                react: {version: "detect"}
            }
        },
        reactJsx
    ]),
    {
        plugins: {
            "react-hooks": reactHooks
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-empty": "off",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unsafe-function-type": "off",
            "no-debugger": "off"
        }
    },
    {ignores: ["dist/"]}
];
