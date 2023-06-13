import MeetingList from "../components/meetups/MeetupList";
export const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "This is first meetup",
    image:
      "https://interintellect.com/wp-content/uploads/2023/04/venti-views-cHRDevKFDBw-unsplash-2-1.jpg",
    address: "1 Warde Street",
    description: "Thsi is first meetup",
  },
  {
    id: "m2",
    title: "This is second meetup",
    image:
      "https://interintellect.com/wp-content/uploads/2022/04/santamonica.jpg",
    address: "1 Warde Street",
    description: "This is second meetup",
  },
];
function Home(props) {
  return (
    
      <MeetingList meetups={props.meetups} />
  );
}

export async function getStaticProps(){
  return {
    props:{
      meetups:DUMMY_MEETUP
    }
  }
}

export default Home;
