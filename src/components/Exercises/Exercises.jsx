import EmptyContainer from "../common/EmptyContainer/EmptyContainer";
import runningImg from "../../illustrations/running.svg";

function Exercises({ handleAddExercise }){
    return(
        <EmptyContainer
        stackSpacing={2}
          imageAlt="freestyling human"
          imageSrc={runningImg}
          h3text="Are we freestyling?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
          btnText="Add exercise"
          btnVariant="contained"
          handleClick={handleAddExercise}
        >
        </EmptyContainer>
    )
}

export default Exercises;