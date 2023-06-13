import classes from './MettupDetails.module.css'
import { Fragment } from "react";

function MeetupDetails(props) {
  return (
    <section className = {classes.detail}>
      <section>
        <img src={props.image} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </section>
  );
}

export default MeetupDetails;
