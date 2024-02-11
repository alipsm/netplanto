export const useFormValidation = () => {
  const getValidation = (
    data
  )=> {
    var checkedStatusItems = [];
    // const objFormData = Object.fromEntries(form.entries());
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        checkedStatusItems.push(key);
        const element = `${data[key]}`;
        const resultValidation = validation(key, [element]);
        if (!resultValidation.status) {
          return {
            status: resultValidation.status,
            message: resultValidation.message,
            field: key,
          };
        }
      }
    }
    return {
      status: true,
      message: `Validation was done for: ${checkedStatusItems.join(" , ")}`,
      field: "",
    };
  };

  return { getValidation };
};

export default useFormValidation;

const validation = (
  type,
  value
)=> {
  var CHECK = true;
  var message = "h";

  switch (type) {
    case "username":
      CHECK = value[0]?.length >= 5 ? true : false;
      if (!CHECK) {
        message = "Username must be more than 5 characters";
      }
      break;
    case "email":
      let email = /\S+@\S+\.\S+/;
      CHECK = email.test(value[0]);
      if (!CHECK) {
        message = "Email format is incorrect";
      }
      break;
    case "password":
      CHECK = true;
      const checkLenghtPass = new RegExp("(?=.{6,})"); //check lenght pass
      if (!checkLenghtPass.test(value[0])) {
        CHECK = false;
        message = "Password must be more than 8 characters.";
      }
      break;

    // for articles
    case "title":
      CHECK = value[0]?.length >= 3 ? true : false;
      if (!CHECK) {
        message = "Title must be more than 3 characters";
      }
      break;
    case "description":
      CHECK = value[0]?.length >= 10 ? true : false;
      if (!CHECK) {
        message = "Description must be more than 10 characters";
      }
      break;
      case "body":
      CHECK = value[0]?.length >= 10 ? true : false;
      if (!CHECK) {
        message = "Body must be more than 10 characters";
      }
      break;

    case "g-recaptcha-response":
      CHECK = value[0]?.length >= 5 ? true : false;
      if (!CHECK) {
        message = "Please complete the Recaptcha";
      }
      break;
    default:
      break;
  }
  return { status: CHECK, message };
};
