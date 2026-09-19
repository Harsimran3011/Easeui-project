import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { basicImages } from "../layoutData";

const BasicImageList = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {basicImages.map((item) => (
        <ImageListItem key={`${item.img}`}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={`${item.title}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default BasicImageList;
