import { Lesson } from '../../types';
import { variablesLesson } from './variables';
import { arrowFunctionsLesson } from './arrow-functions';
import { templateLiteralsLesson } from './template-literals';
import { destructuringLesson } from './destructuring';
import { spreadRestLesson } from './spread-rest';
import { enhancedObjectsLesson } from './enhanced-objects';
import { classesLesson } from './classes';
import { esModulesLesson } from './es-modules';
import { promisesAsyncLesson } from './promises-async';
import { arrayMethodsLesson } from './array-methods';

export const jsLessons: Lesson[] = [
  variablesLesson,
  arrowFunctionsLesson,
  templateLiteralsLesson,
  destructuringLesson,
  spreadRestLesson,
  enhancedObjectsLesson,
  classesLesson,
  esModulesLesson,
  promisesAsyncLesson,
  arrayMethodsLesson
];

export default jsLessons;