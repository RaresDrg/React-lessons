import PropTypes from "prop-types";

const TutorsList = ({ tutors }) => {
  return (
    <ul>
      {tutors.map((tutor) => (
        <li key={tutor.phone}>{`${tutor.firstName} ${tutor.lastName}`}</li>
      ))}
    </ul>
  );
};

TutorsList.propTypes = {
  tutors: PropTypes.array,
};

export default TutorsList;
