export const blogs = [
  {
    id: "1",
    colour: "#7238f5",
    textColour: "#fff",
    title: "Hoops Web App",
    year: "2024",
    icon: "public/code.svg",
    iconReverse: "public/code-reverse.svg",
    preview: "Event management platform built in NextJS.",
    cta: "",
    ctalink: "",
    content: (
      <div>
        <h2>What is it?</h2>
        <p>
          HOOPS is a user review, event and venue management app for small and
          medium business. It is being built on the React/NextJS stack as a web
          application, with a set of modern web technologies. Users can scan QR
          codes, book their reservations and review their experience in one go
          with HOOPS.
        </p>
        <h2>Scope</h2>
        <p>
          While ubiquitous QR codes have seen widespread use, the main
          bottleneck of serving a great user experience still lies on the
          landing page that the user will visit after scanning a QR code.
          Another gap often seen is once QR codes have served their purpose of
          allowing users to access links from their camera equipped smart
          devices, they are often disregarded and taken out of the user journey.
        </p>
        <p>
          HOOPS intends to bind QR codes and their link properties to be more
          intrinsic to the user journey to empower businesses. Though this is
          not a technical novelty, smarter use of QR codes, generated on demand
          can enrich the user experience for the customers.
        </p>
        <h2>Design system</h2>
        <p>
          As an early idea HOOPS is a simple event management website. But as
          the product design is refined and conceptualised further, there will
          be a need for an engaging user dashboard, or user centre. A seamless
          design and journey through different pages demands a basic design
          system to guide the component design with a coherent design language.
          HOOPS will be equiped with a component library and continously be
          updated as the product grows.
        </p>
        <img src="public/Hoops-website.jpg" alt="Website screenshot" />
        <h2>Work in progress</h2>
        <p>
          HOOPS is a product that will continue to grow, starting as a platform
          to launch and use the latest web technologies like NextJS, React and
          Typescript with a modern scalable backend (Postgres with Prisma and
          Supabase). With a design system to guide the design languange and
          components design, together with iterative product design process
          HOOPS hopefully will emerge into a useful valuable product that users
          can enjoy and rely on.
        </p>

        <button className="btn">Visit HOOPS</button>

        <button className="btn">HOOPS prototype in Figma</button>
      </div>
    ),
  },
  {
    id: "2",
    colour: "#009688",
    textColour: "#fff",
    title: "YesFresh Food Delivery App",
    year: "2023",
    icon: "public/figma.svg",
    iconReverse: "public/figma-reverse.svg",
    preview: "Food delivery app concept in Figma.",
    cta: "See Figma",
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

        <img src="/public/YesFresh-Splash.jpg" alt="YesFresh screenshot" />

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

        <img src="public/YesFresh-UX.jpg" alt="YesFresh screenshot" />
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

        <img src="public/YesFresh-Colours.jpg" alt="YesFresh screenshot" />
        <p className="img-caption">
          YesFresh colour palette, inspired by watermelon colours
        </p>

        <p>
          Mobile app legibility is the main factor affecting the design
          decisions. With lots of interaction and transfers between screens,
          users need to have responsive input icons with enough room to breath
          in the small mobile space.
        </p>
        <img src="public/YesFresh-UIsizings.jpg" alt="YesFresh screenshot" />
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

        <img
          src="public/YesFresh-ComponentLibrary.jpg"
          alt="YesFresh screenshot"
        />
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
        <img src="public/YesFresh-AutoLayout.jpg" alt="YesFresh screenshot" />
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
    icon: "public/coffeemug.svg",
    iconReverse: "public/coffeemug.svg",
    preview: "Have a Cuppa.",
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
          things UX/UI/Front-end. It's been recently rewritten in May 2024, and
          I try to keep this blog written in vanilla React and Vite with no
          other library, as my other go to stack is NextJS. The design is
          shamelessly stolen from Helena Zhang and Tobias Fried from the{" "}
          <a href="https://phosphoricons.com/">
            <strong>PhosporIcons</strong>
          </a>{" "}
          duo, please check out their works.
        </p>

        <h2>Zed is great</h2>
        <p>
          <strong>May 2024</strong>
        </p>
        <p>
          As a new developer especially, VSCode is definitely an amazing IDE.
          Once I look outside VSCode, there seems to be lots of collection of
          IDEs out there, all equally amazing in their own ways. The temptation
          is to explore and pick up something other than VSCode, and then get
          into a deep rabbit hole (VIM for example). No hate to VIM, would love
          to get into it one day, when I'm not trying to finish multiple
          projects and ideas (yes a common new developer symptom.
        </p>
        <p>
          To me, Zed is a simple yet powerful IDE, especially when I work on
          solo projects within a mono repo. The themes are amazing, it carries
          over the important keyboard shortcuts and developer experiences from
          VSCode or Jetbrain IDEs, and it has Copilot integration as well. I
          never felt that I misses anything important when using Zed.
          <a href="https://zed.dev/">
            <strong>Check Zed out</strong>
          </a>
        </p>

        <h2>The anatomy of digital fundraising campaign</h2>
        <p>
          <strong>TBA date</strong>
        </p>
        <p>
          This will be a write up on my experience working on digital projecsts
          in the non-profit space, detailing the common campaign structure of
          fundraising and awareness campaigns to engage the charity audience.
          Coming soon.
        </p>

        <h2>Cheatsheet</h2>
        <p>
          <strong>June 2024</strong>
        </p>
        <p>Coming soon.</p>

        <h2>Writing codes (using ChatGPT or Copilot) for Designers</h2>
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
    icon: "public/code.svg",
    iconReverse: "public/code.svg",
    preview:
      "Digital fundraising with Raisely and React components - Coming soon",
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
    icon: "public/figma.svg",
    iconReverse: "public/figma-reverse.svg",
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
