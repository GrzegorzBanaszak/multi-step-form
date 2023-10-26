import { z } from "zod";

const phoneReg = new RegExp(
  "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
);

export const UserSchema = z.object({
  username: z.string().min(1),
  email: z.string().min(1).email(),
  phoneNumber: z
    .string()
    .min(1)
    .refine((value) => phoneReg.test(value), "Invalid phone number"),
});

export type UserDataError = {
  usernameError: boolean;
  emailError: boolean;
  phoneNumberError: boolean;
};

export type User = z.infer<typeof UserSchema>;
