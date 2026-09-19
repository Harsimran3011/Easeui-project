import type { layoutVariants } from "@/components/Layout";
import BasicImageList from "./BasicImageList";
import MasonryImageList from "./MasonryImageList";
import CustomImageList from "./CustomImageList";

type layoutProps = {
  variant: layoutVariants;
};

const Layouts = ({ variant }: layoutProps) => {
  switch (variant) {
    case "basic":
      return <BasicImageList />;
    case "masonry":
      return <MasonryImageList />;
    case "custom":
      return <CustomImageList />;
  }
};

export default Layouts;
