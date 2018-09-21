import {fromObject} from "tns-core-modules/data/observable";
import {Page} from "tns-core-modules/ui/page";
import {TextField} from "tns-core-modules/ui/text-field";
// setting up the format for the TextField text
export function onNavigatingTo(args) {
    const page: Page = <Page> args.object;
    const dateConverter = {
        toView(value, format) {
            let result = format;
            const day = value.getDate();
            result = result.replace("DD", day < 10 ? `0${day}` : day);
            const month = value.getMonth() + 1;
            result = result.replace("MM", month < 10 ? `0${month}` : month);
            result = result.replace("YYYY", value.getFullYear());

            return result;
        },
        toModel(value, format) {
            const ddIndex = format.indexOf("DD");
            const day = parseInt(value.substr(ddIndex, 2), 10);
            const mmIndex = format.indexOf("MM");
            const month = parseInt(value.substr(mmIndex, 2), 10);
            const yyyyIndex = format.indexOf("YYYY");
            const year = parseInt(value.substr(yyyyIndex, 4), 10);
            const result = new Date(year, month - 1, day);

            return result;
        }
    };

    const vm = fromObject({
        dateConverter,
        dateFormat: "DD/MM/YYYY",
        testDate: new Date()
    });
    page.bindingContext = vm;
}
// >> textfield-handle-submit-event-ts
export function firstTfLoaded(args) {
    const firstTextfield: TextField = <TextField> args.object;
    setTimeout(() => {
        firstTextfield.focus(); // Shows the soft input method, ususally a soft keyboard.
    }, 100);
}

export function onReturnPress(args) {
    // returnPress event will be triggered when user submits a value
    const textField: TextField = <TextField> args.object;
    // Gets or sets the placeholder text.
    console.log(textField.hint);
    // Gets or sets the input text.
    console.log(textField.text);
    // Gets or sets the secure option (e.g. for passwords).
    console.log(textField.secure);

    // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
    console.log(textField.keyboardType);
    // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
    console.log(textField.returnKeyType);
    // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
    console.log(textField.autocapitalizationType);

    // Gets or sets a value indicating when the text property will be updated.
    console.log(textField.updateTextTrigger);
    // Gets or sets whether the instance is editable.
    console.log(textField.editable);
    // Enables or disables autocorrection.
    console.log(textField.autocorrect);
    // Limits input to a certain number of characters.
    console.log(textField.maxLength);

    setTimeout(() => {
        textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}

export function onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    console.log("onFocus event");
}

export function onBlur(args) {
    // blur event will be triggered when the user leaves the TextField
    const textField:TextField = <TextField> args.object;
    textField.dismissSoftInput();
    console.log("onBlur event");
}
// << textfield-handle-submit-event-ts
