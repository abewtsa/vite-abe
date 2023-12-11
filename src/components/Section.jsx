import Button from "../components/Button.jsx";
import Text from "../components/Text.jsx";
import Link from "./Link.jsx";

// add Button and Text component to Card so that it doesn't need to be called all the time

function Section({ header,textcopy,buttonClassName,buttonText,buttonFunc,buttonLink,linkClassName, link, linkText }) {

  return (
    
    <>
    <div className="container section-card">
      {/* {children} */}
      <Text 
      header={header} 
      textcopy={textcopy}
      />

      <Link 
      linkClassName={linkClassName}
      link={link}
      linkText={linkText}
      />

      <Button
        buttonClassName={buttonClassName}
        buttonText={buttonText}
        buttonFunc={buttonFunc}
        buttonLink={buttonLink}
      />

    </div>
    </>
  );
}

export default Section;

// import { TodoItem } from "./TodoItem"

// export function TodoList({ todos, toggleTodo, deleteTodo }){
//     return (
//     <ul className="list">
//     {todos.length === 0 && "No todos"}
    
//     {/* generate component and pass props to Component */}
//     {todos.map (todo =>{ 
//       return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
//     })}  
//   </ul>
//   )
// }