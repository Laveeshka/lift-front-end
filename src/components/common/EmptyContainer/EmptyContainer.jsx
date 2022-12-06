import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CommonButton from "../Button/Button";
import Typography from "@mui/material/Typography";

//think of an alternative, descriptive name
function EmptyContainer({
  stackSpacing,
  imageAlt,
  imageSrc,
  h3text,
  text,
  btnText,
  btnColor,
  btnDisabled,
  btnSize,
  btnVariant,
  btnSx,
  handleClick
}) {
  return (
      <Stack spacing={stackSpacing} justifyContent="flex-start">
        <img alt={imageAlt} src={imageSrc} />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {h3text}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {text}
        </Typography>
        <CommonButton
          color={btnColor}
          disabled={btnDisabled}
          size={btnSize}
          variant={btnVariant}
          sx={btnSx}
          handleClick={handleClick}
        >
          {btnText}
        </CommonButton>
      </Stack>
  );
}

export default EmptyContainer;
