import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/implementations/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository){}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parsefile = parse({});

            stream.pipe(parsefile);
            
            parsefile
                .on('data', async (line) =>{
                    const [ name, description ] = line;
                    categories.push({
                        name, 
                        description,
                     });
                });
            parsefile
                .on('end', () => {
                    fs.promises.unlink(file.path)
                    resolve(categories);
                });
            parsefile
                .on('error', (err) => {
                    reject(err);
                });
            })
    }

    async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.loadCategories(file);
        categories.map(async category => {
            const { name, description } = category;
            const existCategory = this.categoriesRepository.findByName(name);

            if(!existCategory){
                this.categoriesRepository.create({
                    name, 
                    description,
                });
            };
        });
    };
};

export { ImportCategoryUseCase }