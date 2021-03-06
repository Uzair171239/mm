import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    cattegory_name: Yup.string().required('Category is required'),
    google_cattegory: Yup.string().required('Google Category is required'),
    title: Yup.string().required('Title is required'),
    color: Yup.string().required('Color is required'),
    size: Yup.string().required('Size is required'),
    delivery_charges: Yup.string().required('Delivery Charges is required'),
    quantity: Yup.string().required('Quantity is required'),
    quantity_text: Yup.string().required('Quantity Text is required'),
    fake_order_sold: Yup.string().required('Fake Order Sold is required'),
    description: Yup.string().required('Description is required'),
    status: Yup.string().required('Status is required'),
});

export default validationSchema;