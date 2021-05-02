import * as yup from 'yup'


export function schema(type) {
  if (type === "faculty") {
    return yup.object().shape({
      faculty: yup.string().required().trim().max(12).min(3),
    });
  }

  if (type === "group") {
    return yup.object().shape({
      faculty: yup.string().required().trim().max(12).min(3),
      group: yup.string().required().trim().max(12).min(3),
    });
  }
  if (type === "student") {
    return yup.object().shape({
      firstName: yup.string().required().trim().max(12).min(3),
      lastName: yup.string().required().trim().max(12).min(3),
      email: yup.string().required().trim().max(20).min(3).email('Invalid email'),
      phone: yup.string().required().trim().max(12).min(3).matches(/^\d+$/),
      faculty: yup.string().required().trim().max(12).min(3),
      group: yup.string().required().trim().max(12).min(3),
    });
  }

}