import { useState } from "react";
import SanitizeInputs from "@/utils/sanitizeInputs";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  interface Errors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }

const useContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      const [errors, setErrors] = useState<Errors>({});
      const [loading, setLoading] = useState(false);
    
      const onHandleInput = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});
    
        const sanitizedEmail = formData.email.toLowerCase();
        const sanitizedName = formData.name.trim();
        const sanitizedSubject = formData.subject.trim();
        const sanitizedMessage = formData.message.trim();
    
        const errors = {};
        SanitizeInputs(
          sanitizedEmail,
          sanitizedName,
          sanitizedSubject,
          sanitizedMessage,
          errors
        );
    
        if (Object.keys(errors).length > 0) {
          setErrors(errors);
          setLoading(false);
          return;
        }
    
        if (!formData.name || !formData.email || !formData.message) {
          setLoading(false);
          toast.error("All fields required.");
          return;
        }
    
        // sign up on emailjs.com (select the gmail service and connect your account).
        //click on create a new template then click on save.
        emailjs
          .send(
            "service_rughb4c", // paste your ServiceID here (you'll get one when your service is created).
            "template_e845x3c", // paste your TemplateID here (you'll find it under email templates).
            {
              from_name: formData.name,
              to_name: "Milan Stanojevic", // put your name here.
              from_email: formData.email,
              to_email: "stanojevicmilan17@yahoo.com", //put your email here.
              subject: formData.subject,
              message: formData.message,
            },
            "EiHO7Y6N70Cc4MwEG" //paste your Public Key here. You'll get it in your profile section.
          )
          .then(
            () => {
              setLoading(false);
              setErrors({});
              toast.success(
                "Thank you. I will get back to you as soon as possible."
              );
    
              setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.log(error);
              toast.error("Something went wrong. Please try again.");
            }
          );
      };
    
      return {
        formData,
        errors,
        loading,
        onHandleInput,
        handleSubmit,
      };
    };
    
    export default useContactForm;
