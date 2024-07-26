import Highlight from "react-highlight";
import "highlight.js/styles/github-dark.css";

const codeStringHoops1 = `
  import { gql } from '@apollo/client';

  export const GET_USER_BOOKING = gql\`
    query GetUserBooking($userId: ID!) {
      booking(userId: $userId) {
        date
        time
        tableId
        qrid
      }
    }
  \`;
`;

const codeStringHoops2 = `
  import { gql } from '@apollo/client';

  export const UPDATE_BOOKING = gql\`
  mutation UpdateBookingTime($userId: ID!, $newTime: String!) {
    updateBookingTime(userId: $userId, newTime: $newTime) {
      date
      time
      tableId
      qrid
    }
  }
 \`;
`;

const codeStringHoops3 = `
  import { gql } from '@apollo/client';
  import client from '../apollo-client';

  interface UserBookingDisplayProps {
    userId: number;
  }

  const GET_USER_BOOKING = gql\`
    query GetUserBooking($userId: Int!) {
      booking(userId: $userId) {
        date
        time
        tableId
        qrid
      }
    }
  \`;

  export default async function UserBookingDisplay({ userId }:
  UserBookingDisplayProps) {
    const { data } = await client.query({
      query: GET_USER_BOOKING,
      variables: { userId },
    });

    export default async function UserBookingDisplay(
    { userId }: UserBookingDisplayProps) {
      try {
        const { data, loading, error } = await client.query({
          query: GET_USER_BOOKING,
          variables: { userId },
        });

        if (loading) return <p>{loading.message}</p>;
        if (error) return <p>{error.message}</p>;

        return (
          <div>
            {data && data.booking ? (
              <div className="user-dashboard-booking">
                <p>Booking date: {data.booking.date}</p>
                <p>Booking time: {data.booking.time}</p>
                <p>Your table number: {data.booking.tableId}</p>
                <p>Booking ID: {data.booking.qrid}</p>
              </div>
            ) : (
              <p>No booking found.</p>
            )}
          </div>
        );
      } catch (error) {
        console.error('Error retrieving user booking:', error);
        return <p>We are unable to retrieve your booking data at the moment.</p>;
      }
    }
  `;

