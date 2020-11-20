import HelloWorld from './HelloWorld';
import HelloWorld2 from './HelloWorld2';

let PageRouter = [
  {
    path: 'hello2',
    name: 'HelloWorld2',
    component: HelloWorld2
  },
  {
    path: 'hello',
    name: 'HelloWorld',
    component: HelloWorld
  }
];
export default PageRouter;
