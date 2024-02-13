
export function convertFormDataToJson(e) {
    const formData = new FormData(e.target)
    const json = JSON.stringify(Object.fromEntries(formData));
    return json

}
