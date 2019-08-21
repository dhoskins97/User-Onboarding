import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';

function FormComponent( { values, errors, touched } ) {
    return (
            <Form>
                <div>
                    <Field type="text" name="name" placeholder="Name" />
                    {touched.name && errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <Field type="email" name="email" placeholder="Email Address" />
                    {touched.email && errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label>
                        <Field type="checkbox" name="tos" checked={values.tos} />
                        {touched.tos && errors.tos && <p>{errors.tos}</p>}
                        Accept TOS
                    </label>
                </div>

                <button>Submit</button>
            </Form>
    )
}

const FormikFormComponent = withFormik({
    mapPropsToValues({ name, email, password, tos}) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || false
        };
    },

    validationSchema: yup.object().shape({
        name: yup.string().required("This field is required."),
        email: yup.string().email("Invalid email.").required("This field is required."),
        password: yup.string().min(6, "Password must be 6 or more characters.").required("This field is required."),
    }),

    handleSubmit(values){
        console.log(values)
    }

})(FormComponent)

export default FormikFormComponent;