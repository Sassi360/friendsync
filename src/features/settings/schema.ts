import { create, enforce, test } from "vest";

export const schema = create((data = {}) => {
  test("firstName", "First name is required", () => {
    enforce(data.firstName).isNotBlank();
  });

  test("lastName", "Last name is required", () => {
    enforce(data.lastName).isNotBlank();
  });

  test("email", "Email is required", () => {
    enforce(data.email).isNotBlank();
  });

  test("address", "Address is required", () => {
    enforce(data.address).isNotBlank();
  });

  test("city", "City is required", () => {
    enforce(data.city).isNotBlank();
  });

  test("province", "Province is required", () => {
    enforce(data.province).isNotBlank();
  });

  test("postalCode", "Postal code is required", () => {
    enforce(data.postalCode).isNotBlank();
  });
});
