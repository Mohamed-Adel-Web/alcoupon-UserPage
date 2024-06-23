"use client"
import React, { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "flag-icons/css/flag-icons.min.css";
import { userType } from "@/app/types";
import { useRouter } from "next/navigation";
import useUserData from "@/app/FetchData/useRegisterUser";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#F4AE5A",
    },
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "black",
    },
  },
});

interface FormErrors {
  email?: string;
  phoneNumber?: string;
  backend?: string;
}

interface UserRegisterProps {
  lang: "en" | "ar";
}

const translations = {
  en: {
    title: "Get exclusive offers delivered to your inbox",
    email: "Email",
    phoneNumber: "Phone number",
    subscribe: "Subscribe Now",
    emailError: "Enter a valid email",
    phoneNumberError: "Enter a valid phone number",
  },
  ar: {
    title: "احصل على عروض حصرية في بريدك الوارد",
    email: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    subscribe: "اشترك الآن",
    emailError: "أدخل بريد إلكتروني صحيح",
    phoneNumberError: "أدخل رقم هاتف صحيح",
  },
};

const UserRegister: React.FC<UserRegisterProps> = ({ lang }) => {
  const router = useRouter();
  const [formValues, setFormValues] = useState<userType>({
    email: "",
    phone_number: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phoneNumber.replace(/\D/g, ""));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phone_number: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let errors: FormErrors = {};

    if (!validateEmail(formValues.email)) {
      errors.email = translations[lang].emailError;
    }

    if (!validatePhoneNumber(formValues.phone_number)) {
      errors.phoneNumber = translations[lang].phoneNumberError;
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formValues);

      const response = await useUserData(formValues);
      if (response.isSuccess) {
        router.push(`/thank-you?lang=${lang}`);
      } else {
        setFormErrors({ backend: response.errorMessage });
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem 2rem",
        margin: "1rem 0",
        border: "1px solid #dddddd",
        textAlign: "start",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>
        {translations[lang].title}
      </Typography>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          id="email"
          name="email"
          label={translations[lang].email}
          variant="outlined"
          type="email"
          fullWidth
          sx={{ margin: "2rem 0" }}
          value={formValues.email}
          onChange={handleChange}
          error={!!formErrors.email}
          dir="ltr"
          helperText={formErrors.email}
        />
        <Box sx={{ direction: "ltr !important" }}>
          <PhoneInput
            country={"sa"}
            value={formValues.phone_number}
            onChange={handlePhoneChange}
            inputStyle={{ width: "100%", height: "56px" }}
            containerStyle={{ marginBottom: "2rem" }}
            onlyCountries={[
              "sa",
              "ae",
              "eg",
              "jo",
              "lb",
              "kw",
              "om",
              "qa",
              "bh",
            ]}
            inputProps={{
              name: "phoneNumber",
              required: true,
              autoFocus: false,
            }}
            isValid={(inputNumber: string, country: any, countries: any) => {
              const countryObj = countries.find(
                (c: any) => c.iso2 === country.iso2
              );
              return (
                countryObj &&
                countryObj.dialCode.length + inputNumber.length <= 15
              );
            }}
          />
        </Box>
        <Typography variant="body2" color="error">
          {formErrors.phoneNumber}
        </Typography>
        <Typography variant="body2" color="error">
          {formErrors.backend}
        </Typography>
        <Button
          style={{
            padding: "1rem 4rem",
            width: "fit-content",
            background:
              "linear-gradient(90deg, rgba(242,19,20,0.6895133053221288) 29%, rgba(244,147,30,0.7175245098039216) 72%)",
            textDecoration: "none",
            color: "Black",
            fontWeight: "bold",
            borderRadius: "2rem",
            margin: "1rem auto",
            display: "block",
          }}
          type="submit"
        >
          {translations[lang].subscribe}
        </Button>
      </form>
    </Box>
  );
};

export default UserRegister;
