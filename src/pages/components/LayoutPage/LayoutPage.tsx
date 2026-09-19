import ComponentDemo from "../../ComponentsDemo";
import { basicLayout, customImages, masnoryLayout } from "./layoutExamples";
import Layouts from "./Layouts/Layouts";

const LayoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Image List</h2>
        <ComponentDemo code={basicLayout}>
          <Layouts variant="basic" />
        </ComponentDemo>
      </section>

      <section className="space-y-4 ">
        <h2 className="text-2xl font-semibold ">Masonry image list</h2>
        <ComponentDemo code={masnoryLayout}>
          <Layouts variant="masonry" />
        </ComponentDemo>
      </section>

      <section className="space-y-4 ">
        <h2 className="text-2xl font-semibold ">Custom image list</h2>
        <ComponentDemo code={customImages}>
          <Layouts variant="custom" />
        </ComponentDemo>
      </section>
    </div>
  );
};

export default LayoutPage;
