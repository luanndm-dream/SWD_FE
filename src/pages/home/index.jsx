import Header from '../../components/Header/index'
import Sidebar from '../../components/Sidebar/index'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosClient } from '../../lib/api/axiosClient';
const Home = () => {

    const checkoutSchema = yup.object().shape({
        packageid: yup.string().required("required"),
        weight: yup.string().required("required"),
        price: yup.string().required("required"),
        contact: yup.string().required("required"),
    });
    const initialValues = {
        packageid: "",
        image: null,
        weight: "",
        price: "",
        note: "",
        contact: "",
    };

    const [dataPackage, setDataPackage] = useState("")
    const [uploadImage, setUploadImage] = useState(null);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const [error, setError] = useState(null);

    const handleFormSubmit = async (values) => {
        values.preventDefault()
        console.log(uploadImage, "image")
        let formData = new FormData();

        // Thêm từng trường dữ liệu vào formData
        formData.append('packageid', values.packageid);
        formData.append('image', uploadImage);
        formData.append('weight', values.weight);
        formData.append('price', values.price);
        formData.append('note', values.note);
        formData.append('contact', values.contact);

        axios.post(`https://busdeliveryapi.azurewebsites.net/Api/V1/Order`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(response => {
                alert("Data Added Successfully!")
                window.location.reload();
            })
            .catch(error => {
                console.log(error.response, "error")
            });
    };

    useEffect(() => {
        axiosClient.get(`Api/V1/Package?pageIndex=1&pageSize=10`)
            .then(res => {
                setDataPackage(res.data.data.items);
                console.log(res.data.data.items, "data package")
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='h-screen w-full' style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div className='flex-grow flex'>
                <Sidebar />
                <Box m="20px">
                    <Typography variant="h4" gutterBottom>
                        Tạo đơn hàng mới
                    </Typography>
                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={checkoutSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Box
                                    display="grid"
                                    gap="30px"
                                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                    sx={{
                                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                    }}
                                >
                                    <FormControl sx={{ gridColumn: "span 4" }}>
                                        <InputLabel id="packageid">Gói hàng</InputLabel>
                                        <Select
                                            labelId="packageid"
                                            id="packageid"
                                            value={values.packageid} // Set the value here
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            fullWidth
                                            label="Gói hàng"
                                            name="packageid"
                                            error={!!touched.packageid && !!errors.packageid}
                                            helperText={touched.packageid && errors.packageid}
                                        >
                                            {dataPackage && dataPackage.map(datapackage => (
                                                <MenuItem key={datapackage.id} value={datapackage.id}>{datapackage.id}</MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                    {/* <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Mã Gói Hàng"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.packageid}
                                        name="packageid"
                                        error={!!touched.packageid && !!errors.packageid}
                                        helperText={touched.packageid && errors.packageid}
                                        sx={{ gridColumn: "span 4" }}
                                    /> */}
                                    <TextField
                                        fullWidth
                                        type="file"
                                        onBlur={handleBlur}
                                        onChange={e => {
                                            setUploadImage(e.target.files[0])
                                        }}
                                        value={values.image}
                                        name="image"
                                        error={!!touched.image && !!errors.image}
                                        helperText={touched.image && errors.image}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        label="Cân nặng"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.weight}
                                        name="weight"
                                        error={!!touched.weight && !!errors.weight}
                                        helperText={touched.weight && errors.weight}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="number"
                                        label="Giá tiền"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.price}
                                        name="price"
                                        error={!!touched.price && !!errors.price}
                                        helperText={touched.price && errors.price}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Lưu ý"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.note}
                                        name="note"
                                        error={!!touched.note && !!errors.note}
                                        helperText={touched.note && errors.note}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Liên hệ "
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.contact}
                                        name="contact"
                                        error={!!touched.contact && !!errors.contact}
                                        helperText={touched.contact && errors.contact}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                </Box>
                                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button type="submit" color="primary" variant="contained">
                                        Tạo Đơn Hàng Mới
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>



            </div>
        </div>
    );
}

export default Home;