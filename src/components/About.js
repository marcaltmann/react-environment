import React from 'react';
import { Route, Link } from 'react-router-dom';

const Marc = () => (
  <div>
    Marc
  </div>
);

const Peter = () => (
  <div>
    Peter
  </div>
);

const About = (props) => {
  const { match, location, history } = props;

  const o = {
    monday: 'nice',
    tuesday: 'also nice',
    wednesday: 'no',
  };

  const new_o = {
    ...o,
    wednesday: 'great',
  };

  console.log(o, new_o);

  // console.log(match);
  // console.log(location);
  // console.log(history);

  //history.goBack();

  return (
    <div>
      This is an example app. <Link to="marc">Marc</Link>, <Link to="peter">Peter</Link>

      <hr/ >

      <Route path="marc" component={Marc} />
      <Route path="peter" component={Peter} />
    </div>
  );
};

export default About;
