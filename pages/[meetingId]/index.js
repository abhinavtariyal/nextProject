import MeetupDetails from "../../components/meetups/MettupDetails";
import { DUMMY_MEETUP } from "../index";
function Meetup() {
  return (
    <MeetupDetails
      title={DUMMY_MEETUP[0].title}
      address={DUMMY_MEETUP[0].address}
      image={DUMMY_MEETUP[0].image}
      description={DUMMY_MEETUP[0].description}
    />
  );
}

export default Meetup;
