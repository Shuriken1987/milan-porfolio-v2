import { toast } from "react-toastify";

interface Errors {
  email?: string;
  name?: string;
  subject?: string;
  message?: string;
}

const SanitizeInputs = (
  sanitizedEmail: string,
  sanitizedName: string,
  sanitizedSubject: string,
  sanitizedMessage: string,
  errors: Errors
) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Allow only letters and spaces, between 2 and 50 characters
  const subjectRegex = /^[a-zA-Z0-9\s]{5,100}$/; // Allow letters, numbers, and spaces, between 5 and 100 characters
  const messageRegex = /^[a-zA-Z0-9\s]{5,500}$/; // Allow letters, numbers, and spaces, between 5 and 500 characters
  // Validate email input
  if (!sanitizedEmail) {
    errors.email = "Email is required";
    toast.error(errors.email);
  } else if (!emailRegex.test(sanitizedEmail)) {
    errors.email = "he email address is incorrect";
    toast.error(errors.email);
  }

  // Validate name input
  if (!sanitizedName) {
    errors.name = "Name is required";
    toast.error(errors.name);
  } else if (!nameRegex.test(sanitizedName)) {
    errors.name =
      "Name must contain only letters and spaces, between 2 and 50 characters";
    toast.error(errors.name);
  }

  // Validate subject input
  if (!sanitizedSubject) {
    errors.subject = "Subject is required";
    toast.error(errors.subject);
  } else if (!subjectRegex.test(sanitizedSubject)) {
    errors.subject =
      "Subject must contain only letters, numbers, and spaces, between 5 and 100 characters";
    toast.error(errors.subject);
  }

  // Validate message input
  if (!sanitizedMessage) {
    errors.message = "Message is required";
    toast.error(errors.message);
  } else if (!messageRegex.test(sanitizedMessage)) {
    errors.message = "The message must be between 10 and 500 characters";
    toast.error(errors.message);
  }
};

export default SanitizeInputs;
