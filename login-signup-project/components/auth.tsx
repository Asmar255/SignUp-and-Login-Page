// Type Definition
export interface User {
  name: string;
  email: string;
  password: string;
}

// Initial Data
export const User_Data: User[] = [
  { name: 'John Doe', email: 'user@example.com', password: 'password123' },
  { name: 'Henry Diaz', email: 'hello@example.com', password: 'password123' },
];

// Login Function
export const loginUser = (email: string, password: string) => {
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedPassword = password.trim(); // Do not convert passwords to lowercase

  const findUser = User_Data.find(
    (user) =>
      user.email.trim().toLowerCase() === trimmedEmail &&
      user.password.trim() === trimmedPassword
  );

  if (findUser) {
    return {
      success: true,
      message: `Welcome Back, ${findUser.name}!`,
      user: findUser,
    };
  }

  return {
    success: false,
    message: 'Invalid email or password',
  };
};

// Signup Function
export const regUser = (name: string, email: string, password: string) => {
  const trimmedName = name.trim();
  const trimmedPassword = password.trim();
  const trimmedEmail = email.trim().toLowerCase();

  const userExist = User_Data.find(
    (user) => user.email.trim().toLowerCase() === trimmedEmail
  );

  if (userExist) {
    return {
      success: false,
      message: 'User with this email already exists',
    };
  }

  const newUser: User = {
    name: trimmedName,
    email: trimmedEmail,
    password: trimmedPassword,
  };

  User_Data.push(newUser);

  return {
    success: true,
    message: 'Account created successfully',
    user: newUser,
  };
};