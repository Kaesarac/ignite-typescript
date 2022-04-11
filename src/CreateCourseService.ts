interface Course {
  name: string;
  duration?: number; //the ? before the : indicates that the parameter is optional.
  educator: string;
}

class CreateCourseService {
  execute(data: Course) {
    console.log(data.name, data.duration, data.educator);
  }
}
export default new CreateCourseService();
