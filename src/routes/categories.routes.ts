import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { CreateCategoryUseCase } from '../modules/cars/useCases/createCategory/CreateCategoryService';
import { listCategoriesController } from '../modules/cars/useCases/ListCategories';

const categoriesRoutes = Router();
const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.post("/", (req, res) => {
   return createCategoryController.handle(req, res);
})

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
})

export { categoriesRoutes };