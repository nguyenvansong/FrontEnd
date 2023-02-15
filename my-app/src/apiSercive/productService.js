import * as request from '../utils/request';
export const getAllProduct = async () => {
    try {
        const res = await request.get('product/getAll');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getImageByProductId = async (id) => {
    try {
        const res = await request.get('image/productid/',{
            params:{
                id
            }
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};