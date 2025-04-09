function validateForm(data) {
  const errors = [];

  if (!data.name) errors.push("Name is required.");

  if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
    errors.push("Valid email is required.");

  if (data.age <= 18) errors.push("Age must be over 18.");

  return errors.length ? errors : "Validation successful!";
}

console.log(validateForm({ name: "John", email: "", age: 17 }));
console.log(validateForm({ name: "John", email: "John@gmail", age: 18 }));
console.log(validateForm({ name: "John", email: "John@gmail.com", age: 19 }));
