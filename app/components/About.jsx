var React = require('react');

var About = (props) =>{
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React. I have build this for The complate react web app developer course.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io.react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather Map</a>
        </li>
      </ul>
    </div>
  );
}
module.exports = About;
