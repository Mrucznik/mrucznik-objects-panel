import * as yup from 'yup';

yup.setLocale({
    mixed: {
        default: 'Niepoprawne dane!',
        required: 'Pole wymagane!',
        notType: 'Niepoprawne dane!'
    },
    string: {
        // eslint-disable-next-line no-template-curly-in-string
        min: "Pole musi posiadać co najmniej ${min} znaków",
        // eslint-disable-next-line no-template-curly-in-string
        max: "Pole musi posiadać nie więcej niż ${max} znaków",
    }
});

export default yup;