export default {
    editor: {
        label: {
            en: 'Text',
            fr: 'Texte',
        },
        icon: 'type',
        menuOptions: {
            quick: {
                sections: ['tag', 'font'],
                bind: [{ prop: 'text', label: { en: 'Bind text' } }],
            },
        },
        infoTag: content => ({
            color: 'var(--ww-color-blue-500)',
            backgroundColor: 'var(--ww-color-blue-100)',
            text: content.tag === 'button' ? 'BTN' : content.tag && content.tag.toUpperCase(),
            action: () => {
                wwLib.wwSearchBar.executeAction({
                    actions: wwLib.wwSearchBar.getEditSidebarActions('settings', 'custom-0'),
                });
            },
        }),
    },
    options: {
        lazyHydrate: true,
    },
    properties: {
        text: {
            label: {
                en: 'Text',
                fr: 'Texte',
            },
            type: 'Info',
            options: {
                text: { en: 'Click text to edit' },
            },
            bindable: true,
            multiLang: true,
            defaultValue: {
                en: 'New text',
            },
        },
        font: {
            label: {
                en: 'Typography',
                fr: 'Typography',
            },
            type: 'Typography',
            options: content => ({
                initialValue: {
                    fontSize: content.fontSize,
                    fontFamily: content.fontFamily,
                    fontWeight: content.fontWeight,
                    lineHeight: content.lineHeight,
                },
            }),
            responsive: true,
            states: true,
        },
        fontSize: {
            label: {
                en: 'Size',
                fr: 'Taille',
            },
            type: 'Length',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 1, max: 100 }],
            },
            responsive: true,
            states: true,
            hidden: content => content.font,
            defaultValue: '16px',
        },
        fontFamily: {
            label: {
                en: 'Font family',
                fr: 'Font',
            },
            type: 'FontFamily',
            responsive: true,
            states: true,
            hidden: content => content.font,
        },
        fontWeight: {
            label: {
                en: 'Font weight',
                fr: 'Graisse',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: null, label: { en: 'Default', fr: 'Par défaut' } },
                    { value: 100, label: { en: '100 - Thin' } },
                    { value: 200, label: { en: '200 - Extra Light' } },
                    { value: 300, label: { en: '300 - Light' } },
                    { value: 400, label: { en: '400 - Normal' } },
                    { value: 500, label: { en: '500 - Medium' } },
                    { value: 600, label: { en: '600 - Semi Bold' } },
                    { value: 700, label: { en: '700 - Bold' } },
                    { value: 800, label: { en: '800 - Extra Bold' } },
                    { value: 900, label: { en: '900 - Black' } },
                ],
            },
            responsive: true,
            states: true,
            hidden: content => content.font,
        },
        lineHeight: {
            label: {
                en: 'Line height',
                fr: 'Hauteur de ligne',
            },
            type: 'Length',
            options: {
                unitChoices: [
                    { value: 'px', label: 'px', min: 0, max: 100 },
                    { value: '%', label: '%', min: 0, max: 100 },
                    { value: 'em', label: 'em', min: 0, max: 100 },
                    { value: 'normal', label: 'auto', default: true },
                ],
            },
            responsive: true,
            states: true,
            hidden: content => content.font,
        },
        textAlign: {
            label: {
                en: 'Alignement',
                fr: 'Alignement',
            },
            type: 'TextRadioGroup',
            options: {
                choices: [
                    {
                        value: 'left',
                        default: true,
                        title: { en: 'Left', fr: 'Gauche' },
                        icon: 'text-align-left',
                    },
                    { value: 'center', title: { en: 'Center', fr: 'Milieu' }, icon: 'text-align-center' },
                    { value: 'right', title: { en: 'Right', fr: 'Droite' }, icon: 'text-align-right' },
                    {
                        value: 'justify',
                        title: { en: 'Justify', fr: 'Justifié' },
                        icon: 'text-align-justify',
                    },
                ],
            },
            responsive: true,
        },
        color: {
            label: {
                en: 'Text color',
                fr: 'Couleur du texte',
            },
            type: 'Color',
            options: {
                nullable: true,
            },
            bindable: true,
            responsive: true,
            states: true,
        },
        backgroundColor: {
            label: {
                en: 'Text Background',
                fr: 'Background du Texte',
            },
            type: 'Color',
            options: {
                nullable: true,
            },
            bindable: true,
            responsive: true,
            states: true,
        },
        textTransform: {
            label: {
                en: 'Character case',
                fr: 'Character case',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: null, label: 'none' },
                    { value: 'capitalize', label: 'Capitalize' },
                    { value: 'uppercase', label: 'UPPERCASE' },
                    { value: 'lowercase', label: 'lowercase' },
                    { value: 'lowercase', label: 'lowercase' },
                ],
            },
            responsive: true,
            states: true,
        },
        textShadow: {
            label: {
                en: 'Text Shadows',
                fr: 'Ombres du texte',
            },
            type: 'Shadows',
            options: {
                isText: true,
            },
            responsive: true,
            states: true,
        },
        wordSpacing: {
            label: {
                en: 'Word spacing',
                fr: 'Espacement des mots',
            },
            type: 'Length',
            options: {
                unitChoices: [{ value: 'px', label: 'px', min: 0, max: 100 }],
            },
            responsive: true,
            states: true,
        },
        tag: {
            label: {
                en: 'Html tag',
                fr: 'Tag html',
            },
            section: 'settings',
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'p', label: 'P' },
                    { value: 'h1', label: 'H1' },
                    { value: 'h2', label: 'H2' },
                    { value: 'h3', label: 'H3' },
                    { value: 'h4', label: 'H4' },
                    { value: 'button', label: 'Button' },
                    { value: 'a', label: 'A' },
                    { value: 'div', label: 'Div' },
                ],
            },
            defaultValue: 'p',
        },
        links: {
            hidden: true,
        },
    },
};
