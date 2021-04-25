import * as yup from 'yup'


export function schema(type) {
    if (type === 'faculty') {
        return yup.object().shape({
            faculty: yup.string().required().trim().max(12),

        })
    }

    if (type === 'group') {
        return yup.object().shape({
            faculty: yup.string().required().trim().max(12),
            group: yup.string().required().trim().max(12)
        })
    }

}