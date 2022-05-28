import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";


const createSpecificationUseCase = new CreateSpecificationUseCase(
    new SpecificationsRepository());

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
)

export { createSpecificationController }