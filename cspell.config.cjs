/** @type { import("cspell").CSpellSettings } */
module.exports = {
    // $schema: "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
    name: "@falkor/falkor-cspell-config",
    version: "0.2",
    language: "en",
    validateDirectives: true,
    useGitignore: true,
    words: [
        // VSCode
        "endregion",
        // NPM
        "npmrc",
        "preinstall",
        "sourcemaps",
        // Git
        "difftool",
        "mergetool",
        "unstage",
        "unstaged",
        "deinit",
        "reflog",
        "oneline",
        "userconfig",
        "globalconfig",
        "codeql",
        "snyk",
        // Prettier
        "prettierrc",
        "parens",
        // ESLint
        "ruleset",
        "rulesets",
        // JSCC
        "jscc",
        "ifset",
        "ifnset",
        // JSDoc
        "jsdoc",
        // Falkor
        "falkor",
        "theonethread",
        "Bucsy",
        "pandoc"
    ],
    flagWords: [
        //cspell:ignore wtf
        "wtf"
    ],
    ignorePaths: []
};
