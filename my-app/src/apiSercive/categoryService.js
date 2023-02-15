import * as request from '../utils/request';

export const getAllProduct = async () => {
    try {
        const res = await request.get('category/getAll');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};