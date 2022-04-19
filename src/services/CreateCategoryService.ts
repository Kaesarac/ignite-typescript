import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryService{
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({description, name}: IRequest){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(!categoryAlreadyExists){
            this.categoriesRepository.create({name, description});
            throw new Error ("Category already exists!");
        }
    }
}
export { CreateCategoryService };