export const blogs = [
  {
    id: "1",
    colour: "#7238f5",
    textColour: "#fff",
    title: "Hoops Web App",
    year: "2024",
    icon: "/code.svg",
    iconReverse: "/code-reverse.svg",
    preview: "Building event management platform in NextJS",
    cta: "Visit HOOPS website",
    ctalink: "https://hoopsqr.netlify.app/",
    content: (
      <>
        <div>
          <h2>What is it?</h2>
          <p>
            HOOPS is a user review, event and venue management app for small and
            medium business. It is being built on the{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>React</strong>
            </a>{" "}
            and{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>NextJS</strong>
            </a>{" "}
            stack as a web application, with a set of modern web technologies.
            Users can scan QR codes, book their reservations and review their
            experience on one platform with HOOPS.
          </p>

          <img src="/Hoops-website.jpg" alt="Website screenshot" />

          <h2>Scope</h2>
          <p>
            While QR codes have seen widespread use, the main bottleneck of
            serving a great user experience still lies on the landing page that
            the user will arrive on after scanning a QR code.
          </p>
          <p>
            <strong>
              HOOPS intends to bind QR codes with a booking API to enable better
              event experience
            </strong>
            . With smarter use of dynamic QR codes, generated on demand, it can
            enrich the personal experience for the customers with user reviews
            and give businesses more power and insights about their venues or
            events.
          </p>

          <h2>Using GraphQL to create a booking API</h2>
          <p>
            HOOPS uses GraphQL with Prisma and Apollo to build a booking API
            that can be used by the business and customer modules. While there
            are advantages and disadvantages of using GraphQL vs REST, I feel
            that this is a good learning opportunity to take on GraphQL and run
            with it.
          </p>

          <p>
            Some simple examples of GraphQL query and mutation, here we are
            creating a query to fetch user booking information based on the QR
            code custom link as the unique id.
          </p>

          <div className="highlight-modify">
            <Highlight language="jsx">{codeStringHoops1}</Highlight>
          </div>

          <p>And a mutation to update the booking time.</p>
          <div className="highlight-modify">
            <Highlight language="jsx">{codeStringHoops2}</Highlight>
          </div>

          <p>
            And now we can use any data which is tied to the QR code and
            dynamically serve them on any page or component, for example showing
            user booking data this RSC below.
          </p>
          <div className="highlight-modify">
            <Highlight language="jsx">{codeStringHoops3}</Highlight>
          </div>

          <h2>Design system</h2>
          <p>
            As an early idea HOOPS is a simple event management website. But as
            the product design is refined and conceptualised further, there will
            be a need for an engaging user dashboard, or user centre. HOOPS will
            be equiped with a component library and continously be updated as
            the product grows. This section will be updated with a link to HOOPS
            design system library, and most likely it will make good use of{" "}
            <a
              href="https://storybook.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Storybook</strong>
            </a>{" "}
            as well.
          </p>

          <img src="/Hoops-component.jpg" alt="screenshot" />

          <h2>Visual programming</h2>
          <p>
            There is a lot of buzz on low code and visual programming recently,
            so I'm eager to try out tools like{" "}
            <a
              href="https://nodes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Nodes.io</strong>
            </a>{" "}
            . I feel it will certainly help planning and writing the more
            complex parts of HOOPS API once it evolves to cover more use cases.
          </p>

          <h2>Work in progress</h2>
          <p>
            HOOPS is a product that will continue to grow, starting as a
            platform to launch and use the latest web technologies like NextJS,
            React and Typescript with a modern scalable backend (Postgres with
            Prisma and Supabase). The idea has grown to add an API to serve
            flexible data.
          </p>
          <p>
            With a design system to guide the design languange and components
            design, together with iterative product design process HOOPS
            hopefully will emerge into a useful valuable product that users can
            enjoy and rely on.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "2",
    colour: "#009688",
    textColour: "#fff",
    title: "YesFresh Food Delivery App",
    year: "2023",
    icon: "/figma.svg",
    iconReverse: "/figma-reverse.svg",
    preview: "Food delivery app concept in Figma",
    cta: "See in Figma",
    ctalink:
      "https://www.figma.com/proto/tJlMYdV8eiVzqFkMnDXEZG/YESFRESH?page-id=0%3A1&type=design&node-id=1050-12583&viewport=1268%2C279%2C0.17&t=MirwrGpoXWsJLQ8K-1&scaling=min-zoom&starting-point-node-id=1050%3A12583&mode=design",
    content: (
      <div>
        <h2>Background</h2>
        <p>
          End to end product design is a different task from producing some
          elements of page UI or delivering UX artefacts. Working on a complete
          product design requires swapping hats and views between developing the
          right product features, thinking about user journey and the right
          solution and fidelity for your UI. YesFresh, as mobile app product,
          encapsulates the end to end design process for such complete design
          work.
        </p>

        <img src="/YesFresh-Splash.jpg" alt="YesFresh screenshot" />

        <h2>The Brief</h2>
        <p>
          Apps like Menulog, Uber, Deliveroo(RIP) offers food delivery from
          their partner restaurants to our doors. While a different model like
          HelloFresh or Lite 'n Easy uses a subscription model to let users
          schedule and plan meals. YesFresh attempts to combine both models,
          offering the user to choose meals from their favourite restaurants,
          with the flexibility of scheduling and planning the meal delivery.
        </p>

        <h2>Product Discovery</h2>
        <p>
          Identify the set of features that need to be designed and key screens
          that allow the users to complete their actions and goals. Beforehand,
          we look at possible user personas with their user stories and how we
          bring together these features in the following screens.
          <ul>
            <li>
              a screen to list option of restaurant and meals available to the
              user
            </li>
            <li> a meal planning and scheduling screen</li>
            <li>
              meal item selection and management screen, meal planning and
              scheduling screen
            </li>
            <li>and finally, as usual, a member dashboard</li>
          </ul>
        </p>

        <img src="/YesFresh-UX.jpg" alt="YesFresh screenshot" />
        <p className="img-caption">
          Product discovery with multiple user stories
        </p>

        <h2>Design decisions</h2>
        <p>
          Accessibility as usual is key providing enough contrast for colour
          selections and distinct colour palette that represents healthy smart
          choices are also required to make the app look and feel distinct from
          the competitors in the space.
        </p>

        <img src="/YesFresh-Colours.jpg" alt="YesFresh screenshot" />
        <p className="img-caption">
          YesFresh colour palette, inspired by watermelon colours
        </p>

        <p>
          Mobile app legibility is the main factor affecting the design
          decisions. With lots of interaction and transfers between screens,
          users need to have responsive input icons with enough room to breath
          in the small mobile space.
        </p>
        <img src="/YesFresh-UIsizings.jpg" alt="YesFresh screenshot" />
        <p className="img-caption">
          Correctly sizing icons for sticky navigation bar
        </p>

        <h2>Building a component library</h2>
        <p>
          I love a good component library, even with a collection of some basic
          buttons or elements. Sometimes using popular set and forget UI
          libraries and ready to use/consume UI primitives library like Radix
          allows speedy development of component libraries for our projects.
        </p>

        <p>
          Not all organisations or projects need can be answered with directly
          using or importing basic primitives or premade components. When we are
          required to build have a unique and coherent design with iterable
          design delivery, having a reusable component library has enabled me to
          setup my components early and save time in the long run.
        </p>

        <img src="/YesFresh-ComponentLibrary.jpg" alt="YesFresh screenshot" />
        <p className="img-caption">
          A robust component library is needed to solidify design process, weed
          out inconsistencies and enable iterations
        </p>

        <h2>Figma: Auto-layout, Styles, and Variables</h2>
        <p>
          As an early adopter of Figma, the core feature of Figma for me has
          always been a light weight browser based design tool, versatile and
          powerful at the same time. For users of Adobe CC Suite tools like
          Photoshop or Illustrator, or designers growing up from print design
          background, Auto layout could feel restrictive sometimes (or at least
          that's how I felt initially about it).
        </p>
        <p>
          You can get away with the freedom of assigning layout manually or just
          let it go, trust the process and let Auto layout take over. I have
          loved how Auto-layout works, and admitedly uses it more often that not
          now, when maybe I shouldn't.
        </p>
        <p>
          Styles is a common feature found in other design tools (like
          Indesign), where in Figma, it's a powerful tool that lets you quickly
          prototype, build up your design library or deliver your final design.
        </p>
        <p>
          Variables take this to the next level with more granularity and
          control, and lets you use them as design tokens in your design system.
          Going back to YesFresh, the requirement to deliver a complete design
          means using all these Figma features as a disciplined designer with
          in-depth understanding, for example, setting up Auto-layouts correctly
          lets me edit one main component and transfer the changes properly to
          all component instances.
        </p>
        <img src="/YesFresh-AutoLayout.jpg" alt="YesFresh screenshot" />
        <p className="img-caption">
          Set Autolayout once, and recompose components multiple times with ease{" "}
        </p>

        <h2>AI Generated Figma Components?</h2>
        <p>
          In the early part of the design process I have tested several Figma
          plugins to generate components building block and the results were far
          from interesting or useful. Figma has recently acquired Diagram, an
          AI-UI startup and while AI tool are helpful in some use cases (nice
          Lorem Ipsums, or quickly generating ideas and iterating through them),
          this project has yet to find the full potential of AI in UI, at the
          same time I'm positively looking forward to see and use AI tools in
          Figma projects.
        </p>

        <h2>Conclusion</h2>
        <p>
          This project has brought together the different parts of using Figma
          in my professional experience to an end-to-end delivery of a design
          project. Further from current state I wish to see design backlog and
          refinement of each screens or some of the design features, to mature
          the design further.
        </p>
      </div>
    ),
  },
  {
    id: "3",
    colour: "#E0E0E0",
    textColour: "",
    title: "Blog",
    year: "2024",
    icon: "/coffeemug.svg",
    iconReverse: "/coffeemug.svg",
    preview: "Have a Cuppa",
    cta: "",
    ctalink: "",
    content: (
      <div>
        <h2>About this Blog</h2>
        <p>
          <strong>May 2024</strong>
        </p>
        <p>
          Welcome to my site and the blog area, where I share my thoughts on all
          things UX/UI/Front-end.
        </p>
        <p>
          It's been recently rewritten in May 2024, and I try to keep this blog
          written in vanilla React and Vite with as few libraries and
          dependencies as possible, to keep it simple and different from my
          other go to stack like NextJS. The design is shamelessly stolen from
          Helena Zhang and Tobias Fried from the{" "}
          <a
            href="https://phosphoricons.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>PhosporIcons</strong>
          </a>{" "}
          duo, so please check out their works. (while I work on something more
          original)
        </p>

        <h2>Git explained for Designers - Explain it to me like I'm five</h2>
        <p>
          <strong>July 2024</strong>
        </p>
        <p>
          I will start the preview for this blog entry by saying (from personal
          experience) that whilst software developers and engineers have taken
          much care and effort to simplify and onboard people to programming
          concepts, in the mission to make it usable and applicable for as many
          people and users as possible, most often than not, they fail to
          estimate how technical the presentation remains to non-technical
          users.
        </p>

        {/* <p>As a beginner developer with designer background, the initial experiences trying to get onto technical documentations - most of the time to get projects started or try to learn something - was a steep climb. After a certain period of time getting used to this, the difficulty does plateau, maybe it's the experience working with certain frameworks or technologies, or maybe it's getting used to the documentations.

          On the flip side, things like developer documentations have improved
          so much lately both in terms of the page UX and the content writing –
          we can go back to the days of old PHP or JQuery documentations, those
          days I would just give up and go home as a designer – but the gap is
          still there, and it's still very much an effort, and can be a
          frustration for those who don't code, to understand the basic concepts
          and let alone peruse the documentations. I suppose it is a
          documentation instead of a tutorial or guide.
        </p> */}

        <p>
          With that in mind, as background context and preview, this article
          will try to help explain the basic concepts of one of the important
          foundations of working with code, the Git repository, for designers
          and non-coders. Which will hopefully be useful the next time you catch
          your developers a conversation or helping understand development works
          better or when working together in a project.
        </p>

        <p>Coming soon</p>

        <h2>Zed is great</h2>
        <p>
          <strong>May 2024</strong>
        </p>
        <p>
          As a new developer especially VSCode is definitely an amazing IDE, and
          you can get running off the ground quickly and more importantly have a
          standardised setup like other devs or engineers in your team. But once
          I look outside VSCode, there seems to be lots of options out there,
          all equally amazing in their own ways. The temptation is to explore
          and pick up something other than VSCode, and then get into a deep
          rabbit hole (VIM for example). No hate to VIM, would love to get into
          it one day, when I'm not trying to finish multiple projects and ideas
          (yes a common new developer symptom.)
        </p>
        <p>
          I stumbled upon Zed one day during my usual run of scanning across the
          internet for new things and have pleasantly stuck to it for simpler
          solo projects. Zed is a light weight and powerful IDE with a retro
          flair, it's very comfy especially when I work on solo projects within
          a mono repo. The themes are amazing, it carries over the important
          keyboard shortcuts and developer experiences from VSCode or Jetbrain
          IDEs, and it has Copilot integration as well.{" "}
          <a href="https://zed.dev/" target="_blank" rel="noopener noreferrer">
            <strong>Check Zed out</strong>
          </a>
        </p>

        <h2>The anatomy of digital fundraising campaign</h2>
        <p>
          <strong>TBA date</strong>
        </p>
        <p>
          With experience working on digital projecsts in the non-profit space,
          this article will detail the common campaign structure of fundraising
          and awareness campaigns when engaging the non-profit audience. Coming
          soon.
        </p>

        <h2>Cheatsheet</h2>
        <p>
          <strong>June 2024</strong>
        </p>
        <p>Coming soon.</p>

        <h2>Writing codes (with ChatGPT) as a Designer</h2>
        <p>
          <strong>TBA date</strong>
        </p>
        <p>Coming soon.</p>
      </div>
    ),
  },
  {
    id: "4",
    colour: "#29B6F6",
    textColour: "",
    title: "Fundraise for Good",
    year: "",
    icon: "/code.svg",
    iconReverse: "/code.svg",
    preview: "Digital fundraising with Raisely and React – Coming soon",
    cta: "",
    ctalink: "",
    content: (
      <div>
        <h2>Coming soon</h2>
      </div>
    ),
  },
  {
    id: "5",
    colour: "#E53935",
    textColour: "#fff",
    title: "CSS Stylist",
    year: "",
    icon: "/figma.svg",
    iconReverse: "/figma-reverse.svg",
    preview: "Coming soon",
    cta: "",
    ctalink: "",
    content: (
      <div>
        <h2>Coming soon</h2>
      </div>
    ),
  },
];
