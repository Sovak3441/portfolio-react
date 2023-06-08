import tw from 'twin.macro';

const FormWrapper = tw.div`w-full lg:w-1/2 mx-auto`;
const Form = tw.form`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`;
const FormTitle = tw.h2`text-2xl text-center font-bold mb-6`;
const FormGroup = tw.div`mb-4`;
const Label = tw.label`block text-gray-700 text-sm font-bold mb-2`;
const Input = tw.input`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline`;
const InputError = tw.span`hidden w-full justify-center text-sm text-error`;
const FormError = tw.span`hidden w-full text-sm text-center text-error`;
const TextArea = tw.textarea`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline`;
const Button = tw.button`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none disabled:bg-dark`;

const ContactForm = () => {
  const handleValidation = (element) => {
    const submitButton = document.querySelector("#submitButton");
    const InputNameError = document.querySelector("#nameError");
    const InputEmailError = document.querySelector("#emailError");
    const InputMessageError = document.querySelector("#messageError");
    const currField = element.target.id;
    const currValue = element.target.value;

    const validMail = (address) => {
      return String(address)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    switch (currField) {
      case "name":
        if (currValue.length < 5) {
          InputNameError.textContent = "Name must be atleast 5 characters";
          InputNameError.style.display = "flex";
          submitButton.disabled = true;
        } else {
          InputNameError.style.display = "none";
          InputNameError.textContent = "";
          submitButton.disabled = false;
        }
        break;
      case "email":
        if (!validMail(currValue)) {
          InputEmailError.textContent = "Please provide an valid e-mail";
          InputEmailError.style.display = "flex";
          submitButton.disabled = true;
        } else {
          InputEmailError.style.display = "none";
          InputEmailError.textContent = "";
          submitButton.disabled = false;
        }
        break;
      case "message":
        if (currValue.length < 35) {
          InputMessageError.textContent = "Message must be atleast 25 characters";
          InputMessageError.style.display = "flex";
          submitButton.disabled = true;
        } else {
          InputMessageError.style.display = "flex";
          InputMessageError.textContent = "";
          submitButton.disabled = false;
        }
        break;
      default:

        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitButton = document.querySelector("#submitButton");
    const ContactForm = document.querySelector("#contact_form");
    submitButton.disabled = true;
    const InputName = document.querySelector("#name");
    const InputEmail = document.querySelector("#email");
    const InputMessage = document.querySelector("#message");

    const FormSubmitError = document.querySelector("#formError");
    // TODO - Fix Validation Handler
    if(InputName.value === "" || InputEmail.value === "" || InputMessage.value === "") {
      FormSubmitError.textContent = "Please fill out all fields";
      FormSubmitError.style.display = "flex";
      submitButton.disabled = false;
    } else {
      FormSubmitError.style.display = "none";
      FormSubmitError.textContent = "";
      ContactForm.reset();
    }
  };

  return (
    <FormWrapper>
      <Form id="contact_form" onSubmit={handleSubmit}>
        <FormTitle>Send E-mail</FormTitle>
        <FormError id="formError"></FormError>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input onChange={handleValidation} type="text" id="name" placeholder="Enter your name"/>
          <InputError id="nameError"></InputError>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input onChange={handleValidation} type="email" id="email" placeholder="Enter your email"/>
          <InputError id="emailError"></InputError>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea onChange={handleValidation} id="message" rows="4" placeholder="Enter your message"></TextArea>
          <InputError id="messageError"></InputError>
        </FormGroup>
        <Button id="submitButton" type="submit">Submit</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
