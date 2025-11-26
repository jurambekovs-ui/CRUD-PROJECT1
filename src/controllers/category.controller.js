import Category from '../schemas/category.schema.js';
import { ApiError } from '../utils/custom-error.js';
import { successRes } from '../utils/success-response.js';
import { errorRes } from '../utils/error-response.js';

class CategoryController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const existsCategory = await Category.findOne({ name });
            if (existsCategory) {
                throw new ApiError('Category name already exists', 409);
            }
            const newCategory = await Category.create(req.body);
            return successRes(res, newCategory, 201);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findAll(_req, res) {
        try {
            const categories = await Category.find();
            return successRes(res, categories);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async findOne(req, res) {
        try {
            const category = await Category.findById(req.params?.id);
            if (!category) throw new ApiError('Category not found', 404);
            return successRes(res, category);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async update(req, res) {
        try {
            const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedCategory) throw new ApiError('Category not found', 404);
            return successRes(res, updatedCategory);
        } catch (error) {
            return errorRes(res, error);
        }
    }

    async remove(req, res) {
        try {
            const category = await Category.findById(req.params?.id);
            if (!category) throw new ApiError('Category not found', 404);
            await Category.findByIdAndDelete(req.params.id);
            return successRes(res, { message: "Category o'chirildi" });
        } catch (error) {
            return errorRes(res, error);
        }
    }
}

export default new CategoryController();