import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

class CreateCategoryUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute(description: string, name: string){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }
        this.categoriesRepository.create({name, description});
    }
}
export { CreateCategoryUseCase };