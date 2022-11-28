import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "flowbite-react";
import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What are the different ways to manage a state in a React application
          </Accordion.Title>
          <Accordion.Content className="p-4">
            <p className="text-gray-500 dark:text-gray-400">
              Every React component has a built-in state. This state is an
              object which stores the property values that belong to a
              component. State is able to keep data from different components
              in-sync because each state update re-renders all relevant
              components. svg viewer The built-in way that React provides for
              setting component states is by using setState() and adding “local
              state” to a class. There are several other ways to manage state​s
              in React, including the use of:
            </p>
            <p>
              <ul className="list-disc">
                <li>Hooks</li>
                <li>Context Api</li>
                <li>Apollo Link State</li>
              </ul>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            How does prototypical inheritance work?
          </Accordion.Title>
          <Accordion.Content>
            <p className="text-gray-500 dark:text-gray-400">
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          
            <Accordion.Title>React vs. Angular vs. Vue</Accordion.Title>
            <Accordion.Content>
              <h2 className="text-2xl font-bold">Anguler Vs React</h2>
              <p className="text-gray-500 dark:text-gray-400">
                If the choice you’re making is based on Angular vs React alone,
                then you’ll simply need to consider the pros and cons discussed
                for those libraries in this post. But overall, keep in mind that
                both libraries can be used for mobile and web apps, while
                Angular is generally better for more complex apps that are
                enterprise-ready. React often requires extra modules and
                components, which keeps the core library small, but means
                there’s extra work involved when incorporating outside tools.
                Angular, on the other hand, is more of a full-fledged solution
                that doesn’t require extras like React often does, though it
                does have a steeper learning curve for its core compared to
                React. React is more suitable for intermediate to advanced
                JavaScript developers who are familiar with concepts from ES6
                and up, while Angular favors those same developers who are also
                familiar with TypeScript.
              </p>

              <h2 className="text-2xl font-bold">React vs Vue</h2>
              <p className="text-gray-500 dark:text-gray-400">
                The choice between React vs Vue is often debated and it’s not an
                easy one. Vue has a vibrant and ever-growing community and has
                taken over popularity vs. React in many respects. React
                developers are still churning out lots of new components and
                extras, so there’s no sign that React is on the decline either.
                Vue is generally more suited to smaller, less complex apps and
                is easier to learn from scratch compared to React. Vue can be
                easier to integrate into new or existing projects and many feel
                its use of HTML templates along with JSX is an advantage.
                Overall, Vue might be the best choice if you’re a newer
                developer and not as familiar with advanced JavaScript concepts,
                while React is quite well suited for experienced programmers and
                developers who have worked with object-oriented JavaScript,
                functional JavaScript, and similar concepts.
              </p>
       
            
                <h2 className="text-2xl font-bold">Anguler Vs React</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If the choice you’re making is based on Angular vs React
                  alone, then you’ll simply need to consider the pros and cons
                  discussed for those libraries in this post. But overall, keep
                  in mind that both libraries can be used for mobile and web
                  apps, while Angular is generally better for more complex apps
                  that are enterprise-ready. React often requires extra modules
                  and components, which keeps the core library small, but means
                  there’s extra work involved when incorporating outside tools.
                  Angular, on the other hand, is more of a full-fledged solution
                  that doesn’t require extras like React often does, though it
                  does have a steeper learning curve for its core compared to
                  React. React is more suitable for intermediate to advanced
                  JavaScript developers who are familiar with concepts from ES6
                  and up, while Angular favors those same developers who are
                  also familiar with TypeScript.
                </p>
             
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
          <Accordion.Title>
            What is a unit test? Why should we write unit tests?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages. Unit testing is a component of test-driven
              development (TDD), a pragmatic methodology that takes a meticulous
              approach to building a product by means of continual testing and
              revision. This testing method is also the first level of software
              testing, which is performed before other testing methods such as
              integration testing. Unit tests are typically isolated to ensure a
              unit does not rely on any external code or functions. Testing can
              be done manually but is often automated.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              A unit test typically comprises of three stages: plan, cases and
              scripting and the unit test itself. In the first step, the unit
              test is prepared and reviewed. The next step is for the test cases
              and scripts to be made, then the code is tested. Test-driven
              development requires that developers first write failing unit
              tests. Then they write code and refactor the application until the
              test passes. TDD typically results in an explicit and predictable
              code base
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;
