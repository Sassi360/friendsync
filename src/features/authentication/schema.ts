import { create, enforce, test } from "vest";

export const schema = create((data = {}) => {
  test("email", "Email is required", () => {
    enforce(data.email).isNotBlank();
  });
  test("password", "Password is required", () => {
    enforce(data.email).isNotBlank();
  });
});
