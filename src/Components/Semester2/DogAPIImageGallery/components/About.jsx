import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import styles from "./About.module.css";
const About = () => {
  const [showInfo, setShowInfo] = useState({
    header: false,
    imageGallery: false,
    breedSelector: false,
    dogCarousel: false,
    footer: false,
    about: false,
    packages: false,
    app: false,
  });

  const toggleInfo = (section) => {
    setShowInfo((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className={styles.aboutPageWrapper}>
      <h1>Components Overview</h1>
      <h1>
        Header{" "}
        <span
          onClick={() => toggleInfo("header")}
          className={styles.dropDownArrow}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.header && (
        <p>
          <h2>Header Info:</h2>
          <p>
            The header is a component that appears at the top of the page. It is
            routed in app.js using react-router-dom to display before the
            content on all pages.
          </p>
        </p>
      )}
      <h1>
        App.js{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("app")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.app && (
        <p>
          <h2>App.js info:</h2>
          <p>
            <code>const [breed, setBreed] = useState("");</code>: This sets up a
            state variable breed with an initial value of an empty string and a
            function setBreed to update it.
            <br />
            <br />
            <code>const [numImages, setNumImages] = useState(1);</code>: This
            sets up a state variable numImages with an initial value of 1 and a
            function <br />
            setNumImages to update it.
            <br />
            <br />
            <code>const [images, setImages] = useState([]);</code>: This sets up
            a state variable images with an initial value of an empty array and
            a function setImages to update it.
          </p>
          <br />
          <h2>fetching:</h2>
          <p>
            The <code>fetchImages</code> function is defined to fetch images
            from the Dog CEO API based on the selected breed and number of
            images. <code>useEffect</code> is a hook that runs the fetchImages
            function whenever the breed or numImages state variables change.
          </p>
          <br />
          <br />
          <h2>Rendering:</h2>
          <p>
            <br />
            <code>Router</code>: Wraps the whole app to enable routing.
            <br />
            <br />
            <code>Header</code> and <code>Footer</code>: Custom components for
            the header and footer of the app. Routes: Defines different routes
            for the app. <br />
            <br />
            <code>/:</code> The home route that shows the BreedSelector,
            ImageGallery, and a button to view images as a carousel. <br />
            <br />
            <code>/carousel</code>: The route that shows the DogCarousel
            component with the selected breed and number of images. <br />
            <br />
            <code>/about</code>: The route that shows the About component.
            <br />
            <br />
            <code>Link</code>: Used to navigate between routes. button: A button
            that navigates to the <code>/carousel</code> route when clicked,
            showing the images in a carousel view.
          </p>
        </p>
      )}
      <h1>
        Image Gallery{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("imageGallery")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.imageGallery && (
        <p>
          <h2>Image Gallery info:</h2>
          <p>
            <code>ImageGallery</code>: This is a functional component defined
            using an arrow function.
            <br />
            <br />
            <code>images</code>: The component receives a prop called images.
            This is an array of image URLs passed down from the parent component
            (App.js in this case).
            <br />
            <br />
            <code>{`{images.map((image, index) => (...))}`}</code>: This is
            JavaScript code embedded inside the JSX. It loops through each image
            URL in the images array and returns an <code>&lt;img&gt;</code>{" "}
            element for each one.
            <br />
            <br />
            <code>images.map</code>: The map function is used to iterate over
            the images array.
            <br />
            <br />
            <code>(image, index)</code>: For each image URL in the array, the
            map function provides the image (the URL) and index (the position in
            the array).
            <br />
            <br />
            <code>
              &lt;img key={`{index}`} src={`{image}`} alt="Dog"
              className="gallery-image" /&gt;
            </code>
            : This creates an <code>&lt;img&gt;</code> element for each image.
            <br />
            <br />
            <code>key={`{index}`}</code>: The key prop helps React identify
            which items have changed, are added, or are removed. It should be a
            unique identifier. Here, the index is used as a key.
            <br />
            <br />
            <code>src={`{image}`}</code>: This sets the source of the image to
            the current image URL.
          </p>
        </p>
      )}

      <h1>
        Breed Selector{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("breedSelector")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.breedSelector && (
        <p>
          <h2>BreedSelector info:</h2>
          <p>
            <p>
              The <code>BreedSelector</code> component is built using React. It
              imports <code>useState</code> and <code>useEffect</code> from
              React to manage state and side effects, and it also imports an
              icon from <code>react-icons</code>.
              <br />
              <br />
              The component uses <code>useState</code> to create a{" "}
              <code>breeds</code> state, which is initialized as an empty array.
              The <code>useEffect</code> hook is used to fetch a list of dog
              breeds from an API when the component first mounts. The fetched
              breed names are stored in the <code>breeds</code> state.
              <br />
              <br />
              The component includes a form with two main inputs: a dropdown to
              select a dog breed and an input to specify the number of images.
              The dropdown options are populated dynamically from the{" "}
              <code>breeds</code> state.
              <br />
              <br />
              When the form is submitted, the <code>handleSubmit</code> function
              prevents the default form submission behavior. It then retrieves
              the selected breed and the number of images from the form inputs
              and calls the <code>setBreed</code> and <code>setNumImages</code>{" "}
              functions passed as props to update these values.
              <br />
              <br />
              The form also includes a submit button that triggers the{" "}
              <code>handleSubmit</code> function when clicked. This button
              includes an icon from <code>react-icons</code> to enhance its
              appearance.
            </p>
          </p>
        </p>
      )}

      <h1>
        Dog Carousel{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("dogCarousel")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.dogCarousel && (
        <p>
          <h2>Dog Carousel info:</h2>
          <p>
            The <code>DogCarousel</code> component is built using React. It
            imports <code>useState</code> and <code>useEffect</code> from React
            to manage state and side effects, and it also imports{" "}
            <code>Carousel</code> from <code>react-responsive-carousel</code>{" "}
            for the carousel functionality. Additionally, it imports{" "}
            <code>useNavigate</code> from <code>react-router-dom</code> for
            navigation and an icon from <code>react-icons</code>.
            <br />
            <br />
            The component uses <code>useState</code> to create an{" "}
            <code>images</code> state, which is initialized as an empty array.
            The <code>useNavigate</code> hook is used to navigate to different
            routes.
            <br />
            <br />
            The <code>useEffect</code> hook is used to fetch dog images from an
            API when the component mounts or when the <code>breed</code> or{" "}
            <code>numImages</code> props change. If a breed is selected and the
            number of images is greater than zero, it fetches the images and
            stores them in the <code>images</code> state. If no breed is
            selected or the number of images is zero, it sets the{" "}
            <code>images</code> state to an empty array.
            <br />
            <br />
            The component renders a button that navigates back to the main page
            when clicked. It also conditionally renders a carousel if there are
            images in the <code>images</code> state. The carousel uses the{" "}
            <code>Carousel</code> component from{" "}
            <code>react-responsive-carousel</code> and maps over the{" "}
            <code>images</code> array to create an <code>&lt;img&gt;</code>{" "}
            element for each image. If there are no images, it displays a
            message prompting the user to select a breed and number of images
            and then fetch the images.
          </p>
        </p>
      )}

      <h1>
        Footer{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("footer")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.footer && (
        <p>
          <h2>Footer Info:</h2>
          <p>
            The footer is a component that appears at the bottom of the page. It
            is routed in app.js using react-router-dom to display after the
            content on all pages.
          </p>
        </p>
      )}

      <h1>
        About{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("about")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.about && (
        <p>
          The <code>About</code> component is built using React. It imports{" "}
          <code>useState</code> from React to manage state and an icon from{" "}
          <code>react-icons</code> for dropdown functionality.
          <br />
          <br />
          The component uses <code>useState</code> to create a{" "}
          <code>showInfo</code> state object that tracks the visibility of
          different sections of the page, such as <code>header</code>,{" "}
          <code>imageGallery</code>, <code>breedSelector</code>,{" "}
          <code>dogCarousel</code>, <code>footer</code>, <code>about</code>,{" "}
          <code>packages</code>, and <code>app</code>.
          <br />
          <br />
          The <code>toggleInfo</code> function updates the <code>showInfo</code>{" "}
          state to toggle the visibility of a specific section when the
          corresponding header is clicked.
          <br />
          <br />
          The component renders various sections, each with a header and a
          dropdown arrow icon. Clicking the arrow toggles the visibility of the
          associated section:
          <ul>
            <li>
              <code>Header</code>: Displays information about the header
              component of the application.
            </li>
            <li>
              <code>App.js</code>: Provides details about the state variables
              and rendering in the <code>App</code> component, including state
              setup with <code>useState</code>, fetching images, and routing.
            </li>
            <li>
              <code>Image Gallery</code>: Explains the <code>ImageGallery</code>{" "}
              component, including how it maps over image URLs to display them.
            </li>
            <li>
              <code>Breed Selector</code>: Describes the{" "}
              <code>BreedSelector</code> component, including state management,
              form handling, and rendering.
            </li>
            <li>
              <code>Dog Carousel</code>: Details the <code>DogCarousel</code>{" "}
              component, including state management, image fetching, and
              rendering a carousel.
            </li>
            <li>
              <code>Footer</code>: Gives information about the footer component
              that appears at the bottom of the page.
            </li>
            <li>
              <code>About</code>: Displays information about the about section.
            </li>
            <li>
              <code>Installed Packages</code>: Lists and explains the packages
              used in the project, including <code>react</code>,{" "}
              <code>react-image-carousel</code>, <code>react-router-dom</code>,{" "}
              <code>react-icons</code>, and <code>react-font-poppins</code>.
            </li>
          </ul>
        </p>
      )}
      <h1>
        Installed Packages{" "}
        <span
          className={styles.dropDownArrow}
          onClick={() => toggleInfo("packages")}
        >
          <IoIosArrowDropdown />
        </span>
      </h1>
      {showInfo.packages && (
        <p>
          <h2>Installed packages info:</h2>
          <p>
            To install these packages, you can use the following commands:
            <br />
            <code>
              `npm install react` | To run after installing use `npm start`
            </code>
            <br />
            <code>`npm install react-image-carousel`</code>
            <br />
            <code>`npm install react-router-dom`</code>
            <br />
            <code>`npm install react-icons`</code>
            <br />
            <code>`npm install react-font-poppins`</code>
          </p>
          <br />
          <h2>React:</h2>
          <p>
            React is a JavaScript library for building user interfaces. It
            allows developers to create reusable UI components and manage the
            state of their applications efficiently.
          </p>
          <br />
          <h2>React-image-carousel:</h2>
          <p>
            React-image-carousel is a component for creating image carousels in
            React applications. It provides an easy way to add a slideshow of
            images with various customization options.
          </p>
          <br />
          <h2>React-router-dom:</h2>
          <p>
            React-router-dom is a routing library for React applications. It
            enables the creation of single-page applications with dynamic
            routing, allowing for navigation between different views without a
            full page reload.
          </p>
          <br />
          <h2>React-icons:</h2>
          <p>
            React-icons is a library that provides a set of popular icons as
            React components. It includes icons from various icon libraries like
            Font Awesome, Material Design, and more, making it easy to use icons
            in your React projects.
          </p>
          <br />
          <h2>React-font-poppins:</h2>
          <p>
            React-font-poppins is a package that allows you to easily include
            the Poppins font in your React application. It simplifies the
            process of adding custom fonts to your project.
          </p>
        </p>
      )}
    </div>
  );
};

export default About;
