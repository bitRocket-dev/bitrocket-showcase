/** @format */

export const utilityGetInitials = (fullName: string): string => {
  const fullNameFormatted = fullName.split(' ');
  const firstName = fullNameFormatted[0];
  const lastName = fullNameFormatted[1];
  const initialCharName = firstName ? firstName.charAt(0) : '';
  const initialCharLastName = lastName ? lastName.charAt(0) : '';

  return `${initialCharName.toUpperCase()}${initialCharLastName.toUpperCase()}`;
};
