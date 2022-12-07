import EmptyContainer from "../common/EmptyContainer/EmptyContainer";
import runningImg from "../../illustrations/running.svg";

function Exercises(){
    return(
        <EmptyContainer
        stackSpacing={2}
          imageAlt="freestyling human"
          imageSrc={runningImg}
          h3text="Are we freestyling?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
          btnText="Add exercise"
          btnVariant="contained"
        >
        </EmptyContainer>
    )
}

export default Exercises;