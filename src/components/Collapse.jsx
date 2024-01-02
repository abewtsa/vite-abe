import { useState } from "react";

    const accordion = [
      {
        name: "Consider",
        list: [
            "The user comes first.", 
            "Work on UX and UI simultaneously.", 
            "UI makes or breaks usability.", 
            "Always surpass expectations.", 
            "Design is not neutral.", 
            "Words matter.", 
            "Visual metaphors communicate fastest.", 
            "Attractive products are more usable.", 
            "People remember the unusual.", 
            "First and last items are remembered most.", 
            "Less is more.", 
            "Less is a bore.", 
            "Provide feedback quickly or else.", 
            "Friction isn't always bad.", 
            "First impressions matter.", 
            "UX design isn't timeless.", 
            "Nothing last forever." 
            ]
      },
      {
        name: "Empathize",
        list: [
            "Accessibility first.", 
            "Allow for differences in digital literacy.", 
            "Take extra care of seniors.", 
            "Children are not small adults.", 
            "Design for learnability.", 
            "Don't just design for novices.", 
            "Make the choice easy.", 
            "Diverse teams create better solutions.", 
            "Context matters more than screen size.", 
            "Design for clumsy handling.", 
            "Match the real world.", 
            "Know when to break with convention.", 
            "Persuade, don't coerce.", 
            "Design for passive attention.", 
            "Know the purpose.", 
            "Only interrupt when necessary.", 
            "Make notifications valuable.", 
            "Minimize form input.", 
            "Little time, little design.", 
            "Rules are meant to be broken."  
            ]
      },
      {
        name: "Define",
        list: [
            "Choose the right client.", 
            "Be a good detective.", 
            "Gather requirements.", 
            "Define the problem statement.", 
            "Find shortcuts.", 
            "Done is better than perfect.", 
            "Underpromise and overdeliver.", 
            "Introduce complexity only when necessary.", 
            "Some complexity cannot be reduced.", 
            "Imagine the user journey.", 
            "Create a user flow.", 
            "Remove barriers and obstacles.", 
            "What isn't there matters.", 
            "Pointing devices inform functionality." 
            ]
      },
      {
        name: "Research",
        list: [
            "Design cannot be fully objective.", 
            "Most of the science in design is bullshit.", 
            "Do just enough research.", 
            "Map the ecosystem.", 
            "Look at the data.", 
            "Not everything that counts can be counted.", 
            "Test for statistical generalizability.", 
            "Don't base personas on assumptions.", 
            "Keep your enemies close.", 
            "Learn from bad examples.", 
            "Make expectations work in your favor.", 
            "Uncover consensus and ambiguity." 
            ]
      },
      {
        name: "Design",
        list: [
            "Brainstorm efficiently. ",
            "Build consensus. ",
            "Learn from real-world navigation. ",
            "Build a logical structure. ",
            "Visualize the relationship between pages. ",
            "Don’t get gimmicky with navigation. ",
            "Yes, side doors matter. ",
            "Prime before presenting. ",
            "Move from low to high fidelity. ",
            "Don’t just illustrate, annotate. ",
            "Interaction design is the brand. ",
            "Bad typography leads to bad UX. ",
            "So you think you can scroll. ",
            "Animate responsibly. ",
            "Make data lovable. ",
            "Dark mode rises. ",
            "Never give total control. ",
            "Personalization is hit or miss. ",
            "A word is worth a thousand pictures. ",
            "Understand the sales funnel. ",
            "Target the right devices. ",
            "Systems are great for corporations. ",
            "Modularity is great for designers. ",
            "Expect the unexpected."
          ]
      },
      {
        name: "Validate",
        list: [
            "Voice assistants suck.",
            "Don't ask for unnecessary things. ",
            "Manage errors effectively. ",
            "Accept many inputs. ",
            "Confirm user actions. ",
            "Broken pages shouldn’t feel broken. ",
            "Fill the gap imagination can’t bridge. ",
            "Metric-based design is silly. ",
            "Most issues can be spotted a mile ahead. ",
            "Don’t grade your own homework. ",
            "Get the most bang for your buck. ",
            "Stay involved postlaunch. ",
            "Lower expectations for high satisfaction."
          ]
      }
    ];
    
    const AccordionList = () => {
        const [expandedStates, setExpandedStates] = useState(
          accordion.reduce((accordionSection, sectionName) => ({ ...accordionSection, [sectionName.name]: false }), {})
        );
      
        const toggleExpanded = (name) => {
          setExpandedStates((prevExpanded) => ({
            ...prevExpanded,
            [name]: !prevExpanded[name],
          }));
        };
      
        let idCounter = 1;
      
        const flattenArr = accordion.flatMap((item) =>
          item.list.map((lists) => ({ id: idCounter++, name: item.name, lists }))
        );
      
        return (
          <div className="accordion">
            {accordion.map((sectionName) => (
              <div key={sectionName.name} className="sectionName">
                <button
                  className="btn"
                  style={{ margin: "10px" }}
                  onClick={() => toggleExpanded(sectionName.name)}
                >
                  {sectionName.name} {expandedStates[sectionName.name] ? "▲" : "▼"}
                </button>
      
                {expandedStates[sectionName.name] && (
                  <div className="expandable">
                      {flattenArr
                        .filter((item) => item.name === sectionName.name)
                        .map((item) => (
                          <p key={item.id}>
                            {`${item.id}. ${item.lists}`}
                          </p>
                        ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      };
      
      export default AccordionList;

      // const MovieList = () => {
//         const [expanded, setExpanded] = useState(false);
//         let idCounter = 1; // Initialize id counter
      
//         const flattenArr = movies.flatMap((item) =>
//           item.actors.map((actor) => ({ id: idCounter++, actor }))
//         );
      
//         return (

//             <div className="movie">
//             <button className="btn" style={{margin:'10px'}} onClick={() => setExpanded(!expanded)}>
//             Show {expanded ? "▲" : "▼"} 
                
//             </button>
            
//                 {expanded ? (
//                  <div className="expandable">


//             <ul>
//             {flattenArr.map((item) => (
//               <li key={item.id}>
//                 {`ID: ${item.id}, Letter: ${item.actor}`}
//               </li>
//             ))}
//             </ul>
//             </div>
//             ) : null}
//             </div>
          
//         );
//       };
      
//       export default MovieList;



// return (
//     <div className="App">
//       {movies.map((movie) => {
//         return <Movie 
//         key={movie.name} 
//         movieInformation={movie}></Movie>;
//       })}
//     </div>
//   );

//   function Movie(props) {
//     const [expanded, setExpanded] = useState(false);
//     const { movieInformation } = props;

//         let idCounter = 1; // Initialize id counter
      
//         const flattenArr = movies.flatMap((item) =>
//             item.actors.map((actor) => ({ id: idCounter++, actor }))
//         );

//     return (
//       <div className="movie">
//         <button className="btn" style={{margin:'10px'}} onClick={() => setExpanded(!expanded)}>
//         {movieInformation.name} {expanded ? "▲" : "▼"} 
    
//         </button>

//         {expanded ? (
//           <div className="expandable">
            
//             <h2>{movieInformation.name}</h2>
//                 {movieInformation.actors.map((actor, index) => 
//                 (
                    
//                 <p key={index}> {index}. {actor} </p>
//                 ))}
            
//           </div>
//         ) : null}
//       </div>
      
//     );
//   }  