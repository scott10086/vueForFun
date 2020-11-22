import Basic1 from './basic-test/Basic1';
import HelloWorld from './router-test/HelloWorld';
import HelloWorld2 from './router-test/HelloWorld2';

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
  },
  {
    path: 'basic1',
    name: 'basic1',
    component: Basic1
  }

];
export default PageRouter;
